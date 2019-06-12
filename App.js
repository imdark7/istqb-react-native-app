import React from 'react'
import StartScreen from './screens/StartScreen'
import TrainingScreen from './screens/TrainingScreen'
import ExamSettingsScreen from './screens/ExamSettingsScreen'
import ExamScreen from './screens/ExamScreen'
import { createSwitchNavigator, createAppContainer } from "react-navigation"

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    Start: {
      screen: StartScreen
    },
    Training: TrainingScreen,
    ExamSettings: ExamSettingsScreen,
    Exam: ExamScreen
  },
  {
    initialRouteName: 'Start'
  }
))

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
