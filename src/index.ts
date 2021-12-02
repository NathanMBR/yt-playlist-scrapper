import { getPlaylistLink, scrapPlaylist, showScrapResults } from "./functions/index.js";

console.clear();

getPlaylistLink()
	.then(scrapPlaylist)
	.then(showScrapResults)
	.catch(console.error);