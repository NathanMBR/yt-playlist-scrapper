# Youtube Playlist Scrapper

A simple YouTube playlist scrapper to know if any videos of one playlist are unavailable.

## Motivation

I did this little project to solve a private problem. The way I hear musics is using YouTube playlists: I add all musics I want to hear into a single playlist. The problem is that some musics get down by copyright claims, and then I have to manually find, remove and reinsert them. This scrapper makes my life easier by finding the claimed videos and giving me their links and playlist positions.

## Requirements

* Node v14.17.1 or greater
* npm or yarn

## Usage

The easiest way to run this project is using the `quickstart` script (or its alias `qs`). Simply use the `npm run qs` command (`yarn qs` if you use yarn) at the console: the same will ask your for a YouTube playlist link. Paste it and press enter, and wait for code execution (it might take a while since the code opens the navigator).

## Environment Variables

There are five environment variables:

1. VIDEO_HOLDER_ELEMENT
2. ROLL_REFERENCE
3. SHOW_MENU_XPATH
4. LOAD_HIDDEN_VIDEOS_XPATH
5. HIDE_BROWSER

I don't recommend you to customize variables 1 to 4, since the code depends of them to find the elements at the playlist page. Please, avoid editing them unless you notice that YouTube changed their playlist page in a breaking way.

The `HIDE_BROWSER` variable defines if the Chromium navigator should be displayed. If `true`, the navigator will not be displayed at code runtime.