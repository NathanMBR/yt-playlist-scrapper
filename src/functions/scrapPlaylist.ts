import puppeteer, { WaitForOptions } from "puppeteer";
import { environment } from "../settings/index.js";
import {
	rollPageUntilEnd,
	getVideosList,
	compareVideoLists,
	awaitTime
} from "./index.js";

export const scrapPlaylist = async (url: string) => {
	const puppeteerSettings = {
		launch: {
			headless: environment.hideBrowser
		},
		goto: {
			waitUntil: "load",
			timeout: 0
		} as WaitForOptions
	};

	const browser = await puppeteer.launch(puppeteerSettings.launch);

	const hiddenVideosPage = await browser.newPage();
	await hiddenVideosPage.goto(url, puppeteerSettings.goto);
	await rollPageUntilEnd(hiddenVideosPage);

	const allVideosPage = await browser.newPage();
	await allVideosPage.goto(url, puppeteerSettings.goto);

	const moreOptionsMenu = await allVideosPage.$x(environment.showMenuXPath as string);
	await moreOptionsMenu[0].click();
	await awaitTime(500);
	const loadHiddenVideos = await allVideosPage.$x(environment.loadHiddenVideosXPath as string);
	await Promise.all(
		[
			loadHiddenVideos[0].click(),
			allVideosPage.waitForNavigation(puppeteerSettings.goto)
		]
	);

	await rollPageUntilEnd(allVideosPage);

	const hiddenVideosList = await getVideosList(hiddenVideosPage);
	const allVideosList = await getVideosList(allVideosPage);

	const listComparison = compareVideoLists(hiddenVideosList, allVideosList);

	await browser.close();

	return listComparison;
};