import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Question from '../components/Question'
import Answers from '../components/Answers';
import QuestionNumber from '../components/QuestionNumber';
import { Appbar, Switch, Divider } from 'react-native-paper';
import InfoBar from '../components/InfoBar';
import SideMenu from '../components/SideMenu';
import SwitchButton from '../components/SwitchButton';
import Delimiter from '../components/Delimiter'
import store from '../redux/store';
import Language from '../const/Language'
import Order from '../const/Order'
import {setLanguage, setTheme, setOrder} from '../redux/actions/trainingSettings'

class TrainingScreen extends Component {
    static navigationOptions = {
      header: null,
    }

    getQuestionInfo = () => {
        return {
            question: {
                id: 1002,
                text: "Ответ на главный вопрос жизни вселенной и всего такого?",
                heading: "Foundations"
            },
            answers: [
                {
                    id: 1,
                    text: "Повысить безопасность системы",
                    isCorrect: false
                },
                {
                    id: 2,
                    text: "Предотвратить бесконечные циклы в коде",
                    isCorrect: false
                },
                {
                    id: 3,
                    text: "Использовать как альтернативу или план Б",
                    isCorrect: false
                },
                {
                    id: 4,
                    text: "Определить, когда завершить тестирование",
                    isCorrect: true
                }
            ]
        }
    }

    getNextQuestionInfo = () => {
        return {
            question: {
                id: 1003,
                text: "Чекаво сучары?",
                heading: "Foundations"
            },
            answers: [
                {
                    id: 5,
                    text: "кек",
                    isCorrect: true
                },
                {
                    id: 6,
                    text: "лол",
                    isCorrect: false
                },
                {
                    id: 7,
                    text: "арбидол",
                    isCorrect: false
                },
                {
                    id: 8,
                    text: "чебурек",
                    isCorrect: false
                }
            ]
        }
    }

    state = { 
        questionData: this.getQuestionInfo(),
        sideMenuIsOpen: false,
        language: Language.RU,
        order: Order.Shuffle
    }

    componentWillReceiveProps(props) {
        this.setState({language: props.language})
        this.setState({order: props.order})
    }

    toggleSideMenu = (state) => {
        if (state != undefined) {
            if (state == this.state.sideMenuIsOpen){
                return;
            }
            this.setState({sideMenuIsOpen: state})
        }
        else {
            this.setState({sideMenuIsOpen: !this.state.sideMenuIsOpen})
        }
    }

    nextButtonHandler = () => {
        this.setState({questionData: this.getNextQuestionInfo()})
    }


    switchLanguage = _ => {
        let lng = store.getState().language === Language.RU ? Language.EN : Language.RU
        setLanguage(lng);
    }

    switchOrder = _ => {
        let order = store.getState().order === Order.Straight ? Order.Shuffle : Order.Straight
        setOrder(order)
    }

    getSideMenu() {
        const language = this.state.language === Language.RU ? 'Русский': 'Английский';
        const order = this.state.order === Order.Straight ? 'Вопросы по порядку': 'Случайные вопросы';

        return  <View>
                    <Delimiter text='Настройки тренировки' />
                    <SwitchButton text={language} onPress={this.switchLanguage} />
                    <SwitchButton text={order} onPress={this.switchOrder} />
                    <Delimiter text='Темы' />
                    <SwitchButton
                        text={'Основы тестирования'}
                        onPress={() => {}}
                        changeBackgroundOnClick={true}
                        pressed={true}
                    />
                    <SwitchButton
                        text={'Тестирование в течение жизненного цикла разработки ПО'}
                        onPress={() => {}}
                        changeBackgroundOnClick={true}
                        pressed={true}
                    />
                    <SwitchButton
                        text={'Статические методы тестирования'}
                        onPress={() => {}}
                        changeBackgroundOnClick={true}
                        pressed={true}
                    />
                    <SwitchButton
                        text={'Методы проектирования тестов'}
                        onPress={() => {}}
                        changeBackgroundOnClick={true}
                        pressed={true}
                    />
                    <SwitchButton
                        text={'Управление тестированием'} 
                        onPress={() => {}}
                        changeBackgroundOnClick={true}
                        pressed={true}
                    />
                    <SwitchButton
                        text={'Инструменты тестирования'}
                        onPress={() => {}}
                        changeBackgroundOnClick={true}
                        pressed={true}
                    />
                    <Delimiter text='Навигация' />
                    <SwitchButton onPress={() => this.props.navigation.navigate('ExamSettings')} text='Экзамен' />
                </View>
    }

    getHeaderComponents() {
        return [(<Appbar.Content key="title" title={this.state.questionData.question.heading} />),
                (<QuestionNumber key="questionNumber" style={styles.questionNumber} number={this.state.questionData.question.id.toString()} />)]
    }

    render() {
        var info = this.state.questionData
        return (
            <View style={{flex: 1}}>
                <InfoBar toggleSideMenu={this.toggleSideMenu} navigation={this.props.navigation} components={this.getHeaderComponents()} />
                <SideMenu 
                    sideMenuContent={this.getSideMenu()}
                    isOpen={this.state.sideMenuIsOpen}
                    toggleSideMenuHandler={this.toggleSideMenu}
                >
                    <Question id={info.question.id} text={info.question.text} />
                    <Answers data={info.answers} nextButtonHandler={this.nextButtonHandler} />
                </SideMenu>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.language,
        order: state.order
    }
}

export default connect(mapStateToProps)(TrainingScreen)

const styles = StyleSheet.create({
    questionNumber: {
        color: '#fff',
        margin: 5
    }
})