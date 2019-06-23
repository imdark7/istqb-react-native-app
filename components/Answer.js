import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Answer extends Component {
    correct = '#3EC28F'
    incorrect = '#FF8981'

    state = {
        backgroundColor: '#fff'
    }

    static propTypes = {
        text: PropTypes.string,
        isCorrect: PropTypes.bool,
        showAnswer: PropTypes.bool
    }

    componentWillReceiveProps(props) {
        if (props.showAnswer && props.isCorrect) {
            this.setState({backgroundColor: this.correct})
        }
    }

    checkAnswer = () => {
        if (!this.props.isCorrect) { 
            setTimeout(this.props.clickHandler, 40)
        }
        this.setState({backgroundColor: this.props.isCorrect ? this.correct : this.incorrect})
    }



    render() {
        console.log('render answers')
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {this.checkAnswer()}}
                    style={{ backgroundColor: this.state.backgroundColor, ...styles.answer}}>
                    <Text style={styles.answerText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
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