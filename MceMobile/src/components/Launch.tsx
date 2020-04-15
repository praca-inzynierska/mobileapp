import React from 'react'
import { View, StyleSheet, Text, StatusBar, ProgressBarAndroid, Platform, ActivityIndicator } from 'react-native'
import { Fonts, Dimensions } from '../assets';

class Launch extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default Launch