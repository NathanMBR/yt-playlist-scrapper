import puppeteer from "puppeteer";
import environment from "../settings/env.js";

export const getEndOfPageElement = async (page: puppeteer.Page) =>
	await page.evaluate(async () => {
		await page.waitForSelector(environment.rollReference as string);

		const endOfPage = document.querySelector(environment.rollReference as string);

		if (!endOfPage)
			throw new Error("Roll reference element not found.");

		return endOfPage;
	});