import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { WebView } from 'react-native-webview'


class HomeScreen extends React.Component<{}, {}> {

    render() {
        return (
            <View style={{flex:1}}>
                <Button onPress={() => this.logout()} title="Wyloguj"/>

                {/* <WebView 
                //  source={{ uri: 'http://10.0.2.2:8080/boards/Zad1' }}
                source={{ uri: 'http://192.168.137.1:8080/boards/z' }}
                // source={{ uri: 'http://192.168.137.1:3001/task-editor' }}
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 startInLoadingState={true}
                 scalesPageToFit={true}

                /> */}
            </View>
        )
    }

    logout() {
        this.props.navigation.navigate({routeName: "routeLogin"})
    }
}

export default HomeScreen
