import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'
import api from '../../utils/api'
import moment from 'moment'

interface State {
    taskSessions: Array<any>
    token: String
}

class TaskSessionScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            taskSessions: [],
            token: ""
        }
    }

    componentDidMount () {
        var data = this.props.navigation.state.params
        this.setState({taskSessions: data.classSession.taskSessions})
    }

    render() {
        console.log(this.state)
        return (
            <View style={{flex:1}}>
                <Text>Zadania</Text>
                {this.state.taskSessions.map((t: any, index: number) => this.renderTaskSession(t, index))}
            </View>
        )
    }

    renderTaskSession(t: any, index: number) {
        return (
            <View style={styles.container}>
                <Button 
                   title={t.task.name}
                     onPress={() => this.props.navigation.navigate({routeName: "TaskSession", params: {classSession: this.state.taskSessions[index], token: this.state.token}})}
              />
                <Text style={styles.text}>{`Czas na zadanie: ${t.task.minutes} minut, ${t.task.subject}`}</Text>
            </View>
        )    
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: "space-around"

    },
    text: {
        marginBottom: 10
    }
})

export default TaskSessionScreen
