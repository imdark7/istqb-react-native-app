import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

export default class Question extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        text: PropTypes.string
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.id != this.props.id
    }
    
    render() {
        console.log('render Question')
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