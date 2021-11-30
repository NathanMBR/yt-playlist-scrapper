import puppeteer from "puppeteer";
import environment from "../settings/env.js";

export const getVideoListElements = async (page: puppeteer.Page) =>
	await page.evaluate(async () => {
		await page.waitForSelector(environment.videoHolderElement as string);

		const videoList = document.querySelectorAll(environment.videoHolderElement as string);

		if (videoList.length <= 0)
			throw new Error("The list is probably empty.");

		return [...videoList];
	});