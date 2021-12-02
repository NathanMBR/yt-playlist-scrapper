import { ScrapInfo } from "./index.js";

export const showScrapResults = (scrapResults: ScrapInfo) => {
	const { playlistId, listComparison: listComparisonRaw } = scrapResults;
	const listComparison = listComparisonRaw.map(
		item => {
			item.url += `&list=${playlistId}&index=${item.playlistIndex}`;
			return item;
		}
	);

	if (listComparison.length <= 0)
		console.log("There's no removed videos from your playlist.");
	else {
		console.log("These are the removed videos:");
		console.table(listComparison);
	}
};