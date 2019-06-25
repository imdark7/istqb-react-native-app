import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Answer extends Component {
    correct = '#3EC28F'
    incorrect = '#FF8981'
    white = '#FFF'

    state = {
        backgroundColor: this.white,
        selected: false
    }

    static propTypes = {
        text: PropTypes.string,
        isCorrect: PropTypes.bool,
        showAnswer: PropTypes.bool
    }

    componentWillReceiveProps(props) {
        if (!props.showAnswer) {
            this.setState({selected: false})
        }
        this.setState({backgroundColor: this.getBackgroundColor(props)})
    }

    getBackgroundColor(props) {
        if (props.showAnswer) {
            if (!props.isCorrect && this.state.selected){
                return this.incorrect
            }
            if (props.isCorrect) {
                return this.correct
            }
        }        
        return this.white
    }

    checkAnswer = () => {
        setTimeout(this.props.clickHandler, 40)
        this.setState({selected: true})
        this.setState({backgroundColor: this.getBackgroundColor(this.props)})
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {this.checkAnswer()}}
                style={{ backgroundColor: this.state.backgroundColor, ...styles.answer}}
            >
                <Text style={styles.answerText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

styles = StyleSheet.create({
    answer: {
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        height: 'auto',
        width: 'auto',
        minHeight: 40,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
    },
    answerText: {
        fontSize: 17,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        color: '#111',
    },
})