import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Question from '../components/Question'
import Answers from '../components/Answers';
import QuestionNumber from '../components/QuestionNumber';
import { Appbar, Switch, Divider } from 'react-native-paper';
import InfoBar from '../components/InfoBar';
import SideMenu from '../components/SideMenu';
import Button from '../components/Button';

export default class TrainingScreen extends Component {
    static navigationOptions = {
      header: null,
    }

    getQuestionInfo = () => {
        return {
            question: {
                id: 1002,
                text: "Ответ на главный вопрос жизни вселенной и всего такого?",
                heading: "Foundations"
            },
            answers: [
                {
                    id: 1,
                    text: "Повысить безопасность системы",
                    isCorrect: false
                },
                {
                    id: 2,
                    text: "Предотвратить бесконечные циклы в коде",
                    isCorrect: false
                },
                {
                    id: 3,
                    text: "Использовать как альтернативу или план Б",
                    isCorrect: false
                },
                {
                    id: 4,
                    text: "Определить, когда завершить тестирование",
                    isCorrect: true
                }
            ]
        }
    }

    getNextQuestionInfo = () => {
        return {
            question: {
                id: 1003,
                text: "Чекаво сучары?",
                heading: "Foundations"
            },
            answers: [
                {
                    id: 5,
                    text: "кек",
                    isCorrect: true
                },
                {
                    id: 6,
                    text: "лол",
                    isCorrect: false
                },
                {
                    id: 7,
                    text: "арбидол",
                    isCorrect: false
                },
                {
                    id: 8,
                    text: "чебурек",
                    isCorrect: false
                }
            ]
        }
    }

    state = { 
        questionData: this.getQuestionInfo(),
        sideMenuIsOpen: false,
        isSwitchOn: false
    }

    toggleSideMenu = (state) => {
        if (state != undefined) {
            if (state == this.state.sideMenuIsOpen){
                return;
            }
            this.setState({sideMenuIsOpen: state})
        }
        else {
            this.setState({sideMenuIsOpen: !this.state.sideMenuIsOpen})
        }
    }

    nextButtonHandler = () => {
        this.setState({questionData: this.getNextQuestionInfo()})
    }

    getSideMenu() {
        const { isSwitchOn } = this.state;
        return  <View>
                    <Button text='Русский язык' />
                    <Switch value={isSwitchOn} onValueChange={() =>{ this.setState({ isSwitchOn: !isSwitchOn }); }} />
                    <Divider style={styles.divider} />
                    <Button onPress={() => this.props.navigation.navigate('ExamSettings')} text='Экзамен' />
                </View>
    }

    getHeaderComponents() {
        return [(<Appbar.Content key="title" title={this.state.questionData.question.heading} />),
                (<QuestionNumber key="questionNumber" style={styles.questionNumber} number={this.state.questionData.question.id.toString()} />)]
    }

    render() {
        var info = this.state.questionData
        return (
            <View style={{flex: 1}}>
                <InfoBar toggleSideMenu={this.toggleSideMenu} navigation={this.props.navigation} components={this.getHeaderComponents()} />
                <SideMenu 
                    sideMenuContent={this.getSideMenu()}
                    isOpen={this.state.sideMenuIsOpen}
                    toggleSideMenuHandler={this.toggleSideMenu}
                >
                    <Question id={info.question.id} text={info.question.text} />
                    <Answers data={info.answers} nextButtonHandler={this.nextButtonHandler} />
                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionNumber: {
        color: '#fff',
        margin: 5
    },
    divider: {
        margin: 5,
    }
})