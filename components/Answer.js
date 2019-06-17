import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Answer extends React.Component {
    static propTypes = {
        text: PropTypes.string
    } 
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {}} style={styles.answer}>
                    <Text style={styles.answerText}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    answer: {
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        height: 'auto',
        width: 'auto',
        minHeight: 40,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
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