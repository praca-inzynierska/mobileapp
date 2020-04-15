
import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { Strings, Fonts } from '../../assets'
import { NavigationScreenProp } from 'react-navigation'

interface State {
    login: string,
    password: string
}

class LoginScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            login: "",
            password: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{Strings.login.label}</Text>
                <TextInput
                    style={{ height: 40, width: 90, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => {
                        this.setState({
                            login: text
                        })
                    }}
                />
                <Button title={Strings.login.loginButton}
                onPress={() => {this.props.navigation.navigate({routeName: "routeHome"})}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        ...Fonts.title
    }
});

export default LoginScreen