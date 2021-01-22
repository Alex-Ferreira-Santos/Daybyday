import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import {tarefaMain} from '../../styles/Tarefa'

class TarefaMain extends Component{
    render() {
        return(
            <View style={tarefaMain.container}>
                <Text style={tarefaMain.title}>Suas tarefas</Text>
                <Text style={tarefaMain.text}>Para editar ou excluir uma tarefa, clique em detalhes na tarefa que deseja modificar</Text>
                <View style={tarefaMain.main}>
                    <View style={tarefaMain.head}>
                        <View style={tarefaMain.box}>
                            <Text>Box</Text>
                        </View>
                        <View style={tarefaMain.others}>
                            <Text>Descrição</Text>
                        </View>
                        <View style={tarefaMain.others}>
                            <Text>Data de término</Text>
                        </View>
                        <View style={tarefaMain.others}>
                            <Text>Prioridade</Text>
                        </View>
                        <View style={tarefaMain.detail}>
                            <Text>Detalhes</Text>
                        </View>
                    </View>
                    <ScrollView style={tarefaMain.scroll}>

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