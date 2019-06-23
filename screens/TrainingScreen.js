import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Question from '../components/Question'
import Answers from '../components/Answers';
import QuestionNumber from '../components/QuestionNumber';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Switch, Divider } from 'react-native-paper';
import InfoBar from '../components/InfoBar';
import Drawer from 'react-native-drawer'
import Overlay from '../components/Overlay';

export default class TrainingScreen extends React.Component {
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

    getSideMenu() {
        const { isSwitchOn } = this.state;
        return  <View style={{width: '80%', height: '100%'}}>
                    <Switch value={isSwitchOn} onValueChange={() =>{ this.setState({ isSwitchOn: !isSwitchOn }); }} />
                    <Divider style={styles.divider} />
                    <Button onPress={() => this.props.navigation.navigate('ExamSettings')} title='Экзамен' />
                </View>
    }

    getHeaderComponents() {
        return [(<Appbar.Content key="title" title={this.state.questionData.question.heading} />),
                (<QuestionNumber key="questionNumber" style={styles.questionNumber} number={this.state.questionData.question.id.toString()} />)]
    }

    render() {
        var info = this.getQuestionInfo();
        console.log('render screen')
        return (
            <View style={{flex: 1}}>
                <InfoBar toggleSideMenu={this.toggleSideMenu} navigation={this.props.navigation} components={this.getHeaderComponents()} />
                <Drawer
                    content={this.getSideMenu()}
                    open={this.state.sideMenuIsOpen}
                    type="overlay"
                    panCloseMask={0.2}
                    openDrawerOffset={0.2}
                    styles={{drawer: { backgroundColor: 'white', height: '100%', padding: 20 }}}
                    onCloseStart={() => this.toggleSideMenu(false)}
                    onOpenStart={() => this.toggleSideMenu(true)}
                >
                    <Overlay fadeIn={this.state.sideMenuIsOpen} />
                    <Question id={info.question.id} text={info.question.text} />
                    <Answers data={info.answers} />
                </Drawer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionNumber:{
        color: '#fff',
        margin: 5
    },
    divider: {
        margin: 5,
    }
})