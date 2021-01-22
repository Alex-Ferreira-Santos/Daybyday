import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {tarefaForm} from '../../styles/Tarefa'

class TarefaForm extends Component {
    constructor(props){
        
    }
    render(){
        return (
            <View style={tarefaForm.container}>
                <Text style={tarefaForm.title}>Inserir nova tarefa</Text>
                <Text></Text>
                <View style={tarefaForm.form}>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Título</Text>
                        <TextInput placeholder='Digite o título da tarefa aqui' style={tarefaForm.input}/>
                    </View>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Descrição</Text>
                        <TextInput placeholder='Digite a descrição da tarefa aqui' style={[tarefaForm.input,tarefaForm.description]} multiline={true}/>
                    </View>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Data de término</Text>
                        <TextInput placeholder='Selecione a data de término aqui' style={tarefaForm.input}/>
                    </View>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Prioridade</Text>
                        <TextInput placeholder='Selecione a prioridade aqui' style={tarefaForm.input}/>
                    </View>
                    <TouchableHighlight underlayColor='#5B0000' style={tarefaForm.button} onPress={()=>{


                        
                    }}>
                        <Text style={tarefaForm.buttonText}>Inserir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default TarefaForm;