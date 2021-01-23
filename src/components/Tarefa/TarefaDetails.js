import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefaDetails} from '../../styles/Tarefa'

class TarefaDetail extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={tarefaDetails.container}>
                <Text style={tarefaDetails.pageTitle}>Detalhes</Text>
                <View style={[tarefaDetails.main]}>
                    <Text style={tarefaDetails.title}>Estudar para prova</Text>
                    <Text style={tarefaDetails.category}>Descrição</Text>
                    <Text style={tarefaDetails.text}>copiar os a materia para poder estudar para a prova de matematica do dia 29</Text>
                    <Text style={tarefaDetails.category}>Data de término</Text>
                    <Text style={tarefaDetails.text}>Jan 22 2021 14:00</Text>
                    <Text style={tarefaDetails.category}>Prioridade</Text>
                    <Text style={tarefaDetails.text}>Média</Text>
                    <TouchableHighlight style={tarefaDetails.concluir} underlayColor='#367720' onPress={()=>{}}>
                        <Text style={tarefaDetails.buttonText}>Concluir</Text>
                    </TouchableHighlight>
                    <View style={tarefaDetails.buttons}>
                        <TouchableHighlight style={tarefaDetails.editar} underlayColor='#B6B916' onPress={()=>this.props.navigation.navigate('TarefaForm')}>
                            <Text style={tarefaDetails.buttonText}>Editar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={tarefaDetails.excluir} underlayColor='#AA0E0E' onPress={()=>{}}>
                            <Text style={tarefaDetails.excludeButtonText}>Excluir</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default TarefaDetail