import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Question from '../components/Question'
import Answers from '../components/Answers';

export default class TrainingScreen extends React.Component {
    static navigationOptions = {
      header: null
    }

    getQuestionInfo = () => {
        return {
            question: {
                text: "Q12. Ответ на главный вопрос жизни вселенной и всего такого?"
            },
            answers: [
                {
                    text: "Бугульма",
                    isCorrect: false
                },
                {
                    text: "42",
                    isCorrect: false
                },
                {
                    text: "Ответ на главный вопрос жизни вселенной и всего такого шмаково",
                    isCorrect: false
                },
                {
                    text: "Коська!!",
                    isCorrect: false
                },
                {
                    text: "Мур",
                    isCorrect: false
                }
            ]
        }
    }

    render() {
        var info = {
            question: {
                text: "Q12. Ответ на главный вопрос жизни вселенной и всего такого?"
            },
            answers: [
                {
                    text: "Бугульма",
                    isCorrect: false
                },
                {
                    text: "42",
                    isCorrect: false
                },
                {
                    text: "Ответ на главный вопрос жизни вселенной и всего такого шмаково",
                    isCorrect: false
                },
                {
                    text: "Коська!!",
                    isCorrect: false
                },
                {
                    text: "Мур",
                    isCorrect: false
                }
            ]
        };
        return (
            <View>
                <Text style={styles.header}>Тренировка</Text>
                <Question text={info.question.text} />
                <Answers data={info.answers} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        color: '#222',
    },
})