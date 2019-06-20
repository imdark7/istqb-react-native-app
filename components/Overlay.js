import React from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types';

export default class Overlay extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        text: PropTypes.string
    }

    state = {
        opacity: new Animated.Value(0),
    }

    fadeIn = () => {
        Animated.timing(this.state.opacity, {
            toValue: 0.8,
            duration: 5000,
            //useNativeDriver: true
        }).start()
        console.log('fade in')
    }

    fadeOut = () => {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start()
    }

    componentDidMount() {
        this.fadeIn()
    }
    
    render() {
        return (
            <Animated.View style={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: this.state.opacity }} >

            </Animated.View>
        )
    }
}