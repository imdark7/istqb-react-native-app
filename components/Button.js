import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string
    }

    state = {
        pressed: this.props.pressed
    }
    
    render() {
        return (
            <TouchableOpacity style={[this.state.pressed ? styles.pressedButton : styles.unpressedButton, styles.button]} onPress={this.props.onPress}>
                <Text>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    pressedButton:{
        backgroundColor: '#479979'
    },
    unpressedButton:{
        backgroundColor: 'white'
    },
    button:{
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#479979',
        padding: 5,
        margin: 5
    }
})