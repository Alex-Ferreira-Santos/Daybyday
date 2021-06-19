import React from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import {aguaPopup} from '../../styles/Agua'
import {notificationManager} from '../../services/NotificationManager'

export function AguaPopUp(props){
    const notification = notificationManager
    notification.configure()
    
    return (
        <View style={aguaPopup.container}>
            <View style={aguaPopup.section}>
                <Text style={aguaPopup.text}>Tem certeza que deseja remover as notificações, você não será lembrado na hora ideal para beber água caso desative elas</Text>
                <TouchableHighlight style={aguaPopup.backButton} underlayColor='#A4A3A3' onPress={()=>{
                    props.invisible()
                }}>
                    <Text style={aguaPopup.back}>Voltar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={aguaPopup.desableButton} underlayColor='#810D0D' onPress={()=>{
                    props.invisible()
                    props.change()
                    notification.cancelNotifications(10000000)
                }}>
                    <Text style={aguaPopup.desable}>Desativar</Text>
                </TouchableHighlight>
            </View>
                
        </View>
    )
}
