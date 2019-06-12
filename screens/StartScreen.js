import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'

class StartScreen extends React.Component {
    static navigationOptions = {
      header: null
    }

    render() {
        return (
            <ImageBackground source={require('../assets/background_cut.png')} resizeMode='stretch' style={styles.backgroundImage}>
                <View style={styles.headerContainer}>
                    <View style={{}}>
                        <Text style={styles.header}>ISTQB</Text>
                        <Text style={styles.header}>Foundation</Text>
                        <Text style={styles.header}>Trainer</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Training')} style={styles.startButton}>
                        <Text style={styles.startButtonText}>Тренировка</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ExamSettings')} style={styles.startButton}>
                        <Text style={styles.startButtonText}>Экзамен</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    headerContainer: { 
        flex: 2,
        justifyContent: "center",
        padding: 50,
        paddingTop: 80
    },
    header: {
        fontSize: 40,
        color: '#FCFCFC',
    },
    buttonContainer: {
        flex: 6
    },
    startButton: {
        marginLeft: 30,
        marginBottom: 30,
        marginRight: 30,
        height: 65,
        width: 'auto',
        borderRadius: 10,
        backgroundColor: '#479979cc',
        justifyContent: 'center',
    },
    startButtonText: {
      fontSize: 35,
      textAlign: 'center',
      color: '#fefefe',
    },
})

export default StartScreen