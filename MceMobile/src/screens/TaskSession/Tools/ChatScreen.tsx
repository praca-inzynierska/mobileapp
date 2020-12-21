import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, KeyboardAvoidingView } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'
import { SafeAreaView } from 'react-native-safe-area-context'

interface State {
    taskSession: any
    messages: any
    user: string
}

class ChatScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            taskSession: null,
            messages: [],
            user: ""
        }
    }

    async componentDidMount () {
        var data = this.props.navigation.state.params
        await this.setState({taskSession: data.taskSession, user: data.user})
    }


    render() {
        console.log(this.state)
        if(this.state.taskSession != null && this.state.taskSession.id != null && this.state.user != "")
        return (
            <SafeAreaView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={30} enabled>
                <View style={{flex:1}}>
                    <WebView 
                    source={{ uri: `http://10.0.2.2:8083/${this.state.taskSession.id}?name=${this.state.user}` }}
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     startInLoadingState={true}
                     scalesPageToFit={false}
                    />
                </View>
            </SafeAreaView>
        )
        else return null
    }
}

export default ChatScreen
