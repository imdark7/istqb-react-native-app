import React from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types';

export default class Overlay extends React.Component {
    static propTypes = {
        fadeIn: PropTypes.bool
    }

    state = {
        opacity: new Animated.Value(0),
        zIndex: -1,
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.fadeIn,this.props.fadeIn, 'shouldUpdate overlay', nextState.zIndex, this.state.zIndex)
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
        console.log('render overlay')
        return (
            <Animated.View style={[styles.overlay, {opacity: this.state.opacity, zIndex: this.state.zIndex}]} />
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