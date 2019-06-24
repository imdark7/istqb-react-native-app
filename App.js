import React from 'react'
import StartScreen from './screens/StartScreen'
import TrainingScreen from './screens/TrainingScreen'
import ExamSettingsScreen from './screens/ExamSettingsScreen'
import ExamScreen from './screens/ExamScreen'
import { createAppContainer, createSwitchNavigator } from "react-navigation"

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Start: { screen: StartScreen },
    Training: { screen: TrainingScreen },
    ExamSettings: { screen: ExamSettingsScreen },
    Exam: { screen: ExamScreen }
  },
  {
    initialRouteName: 'Training'
  }
))

export default class App extends React.Component {
  state = {
    sideMenuIsOpen: false,
    sideMenuComponents: null
  }

  render() {
    return <AppContainer />
  }
}
