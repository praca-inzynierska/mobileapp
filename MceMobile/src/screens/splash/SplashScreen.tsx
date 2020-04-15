import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Fonts, Strings } from '../../assets'
import { NavigationAction, NavigationScreenProp } from 'react-navigation'
import { observer } from 'mobx-react'

interface SplashScreenProps {

}

interface SplashScreenState {
    inProgress: boolean
    //connection network
}

// @observer
class SplashScreen extends React.Component< NavigationScreenProp<any, any>, SplashScreenState> {

    constructor(props: any) {
        super(props)

        this.state = {
            inProgress: true,
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderProgress()}
                {this.isUserLoggedIn()}
            </View>
        )
    }

    renderProgress() {
        if(this.state.inProgress)
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{Strings.hello}</Text>
                <ActivityIndicator />
            </View>
        )
        else return
    }

    isUserLoggedIn() {
        setTimeout(() => {
            this.setState({inProgress: false})
            this.props.navigation.navigate({routeName: "routeLogin"})
        }, 100);


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        ...Fonts.largeTitle
    }
});

export default SplashScreen