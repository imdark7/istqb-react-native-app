import React from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class QuestionNumber extends React.Component {
    static propTypes = {
        number: PropTypes.string
    }
    
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.numberInput.focus()}>
                <Text style={styles.text}>Q.</Text>
                <TextInput
                    style={styles.questionNumber}
                    value={this.props.number}
                    keyboardType='numeric'
                    selectTextOnFocus={true}
                    ref={(ip) => this.numberInput = ip}
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