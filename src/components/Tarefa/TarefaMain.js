import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import {tarefaMain} from '../../styles/Tarefa'
import Tarefa from './Tarefa';

class TarefaMain extends Component{
    render() {
        return(
            <View style={tarefaMain.container}>
                <Text style={tarefaMain.title}>Suas tarefas</Text>
                <Text style={tarefaMain.text}>Para editar ou excluir uma tarefa, clique em detalhes na tarefa que deseja modificar</Text>
                <View style={tarefaMain.main}>
                    <View style={tarefaMain.head}>
                        <View style={tarefaMain.box}>
                            <Text style={tarefaMain.lowerText}>Box</Text>
                        </View>
                        <View style={[tarefaMain.others,tarefaMain.description]}>
                            <Text style={tarefaMain.lowerText}>Descrição</Text>
                        </View>
                        <View style={[tarefaMain.others,tarefaMain.date]}>
                            <Text style={tarefaMain.lowerText}>Data de término</Text>
                        </View>
                        <View style={[tarefaMain.others,tarefaMain.priority]}>
                            <Text style={tarefaMain.lowerText}>Prioridade</Text>
                        </View>
                        <View style={tarefaMain.detail}>
                            <Text style={tarefaMain.lowerText}>Detalhes</Text>
                        </View>
                    </View>
                    <ScrollView style={tarefaMain.scroll}>
                        <Tarefa descricao={'estudar para a prova do dia 14'} data={'Jan 22 2021 14:00'} prioridade={'média'}/>
                        <Tarefa descricao={'descrição 2'} data={'Jan 22 2021 14:00'} prioridade={'média'}/>
                        
                    </ScrollView>
                </View>
                <TouchableHighlight style={tarefaMain.button}>
                    <Text style={tarefaMain.buttonText}>Inserir nova tarefa</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default TarefaMain;