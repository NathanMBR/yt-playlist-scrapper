import dotenv from "dotenv";
dotenv.config();

new Boolean("false");
const {
	VIDEO_HOLDER_ELEMENT,
	ROLL_REFERENCE,
	HIDE_BROWSER,
	SHOW_MENU_XPATH,
	LOAD_HIDDEN_VIDEOS_XPATH
} = process.env;

const environment = {
	videoHolderElement: VIDEO_HOLDER_ELEMENT || null,
	rollReference: ROLL_REFERENCE?.replace("$hashtag$", "#") || null,
	showMenuXPath: SHOW_MENU_XPATH || null,
	loadHiddenVideosXPath: LOAD_HIDDEN_VIDEOS_XPATH || null,
	hideBrowser: HIDE_BROWSER === "true"
};

Object.keys(environment).forEach(key => {
	if (environment[key as keyof typeof environment] === null)
		throw new Error("Invalid environment property value.");
});

export { environment } ;