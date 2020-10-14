import 'react-native-get-random-values'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { WebView } from 'react-native-webview'
import { NavigationScreenProp } from 'react-navigation'
import api from '../../utils/api'
import ClassSessionModel from '../../model/ClassSessionModel'
import moment from 'moment'

interface State {
    classSessions: Array<any>
    token: String
}

class ClassSessionsScreen extends React.Component<NavigationScreenProp<any, any>, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            classSessions: [],
            token: ""
        }
    }

    
  componentDidMount () {
    var data = this.props.navigation.state.params
    api.get(`classSessions`, {headers: {'Token': data.token}})
      .then((response: any) => {
          console.log(response)
          this.setState({ classSessions: response.data, token: data.token })
        })
        .catch((e: any) => console.log(e))

  }


    render() {
        return (
            <View style={{flex:1}}>
                <Text>Wszystkie zajęcia</Text>
                {this.state.classSessions.map((c: any, index: number) => this.renderClassSession(c, index))}
            </View>
        )
    }

    renderClassSession(c: any, index: number) {
        var start = moment(c.startDate)
        var startDate = start.format("dd.mm.yyyy hh:MM")
        var end = moment(c.endDate)
        var endDate = end.format("dd.mm.yyyy hh:MM")
        console.log(c)
        return (
            <View>
                <Button 
                   title={`Zajęcia ${index + 1}`}
                     onPress={() => this.props.navigation.navigate({routeName: "Zadania", params: {classSession: this.state.classSessions[index], token: this.state.token}})}
              />
                <Text>{`${startDate} - ${endDate}`}</Text>
            </View>
        )    
    }


}

export default ClassSessionsScreen
