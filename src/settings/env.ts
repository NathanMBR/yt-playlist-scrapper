import dotenv from "dotenv";
dotenv.config();

const { VIDEO_HOLDER_ELEMENT } = process.env;

export const environment = {
	videoHolderElement: VIDEO_HOLDER_ELEMENT || null
};