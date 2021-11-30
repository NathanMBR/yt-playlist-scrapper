import puppeteer from "puppeteer";
import { environment } from "../settings/index.js";
import { awaitTime } from "./helpers/index.js";

export const rollPageUntilEnd = async (page: puppeteer.Page) =>
	await page.evaluate(
		async (videoHolderElementEval: string, rollReferenceEval: string, awaitTimeEval: string) => {
			const videoHolderElementQuery = `${videoHolderElementEval} a#thumbnail`;
			const endOfPage = document.querySelector(rollReferenceEval);
			const wait = eval(awaitTimeEval);

			if (document.querySelectorAll(videoHolderElementQuery).length === 0)
				throw new Error("The playlist is possibly empty.");

			if (!endOfPage)
				throw new Error("Roll reference element not found.");

			if (typeof wait !== "function")
				throw new Error("Evaluation error.");

			const videoListLength = {
				previous: 0,
				current: document.querySelectorAll(videoHolderElementQuery).length
			};

			/* eslint-disable no-await-in-loop */
			while (videoListLength.previous < videoListLength.current) {
				videoListLength.previous = videoListLength.current;

				endOfPage.scrollIntoView({ block: "end" });
				await wait(5000);

				videoListLength.current = document.querySelectorAll(videoHolderElementQuery).length;
			}
			/* eslint-enable no-await-in-loop */
		},
		environment.videoHolderElement,
		environment.rollReference,
		`${awaitTime}`
	);