import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

export default class Question extends Component {
    static propTypes = {
        id: PropTypes.number,
        text: PropTypes.string
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.id)
        return nextProps.id != this.props.id
    }
    
    render() {
        return (
            <ScrollView style={{margin: 20}}>
                <Text style={styles.questionText}>{this.props.text}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    questionText: {
        textAlign: 'center'
    }
})