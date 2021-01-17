import React,{Component} from 'react';
import {View,TouchableHighlight,Text} from 'react-native'

class AguaHome extends Component {
    render() {
        return(
            <View style={{flex: 1,backgroundColor: '#3EDDE8'}}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate("Homepage")}>
                    <Text>Voltar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AguaHome;