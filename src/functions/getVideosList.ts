import { Page } from "puppeteer";
import { environment } from "../settings/index.js";

export const getVideosList = async (page: Page) =>
	await page.evaluate(
		(videoHolderElementEval: string) =>
			[...document.querySelectorAll<HTMLAnchorElement>(`${videoHolderElementEval} a#thumbnail`)].map(anchor => anchor.href.split("&")[0]),

		environment.videoHolderElement
	);