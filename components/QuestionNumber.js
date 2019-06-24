import React, { Component } from 'react'
import { Text, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class QuestionNumber extends Component {
    static propTypes = {
        number: PropTypes.string
    }
    
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.numberInput.focus()}>
                <Text style={styles.text}>Q.</Text>
                <TextInput
                    style={styles.questionNumber}
                    defaultValue={this.props.number}
                    keyboardType='numeric'
                    selectTextOnFocus={true}
                    ref={(input) => this.numberInput = input}
                    maxLength={4}
                    returnKeyType='done'
                    onBlur={() => console.log('blur')}
                    onSubmitEditing={() => console.log('changed')}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        flexDirection: 'row',
        paddingLeft: 20,
        height: '100%',
        alignItems: 'center'
    },
    text:{
        color: '#fff'
    },
    questionNumber: {
        color: '#fff'
    }
})