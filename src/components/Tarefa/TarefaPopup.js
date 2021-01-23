import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefaPopup} from '../../styles/Tarefa'

class TarefaPopup extends Component {
    render() {
        return(
            <View style={tarefaPopup.container}>
                <View style={tarefaPopup.main}>
                    <Text style={tarefaPopup.warning}>Atenção!!! excluir uma tarefa é irreversivel</Text>
                    <Text style={tarefaPopup.text}>Tem certeza que deseja excluir a tarefa de</Text>
                    <Text style={tarefaPopup.name}>Descrição da tarefa</Text>
                    <View style={tarefaPopup.buttons}>
                        <TouchableHighlight style={tarefaPopup.backButton} underlayColor='#9E9E9E' onPress={()=>{this.props.hide()}}>
                            <Text style={tarefaPopup.backButtonText}>Voltar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={tarefaPopup.excludeButton} underlayColor='#BC1B1B' onPress={()=>{
                            alert('Tarefa X excluida com sucesso')
                            this.props.goback()
                        }}>
                            <Text style={tarefaPopup.excludeButtonText}>Excluir</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default TarefaPopup