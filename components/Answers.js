import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Answer from './Answer'

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
        enabled: 'auto',
        showAnswer: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.showAnswer
    }

    checkAnswer = () => {
        this.setState({ showAnswer: true })
    }
    
    answerButtonsArr = () => this.props.data.map(answer => (
        <Answer key={answer.id} text={answer.text} clickHandler={this.checkAnswer} showAnswer={this.state.showAnswer} isCorrect={answer.isCorrect} />
    ))
    
    render() {
        return (
            <View pointerEvents={this.state.enabled}>
                {this.answerButtonsArr()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    answers: {

    }
})