import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { WebView } from 'react-native-webview'


class HomeScreen extends React.Component<{}, {}> {

    render() {
        return (
            <View style={{flex:1}}>
                <Text>Hello from home screen</Text>
                <Text>Zobacz aktualne sesje</Text>
                <Text>dołącz do nowej sesji</Text>
                <Text>Zobacz zakończone sesje</Text>
                <WebView 
                 source={{ uri: 'http://10.0.2.2:8080/boards/Zad1' }}
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 startInLoadingState={true}
                 scalesPageToFit={true}

                />
            </View>
        )
    }
}

export default HomeScreen
