import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import TarefaDB from '../../Database/tarefa';
import {tarefaPopup} from '../../styles/Tarefa'
import {notificationManager} from '../../services/NotificationManager'

class TarefaPopup extends Component {
    constructor(props){
        super(props)
        this.notification
        this.notification = notificationManager
        this.notification.configure()
    }

    async delete(id){
        const tarefa = new TarefaDB
        await tarefa.delete(id)
    }

    render() {
        return(
            <View style={tarefaPopup.container}>
                <View style={tarefaPopup.main}>
                    <Text style={tarefaPopup.warning}>Atenção!!! excluir uma tarefa é irreversivel</Text>
                    <Text style={tarefaPopup.text}>Tem certeza que deseja excluir a tarefa de</Text>
                    <Text style={tarefaPopup.name}>{this.props.titulo}</Text>
                    <View style={tarefaPopup.buttons}>
                        <TouchableHighlight style={tarefaPopup.backButton} underlayColor='#9E9E9E' onPress={()=>{this.props.hide()}}>
                            <Text style={tarefaPopup.backButtonText}>Voltar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={tarefaPopup.excludeButton} underlayColor='#BC1B1B' onPress={async ()=>{
                            alert(`Tarefa ${this.props.titulo} excluida com sucesso`)
                            await this.delete(this.props.id)
                            this.props.goback()
                            this.notification.cancelNotifications(this.props.id)
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