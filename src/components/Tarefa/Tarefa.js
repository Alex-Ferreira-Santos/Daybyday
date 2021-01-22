import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefa} from '../../styles/Tarefa'
import CheckBox from '@react-native-community/checkbox'

class Tarefa extends Component {
    render() {
        return(
            <View style={[tarefa.container]}>
                <View style={tarefa.box}>
                    <Text style={tarefa.lowerText}><CheckBox disabled={false} value={true} onValueChange={()=>{}}/></Text>
                </View>
                <View style={[tarefa.others,tarefa.description]}>
                    <Text style={tarefa.lowerText}>Fazer a prova de matematica do dia 14</Text>
                </View>
                <View style={[tarefa.others,tarefa.date]}>
                    <Text style={tarefa.lowerText}>Jan 22 2021 14:00</Text>
                </View>
                <View style={[tarefa.others,tarefa.priority]}>
                    <Text style={tarefa.lowerText}>Média</Text>
                </View>
                <View style={tarefa.detail}>
                    <TouchableHighlight underlayColor='white' onPress={()=>{}}>
                        <Text style={[tarefa.lowerText,tarefa.textDetails]}>Detalhes</Text>
                    </TouchableHighlight> 
                </View>
            </View>
        )
    }
}

export default Tarefa