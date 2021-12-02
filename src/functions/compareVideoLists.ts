type VideoList = Array<string>;

export interface HiddenVideo {
	index: number;
	url: string;
}

export const compareVideoLists = (hiddenList: VideoList, allList: VideoList) => {
	const hiddenVideos: Array<HiddenVideo> = [];

	let i = 0;

	while (i < allList.length)
		if (hiddenList[i] !== allList[i])
			hiddenVideos.push({
				index: i + hiddenVideos.length + 1,
				url: allList.splice(i, 1)[0]
			});
		else
			i++;

	return hiddenVideos;
};