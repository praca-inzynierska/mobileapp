import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'
import api from '../../utils/api'
import moment from 'moment'
import { cos } from 'react-native-reanimated'

interface State {
    taskSession: any
    token: String
}

class TaskSessionScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            taskSession: null,
            token: ""
        }
    }

    async componentDidMount () {
        var data = this.props.navigation.state.params
        await this.setState({taskSession: data.taskSession})
    }

    render() {
        if(this.state.taskSession == null) {
            return (
                null
            )
        }
        else {
            var task = this.state.taskSession.task
            return (
                <View style={{flex:1}}>
                    <Text>{task.name}</Text>
                    <Text>{task.description}</Text>
                    <Text>{task.subject}</Text>
                    {task.tools.includes('whiteboard') ? this.renderWhiteboardButton(task) : null}
                    {task.tools.includes('textChat') ? this.renderChatButton(task) : null}
                </View>
            )
        }
    }

    renderWhiteboardButton(task: any) {
        return(
            <Button onPress={() => this.props.navigation.navigate({routeName: "Whiteboard", params: {taskId: task.id}})} title="tablica"/>
        )
    }

    renderChatButton(task: any) {
        return(
            <Button onPress={() => this.props.navigation.navigate({routeName: "Chat", params: {taskId: task.id}})} title="czat"/>
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
