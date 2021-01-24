import React,{Component} from 'react';
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import {alimentacaoForm} from '../../styles/Alimentacao'

class AlimentacaoForm extends Component {
    render() {
        return(
            <View style={alimentacaoForm.container}>
                <Text style={alimentacaoForm.title}>Inserir receita</Text>
                <View style={alimentacaoForm.main}>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Nome da receita</Text>
                        <TextInput placeholder='Digite o nome da receita aqui' style={alimentacaoForm.input}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Descrição da receita</Text>
                        <TextInput placeholder='Digite o nome da receita aqui' style={alimentacaoForm.input}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Nome da receita</Text>
                        <TextInput placeholder='Digite o nome da receita aqui' style={alimentacaoForm.input}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Fonte da receita</Text>
                        <TextInput placeholder='Digite o nome da receita aqui' style={alimentacaoForm.input}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default AlimentacaoForm;