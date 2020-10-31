import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, KeyboardAvoidingView } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'
import { GiftedChat } from 'react-native-gifted-chat'
import Fire from '../../../../Fire'
import { SafeAreaView } from 'react-native-safe-area-context'

interface State {
    id: any
    messages: []
}


class ChatScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            id: null,
            messages: []
        }
    }

    get user() {
        return {
            _id: Fire.uid,
            name: 'beata'
        }
    }

    async componentDidMount () {
        Fire.get((message: any) => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        })))
        var data = this.props.navigation.state.params
        await this.setState({id: data.taskId})
    }

    componentWillUnmount() {
        Fire.off()
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />

        return (
            <SafeAreaView style={{flex: 1}} behavior='padding' keyboardVerticalOffset={30} enabled>
                {chat}
            </SafeAreaView>
        )
    }
}

export default ChatScreen
