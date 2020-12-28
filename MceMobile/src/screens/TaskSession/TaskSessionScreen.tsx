import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'
import api from '../../utils/api'
import moment from 'moment'
import { cos } from 'react-native-reanimated'
import { SceneMap, TabView } from 'react-native-tab-view'
import { connect } from 'react-redux'

interface State {
    taskSession: any
    token: String
    endTime: any
    index: number
    user: string
    routes: any
}

class TaskSessionScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            taskSession: null,
            token: "",
            endTime: null,
            index: 0,
            user: "",
            routes: [{ key: 'task', title: 'Zadanie' }, { key: 'whiteboard', title: 'Tablica' }, { key: 'chat', title: 'Czat' }]
        }
    }

    async componentDidMount() {
        var data = this.props.navigation.state.params
        await this.setState({ taskSession: data.taskSession, endTime: data.endTime })
        await api.get('/users/info')
            .then((response: any) => {
                console.log(response)
                this.setState({ user: response.data.username })
            })
            .catch((e: any) => console.log(e))
    }

    render() {
        if (this.state.taskSession == null) {
            return (
                null
            )
        }
        return (
            <TabView
                swipeEnabled={false}
                navigationState={this.state}
                renderScene={SceneMap({
                    task: this.TaskRoute,
                    whiteboard: this.WhiteboardRoute,
                    chat: this.ChatRoute
                })}
                onIndexChange={index => this.setState({ index })}
            />
        )
    }

    TaskRoute = () =>
        (
            <View style={{ flex: 1 }}>
                <Text style={{ marginBottom: 20 }}>{this.state.taskSession.task.name}</Text>
                <Text style={{ marginBottom: 20 }}>{this.state.taskSession.task.description}</Text>
                <Text style={{ marginBottom: 20 }}>{this.state.taskSession.task.subject}</Text>
                <Text style={{ marginBottom: 20 }}>{`termin oddania zadania: ${moment(this.state.endTime).locale('pl').fromNow()}`}</Text>
                <Text>Uczniowie biorący udział w zadaniu:</Text>
                {this.state.taskSession.students.map((s: any, index: number) => this.renderGroupUsers(s, index))}
            </View>
        )

    WhiteboardRoute = () =>
        (
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: `http://10.0.2.2:8090/boards/${this.state.taskSession.id}` }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={true}
                />
            </View>
        )

    ChatRoute = () =>
        (
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: `http://10.0.2.2:8083/${this.state.taskSession.id}?name=${this.props.username}` }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    scalesPageToFit={false}
                />
            </View>
        )

    renderGroupUsers(student: any, index: number) {
        return (
            <Text>{`${student.user.firstName} ${student.user.lastName} `}</Text>
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

const mapStateToProps = (state: any) => ({
    username: state.auth.username
  })
  
  const component = connect(
    mapStateToProps
  )(TaskSessionScreen)
  
export default component
