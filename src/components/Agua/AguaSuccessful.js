import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import { aguaSuccessful } from '../../styles/Agua';
import copo from '../../img/copo-de-agua.png'

class AguaSuccessful extends Component{
    render(){
        return (
            <View style={aguaSuccessful.container}>
                <Text style={aguaSuccessful.title}>Pronto</Text>
                <Text style={aguaSuccessful.notification}>Você irá receber uma notificação a cada: x minutos para lembra-lo de beber água</Text>
                <Image source={copo} style={aguaSuccessful.copo}/>
                <TouchableHighlight style={aguaSuccessful.button} underlayColor='#114A4A' onPress={()=>this.props.navigation.navigate('AguaOptions')}>
                    <Text style={aguaSuccessful.textButton}>Seguir</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AguaSuccessful