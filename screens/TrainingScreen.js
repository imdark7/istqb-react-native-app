import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Question from '../components/Question'
import Answers from '../components/Answers';
import QuestionNumber from '../components/QuestionNumber';
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar } from 'react-native-paper';

export default class TrainingScreen extends React.Component {
    static navigationOptions = {
      header: null
    }

    getQuestionInfo = () => {
        return {
            question: {
                id: 12,
                text: "Ответ на главный вопрос жизни вселенной и всего такого?"
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

    render() {
        var info = this.getQuestionInfo();
        return (
            <View style={{flex: 1}}>
                <View>
                    <Appbar.Header style={styles.appbar}>
                        <Appbar.Action icon='dehaze' onPress={() => this.props.navigation.openDrawer()} />
                        <Appbar.Content title="Foundation" />
                        <QuestionNumber number='1222' />
                    </Appbar.Header>
                </View>
                <ScrollView style={styles.questionContainer}>
                    <Question id={info.question.id} text={info.question.text} />
                </ScrollView>
                <View style={styles.answerContainer}>
                    <Answers data={info.answers} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appbar:{
        backgroundColor: '#479979'
    },
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