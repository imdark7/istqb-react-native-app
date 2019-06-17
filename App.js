import React from 'react'
import { Text } from 'react-native'
import StartScreen from './screens/StartScreen'
import TrainingScreen from './screens/TrainingScreen'
import ExamSettingsScreen from './screens/ExamSettingsScreen'
import ExamScreen from './screens/ExamScreen'
import { createAppContainer, createDrawerNavigator } from "react-navigation"

const AppContainer = createAppContainer(createDrawerNavigator(
  {
    Start: { screen: StartScreen },
    Training: { screen: TrainingScreen },
    ExamSettings: { screen: ExamSettingsScreen },
    Exam: { screen: ExamScreen }
  },
  {
    contentComponent: () => (
      <Text>ffdf</Text>
    ),
    initialRouteName: 'Training'
  }
))

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
