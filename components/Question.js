import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types';

export default class Question extends React.Component {
    
    render() {
        return (
            <View>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}
Question.propTypes = {
    text: PropTypes.string.isRequired
}