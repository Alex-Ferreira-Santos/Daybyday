import React,{Component} from 'react';
import {View,TouchableHighlight,Text} from 'react-native'
import {agua} from '../styles/Agua'

class AguaHome extends Component {
    render() {
        return(
            <View style={agua.container}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate("Homepage")}>
                    <Text>Voltar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AguaHome;