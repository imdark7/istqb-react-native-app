import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Delimiter = props => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={styles.text}>{props.text}</Text>
            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    line : {
        backgroundColor: '#479979',
        height: 2,
        flex: 1,
        alignSelf: 'center'
    },
    text: {
        color: '#479979',
        marginHorizontal: 4
    }
})

export default Delimiter