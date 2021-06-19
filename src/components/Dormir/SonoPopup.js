import React from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {sonoPopup} from '../../styles/Sono'
import {notificationManager} from '../../services/NotificationManager'

export function SonoPopup(props){
    const notification = notificationManager
    notification.configure()
    
    return (
        <View style={sonoPopup.container}>
            <View style={sonoPopup.popup}>
                <Text style={sonoPopup.text}>Tem certeza que deseja remover as notificações, você não será lembrado na hora ideal de dormir caso desative elas</Text>
                <TouchableHighlight 
                    underlayColor='#ADADAD' 
                    style={sonoPopup.backButton} 
                    onPress={()=>{
                        props.close()
                    }}>
                    <Text style={sonoPopup.backButtonText}>Voltar</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    underlayColor='#810707' 
                    style={sonoPopup.desableButton} 
                    onPress={()=>{
                        props.close()
                        props.desable()
                        notification.cancelNotifications(100000)
                        alert('As notificações foram desativadas')
                    }}
                >
                    <Text style={sonoPopup.desableButtonText}>Desativar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}
