import { SET_LANGUAGE, SET_ORDER, SET_THEME } from './actions'
import store from '../store';

export const setLanguage = language => (
    store.dispatch({
        type: SET_LANGUAGE,
        language: language
    })
)

export const setOrder = order => (
    store.dispatch({
        type: SET_ORDER,
        order: order
    })
)

export const setTheme = theme => (
    store.dispatch({
        type: SET_THEME,
        theme: theme
    })
)