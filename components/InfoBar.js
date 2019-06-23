import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

export default class InfoBar extends React.Component {
    static propTypes = {
        components: PropTypes.array,
        navigation: PropTypes.object
    }
    
    render() {
        console.log('render InfoBar')
        return (
            <Appbar.Header style={styles.appbar}>
                <Appbar.Action icon='dehaze' onPress={() => this.props.toggleSideMenu()} />
                {this.props.components}
            </Appbar.Header>
        )
    }
}

const styles = StyleSheet.create({
    appbar:{
        backgroundColor: '#479979'
    },
})