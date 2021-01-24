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
                        <Text style={alimentacaoForm.label}>Ingredientes da receita</Text>
                        <Text>Separe os ingredientes por vírgula</Text>
                        <TextInput placeholder='Digite os ingredientes da receita aqui' style={[alimentacaoForm.input, alimentacaoForm.biggerInput]}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Modo de preparo</Text>
                        <TextInput placeholder='Digite o modo de preparo aqui' style={[alimentacaoForm.input,alimentacaoForm.biggerInput]} multiline={true}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Fonte da receita</Text>
                        <TextInput placeholder='Digite a fonte da receita aqui' style={alimentacaoForm.input} multiline={true}/>
                    </View>
                    <TouchableHighlight style={alimentacaoForm.button}>
                        <Text style={alimentacaoForm.buttonText}>Inserir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default AlimentacaoForm;