import React,{Component} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native'
import {sono} from '../../styles/Sono'
import lua from '../../img/lua-crescente.png'

class SonoHome extends Component{
    render() {
        return(
            <View style={sono.container}>
                <Text style={sono.title}>Auxiliador de sono</Text>
                <Text style={sono.description}>Está sessão ajudará você a controlar melhor o seu sono e te mostrara dicas para cada quantidade de horas de que você tem dormido por dia</Text>
                <Image source={lua} style={sono.lua}/>
                <TouchableHighlight style={sono.button}>
                    <Text style={sono.textButton}>Próximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default SonoHome