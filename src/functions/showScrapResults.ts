import { HiddenVideo } from "./index.js";

export const showScrapResults = (scrapResults: Array<HiddenVideo>) => {
	if (scrapResults.length <= 0)
		console.log("There's no removed videos from your playlist.");
	else {
		console.log("These are the removed videos:");
		console.table(scrapResults);
	}
};