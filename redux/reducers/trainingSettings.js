import { SET_LANGUAGE, SET_ORDER, SET_THEME } from '../actions/actions'

const initialState = {
    language: 'ru',
    order: 'shuffle',
    themes: [
        { name: 'Foundation', selected: true },
        { name: 'Second Theme', selected: true }
    ]
}

const trainingSettings = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return Object.assign({}, state, {
                language: action.language
            })
        case SET_ORDER:
            return Object.assign({}, state, {
                order: action.order
            })
        case SET_THEME:
            return Object.assign({}, state, {
                themes: Object.assign([], state.themes, [action.theme])
            })
        default:
            return state
    }
}

export default trainingSettings