import { SET_LANGUAGE, SET_ORDER, SET_THEME } from './actions'

export const setLanguage = language => ({
    type: SET_LANGUAGE,
    language: language
})

export const setOrder = order => ({
    type: SET_ORDER,
    order: order
})

export const setTheme = theme => ({
    type: SET_THEME,
    theme: theme
})