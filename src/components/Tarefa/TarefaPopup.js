import React from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import TarefaDB from '../../Database/tarefa';
import {tarefaPopup} from '../../styles/Tarefa'
import {notificationManager} from '../../services/NotificationManager'

function TarefaPopup(props){
    const notification = notificationManager
    notification.configure()
    
    async function Delete(id){
        const tarefa = new TarefaDB
        await tarefa.delete(id)
    }

    return(
        <View style={tarefaPopup.container}>
            <View style={tarefaPopup.main}>
                <Text style={tarefaPopup.warning}>Atenção!!! excluir uma tarefa é irreversivel</Text>
                <Text style={tarefaPopup.text}>Tem certeza que deseja excluir a tarefa de</Text>
                <Text style={tarefaPopup.name}>{props.titulo}</Text>
                <View style={tarefaPopup.buttons}>
                    <TouchableHighlight style={tarefaPopup.backButton} underlayColor='#9E9E9E' onPress={()=>{props.hide()}}>
                        <Text style={tarefaPopup.backButtonText}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={tarefaPopup.excludeButton} underlayColor='#BC1B1B' onPress={async ()=>{
                        alert(`Tarefa ${props.titulo} excluida com sucesso`)
                        await Delete(props.id)
                        props.goback()
                        notification.cancelNotifications(props.id)
                    }}>
                        <Text style={tarefaPopup.excludeButtonText}>Excluir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default TarefaPopup