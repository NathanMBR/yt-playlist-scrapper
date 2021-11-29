import prompt from "prompt";
prompt.start({});

const schema = {
	properties: {
		url: {
			message: "Insert the playlist URL",
			required: true
		}
	}
};

export const getPlaylistLink = async () => {
	const response = await prompt.get(schema);

	return response.url as string;
};