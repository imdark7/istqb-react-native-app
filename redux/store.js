import { createStore } from 'redux'
import trainingSettings from './reducers/trainingSettings'

const store = createStore(trainingSettings)

export default store