import puppeteer from "puppeteer";
import environment from "../settings/env.js";

export const getEndOfPageElement = async (page: puppeteer.Page) => {
	await page.waitForSelector(environment.rollReference as string);

	return await page.evaluate(
		async () => {
			const endOfPage = document.querySelector(environment.rollReference as string);

			if (!endOfPage)
				throw new Error("Roll reference element not found.");

			return endOfPage;
		}
	);
};