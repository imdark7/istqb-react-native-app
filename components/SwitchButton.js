import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SwitchButton extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        changeBackgroundOnClick: PropTypes.bool,
        initialPressed: PropTypes.bool
    }

    state = {
        pressed: this.props.pressed
    }

    onPress = () => {
        this.props.onPress()
        this.setState({pressed: !this.state.pressed})
    }
    
    render() {
        return (
            <TouchableOpacity
                style={[this.state.pressed && this.props.changeBackgroundOnClick ? styles.pressedButton : styles.unpressedButton, styles.button]}
                onPress={this.onPress}
            >
                <Text style={styles.text}>{this.props.text}</Text>
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
        margin: 5,
        alignItems: 'center',
    },
    text: {
        textAlign: 'center'
    }
})