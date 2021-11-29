import dotenv from "dotenv";
dotenv.config();

new Boolean("false");
const { VIDEO_HOLDER_ELEMENT, ROLL_REFERENCE, HIDE_BROWSER } = process.env;

const environment = {
	videoHolderElement: VIDEO_HOLDER_ELEMENT || null,
	rollReference: ROLL_REFERENCE?.replace("$hashtag$", "#") || null,
	hideBrowser: HIDE_BROWSER === "true"
};

Object.keys(environment).forEach(key => {
	if (!environment[key as keyof typeof environment])
		throw new Error("Invalid environment property value.");
});

export default environment;