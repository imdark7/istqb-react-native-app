import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

export default class Question extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        text: PropTypes.string
    }
    
    render() {
        return (
            <View>
                <Text style={styles.questionText}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionText: {
        textAlign: 'center'
    }
})