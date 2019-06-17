import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import Answer from './Answer'

export default class Answers extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                isCorrect: PropTypes.bool.isRequired
            })
        ).isRequired
    }
    
    answerButtonsArr = () => this.props.data.map(answer => (
        <Answer key={answer.id} text={answer.text} />
    ))
    
    render() {
        return (
            <View style={styles.answers}>
                {this.answerButtonsArr()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    answers: {

    }
})