import dotenv from "dotenv";
dotenv.config();

const { VIDEO_HOLDER_ELEMENT } = process.env;

const environment = {
	videoHolderElement: VIDEO_HOLDER_ELEMENT || null
};

Object.keys(environment).forEach(key => {
	if (!environment[key as keyof typeof environment])
		throw new Error("Invalid environment property value.");
});

export default environment;