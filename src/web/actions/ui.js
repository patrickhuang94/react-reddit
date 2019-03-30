import { LOADING_START, LOADING_DONE, CURRENT_SUBREDDIT, CURRENT_SETTINGS_OPTION } from './actionTypes'

export const loadingStart = () => ({
	type: LOADING_START,
})

export const loadingDone = () => ({
	type: LOADING_DONE,
})

export const updateCurrentSubreddit = ({ subreddit }) => ({
	type: CURRENT_SUBREDDIT,
	payload: subreddit,
})

export const updateCurrentSettingsOption = ({ settingsOption }) => ({
	type: CURRENT_SETTINGS_OPTION,
	payload: settingsOption,
})
