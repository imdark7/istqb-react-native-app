import React from 'react'
import { Text } from 'react-native'
import StartScreen from './screens/StartScreen'
import TrainingScreen from './screens/TrainingScreen'
import ExamSettingsScreen from './screens/ExamSettingsScreen'
import ExamScreen from './screens/ExamScreen'
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import SideMenu from 'react-native-side-menu';

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

  toggleSideMenu = () => {
    this.setState({sideMenuIsOpen: !this.state.sideMenuIsOpen})
  }

  updateSideMenuComponents = (menu) => {
    if (this.state.sideMenuComponents !== menu) {
      this.setState({sideMenuComponents: menu})
    }
  }

  render() {
    return <AppContainer screenProps={{updateSideMenuComponents: this.updateSideMenuComponents, toggleSideMenu: this.toggleSideMenu}} />
  }
}
