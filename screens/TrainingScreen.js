import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Question from '../components/Question'
import Answers from '../components/Answers';
import QuestionNumber from '../components/QuestionNumber';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';
import InfoBar from '../components/InfoBar';
import SideMenu from 'react-native-side-menu';

export default class TrainingScreen extends React.Component {
    static navigationOptions = {
      header: null
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

    state = { questionData: this.getQuestionInfo() }

    getSideMenu() {
        return <Text>Привет</Text>
    }

    getHeaderComponents() {
        return [(<Appbar.Content key="title" title={this.state.questionData.question.heading} />),
                (<QuestionNumber key="questionNumber" style={styles.questionNumber} number={this.state.questionData.question.id.toString()} />)]
    }

    render() {
        var info = this.getQuestionInfo();
        return (
            <View style={{flex: 1}}>
                <SideMenu menu={this.getSideMenu()} style={{flex: 1}}>
                <InfoBar toggleSideMenu={this.props.screenProps.toggleSideMenu} navigation={this.props.navigation} components={this.getHeaderComponents()} />
                
                    <ScrollView style={styles.questionContainer}>
                        <Question id={info.question.id} text={info.question.text} />
                    </ScrollView>
                    <View style={styles.answerContainer}>
                        <Answers data={info.answers} />
                    </View>
                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionNumber:{
        color: '#fff',
        margin: 5
    },
    questionContainer:{
        margin: 20,
    },
    answerContainer:{
    }
})