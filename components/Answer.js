import React from 'react'
import { View, Button } from 'react-native'
import PropTypes from 'prop-types';

export default class Answer extends React.Component {    
    render() {
        return (
            <View>
                <Button title={this.props.text} />
            </View>
        )
    }
}

Answer.propTypes = {
    text: PropTypes.string
}