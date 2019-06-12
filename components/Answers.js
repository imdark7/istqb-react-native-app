import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import Answer from './Answer'

export default class Answers extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string,
                isCorrect: PropTypes.bool
            })
        ).isRequired
    }
    
    answerButtonsArr = () => this.props.data.map(answer => (
        <Answer text={answer.text} />
    ))
    
    render() {
        return (
            <View>
                {this.props.data.map(answer => <Answer text={answer.text} />)}
            </View>
        )
    }
}