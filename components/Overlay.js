import React, { Component } from 'react'
import { StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types';

export default class Overlay extends Component {
    static propTypes = {
        fadeIn: PropTypes.bool
    }

    state = {
        opacity: new Animated.Value(0),
        zIndex: -1,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.fadeIn != this.props.fadeIn) || (nextState.zIndex != this.state.zIndex)
    }

    fade = (opacity) => {
        Animated.timing(this.state.opacity, {
            toValue: opacity,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fadeIn){
            this.setState({zIndex: 3})
        }
        this.fade(nextProps.fadeIn ? 0.8 : 0)
        if (!nextProps.fadeIn){
            setTimeout(() => this.setState({zIndex: -1}), 250)
        }
    }
    
    render() {
        return (
            <Animated.View style={{opacity: this.state.opacity, zIndex: this.state.zIndex, ...styles.overlay}} />
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
})