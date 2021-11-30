import { Page } from "puppeteer";
import { environment } from "../settings/index.js";

export const getVideosList = async (page: Page) =>
	await page.evaluate(
		(videoHolderElementEval: string) =>
			[...document.querySelectorAll(`${videoHolderElementEval} a#thumbnail`)],

		environment.videoHolderElement
	);