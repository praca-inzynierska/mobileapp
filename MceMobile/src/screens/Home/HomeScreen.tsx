import React from 'react'
import { View, Text, Button } from 'react-native'

class HomeScreen extends React.Component<{}, {}> {

    render() {
        return (
            <View>
                <Text>Hello from home screen</Text>
                <Text>Zobacz aktualne sesje</Text>
                <Text>dołącz do nowej sesji</Text>
                <Text>Zobacz zakończone sesje</Text>
            </View>
        )
    }
}

export default HomeScreen
