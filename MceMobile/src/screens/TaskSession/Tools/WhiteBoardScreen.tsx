import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'

interface State {
    id: any
}


class WhiteboardScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            id: null,
        }
    }

    async componentDidMount () {
        var data = this.props.navigation.state.params
        await this.setState({id: data.taskId})
    }

    render() {
        console.log(this.state)
        if(this.state.id == null) {
            return null
        }
        else {
            return (
                <View style={{flex:1}}>
                    <Text>Whiteboard is available</Text>
                    <WebView 
                    //  source={{ uri: 'http://10.0.2.2:8080/boards/Zad1' }}
                    source={{ uri: `http://10.0.2.2:8090/boards/${this.state.id}` }}
                    // source={{ uri: 'http://192.168.137.1:3001/task-editor' }}
                     javaScriptEnabled={true}
                     domStorageEnabled={true}
                     startInLoadingState={true}
                     scalesPageToFit={true}
    
                    />
                </View>
            )
        }
    }
}

export default WhiteboardScreen
