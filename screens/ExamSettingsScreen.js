import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ExamSettingsScreen extends React.Component {
    static navigationOptions = {
      header: null
    }

    render() {
        return (
            <View>
                <Text style={styles.header}>Настройки экзамена</Text>
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

export default ExamSettingsScreen