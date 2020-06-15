
import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { Strings, Fonts } from '../../assets'
import { NavigationScreenProp } from 'react-navigation'
import { TabView, SceneMap } from 'react-native-tab-view'
import api from '../../utils/api'

interface State {
    login: string,
    password: string,
    name: string,
    surname: string,
    email: string,
    index: number,
    routes: any
}


class LoginScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            login: "",
            password: "",
            name: "",
            surname: "",
            email: "",
            index: 0,
            routes: [{ key: 'login', title: "Login"}, {key: 'register', title: 'Register'}]
        }
    }

    
    LoginRoute = () => (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        login: text
                    })
                }}
                placeholder="Login"
            />
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }}
                placeholder="Hasło"
            />
            <Button title={"Zaloguj"}
                onPress={this.handleLogin}/>
      </View>

     )
     RegisterRoute = () => (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        login: text
                    })
                }}
                placeholder="Login"
            />
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }}
                
                placeholder="Hasło"
            />
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }}
                placeholder="Email"
            />
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }}
                placeholder="Imię"
            />
            <TextInput
                style={{ height: 40, alignSelf: 'stretch', borderColor: 'gray', borderWidth: 1}}      //TODO add to components
                onChangeText={(text) => {
                    this.setState({
                        password: text
                    })
                }}
                placeholder="Nazwisko"
            />
            <Button title="Zarejestruj"
                onPress={this.handleRegister}/>
      </View>
     )

    render() {

        return (
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        login: this.LoginRoute,
                        register: this.RegisterRoute,
                      })}
                      onIndexChange={index => this.setState({ index })}
                />
        )
    }

    handleLogin = async () => {
        const data = {
            username: this.state.login,
            password: this.state.password
          }
          const url = '/login'
          api.post(url, data)
          .then((response: any) => {
            this.props.navigation.navigate({routeName: "routeHome"})
          })
          .catch((e:any) => console.log(e))
    }
    
    handleRegister = async () => {
        const data = {
            username: this.state.login,
            password: this.state.password,
            firstName: this.state.name,
            lastName: this.state.surname,
            isTeacher: false
          }
          const url = '/register'
          api.post(url, data)
          .then((response: any) => {
            this.props.navigation.navigate({routeName: "routeHome"})
          })
          .catch((e:any) => console.log(e))
        //this.props.navigation.navigate({routeName: "routeHome"})
      }
      
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: "space-around"

    },
    text: {
        ...Fonts.title
    }
});

export default LoginScreen