import React,{Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import {aguaPopup} from '../../styles/Agua'
import {notificationManager} from '../../services/NotificationManager'

class AguaPopUp extends Component{
    constructor(props){
        super(props)
        this.notification
        this.notification = notificationManager
        this.notification.configure()
    }
    render(){
        return (
            <View style={aguaPopup.container}>
                <View style={aguaPopup.section}>
                    <Text style={aguaPopup.text}>Tem certeza que deseja remover as notificações, você não será lembrado na hora ideal para beber água caso desative elas</Text>
                    <TouchableHighlight style={aguaPopup.backButton} underlayColor='#A4A3A3' onPress={()=>{
                        this.props.invisible()
                    }}>
                        <Text style={aguaPopup.back}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={aguaPopup.desableButton} underlayColor='#810D0D' onPress={()=>{
                        this.props.invisible()
                        this.props.change()
                        this.notification.cancelNotifications(1)
                    }}>
                        <Text style={aguaPopup.desable}>Desativar</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}

export default AguaPopUp;