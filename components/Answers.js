import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types';
import Answer from './Answer'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Answers extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                isCorrect: PropTypes.bool.isRequired
            })
        ).isRequired
    }

    state = {
        showAnswer: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.showAnswer != this.state.showAnswer
    }

    checkAnswer = () => {
        this.setState({ showAnswer: true })
    }

    resetState = () => {
        this.setState({ showAnswer: false })
        this.props.nextButtonHandler()
    }
    
    answerButtonsArr = () => this.props.data.map(answer => (
        <Answer key={answer.id} text={answer.text} clickHandler={this.checkAnswer} showAnswer={this.state.showAnswer} isCorrect={answer.isCorrect} />
    ))
    
    render() {
        return (
            <View>
                <View style={{display: this.state.showAnswer ? 'auto' : 'none', ...styles.nextQuestionContainer}}>
                    <TouchableOpacity onPress={this.resetState} style={styles.nextQuestionButton}>
                        <Text>Дальше >></Text>
                    </TouchableOpacity>
                </View>
                <View pointerEvents={this.state.showAnswer ? 'none' : 'auto'}>
                    {this.answerButtonsArr()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    nextQuestionContainer: {
        width: '100%',
        alignItems: 'flex-end',
        paddingRight: 15,
        margin: 5
    },
    nextQuestionButton:{
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#CAA3FF'
    },
})