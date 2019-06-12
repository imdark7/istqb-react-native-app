import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ExamScreen extends React.Component {
    static navigationOptions = {
      header: null
    }

    render() {
        return (
            <View>
                <Text style={styles.header}>Экзамен</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        color: '#222',
    },
})

export default ExamScreen