import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {alimentacaoMain} from '../../styles/Alimentacao'

class AlimentacaoMain extends Component{
    render(){
        return (
            <View style={alimentacaoMain.container}>
                <Text style={alimentacaoMain.title}>Alimentação</Text>
                <Text style={alimentacaoMain.text}>Dietas disponíveis</Text>
                <View style={alimentacaoMain.dietas}>

                </View>
                <TouchableHighlight style={alimentacaoMain.button}>
                    <Text style={alimentacaoMain.buttonText}>Inserir</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AlimentacaoMain;