import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import Drawer from 'react-native-drawer'
import Overlay from '../components/Overlay';

export default class SideMenu extends Component {

    state = { 
        isOpen: false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen != this.state.isOpen){
            this.setState({isOpen: nextProps.isOpen})
        }
    }

    render() {
        return (
            <Drawer
                content={this.props.sideMenuContent}
                open={this.state.isOpen}
                type="overlay"
                panCloseMask={0.1}
                openDrawerOffset={0.1}
                styles={{ drawer: styles.sideMenu }}
                onCloseStart={() => this.props.toggleSideMenuHandler(false)}
                onOpenStart={() => this.props.toggleSideMenuHandler(true)}
            >
                <Overlay fadeIn={this.state.isOpen} />
                {this.props.children}
            </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    sideMenu: {
        backgroundColor: '#fff',
        padding: 10,
        borderRightWidth: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#479979'
    }
})