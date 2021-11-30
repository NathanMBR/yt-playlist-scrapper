import puppeteer from "puppeteer";
import { getEndOfPageElement, getVideoListElements } from "./index.js";
import { awaitTime } from "./helpers/index.js";

export const rollPageUntilEnd = async (page: puppeteer.Page) =>
	await page.evaluate(async () => {
		const endOfPage = await getEndOfPageElement(page);
		let videoList = await getVideoListElements(page);

		let previousLoadVideoQuantity = 0;
		let laterLoadVideoQuantity = videoList.length;

		/* eslint-disable no-await-in-loop */
		while (previousLoadVideoQuantity < laterLoadVideoQuantity) {
			previousLoadVideoQuantity = laterLoadVideoQuantity;

			endOfPage.scrollIntoView({ block: "end" });
			await awaitTime(4000);
			videoList = await getVideoListElements(page);

			laterLoadVideoQuantity = videoList.length;
		}
		/* eslint-enable no-await-in-loop */
	});