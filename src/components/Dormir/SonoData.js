import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import Sono from '../../Database/Sono';
import {sonoData} from '../../styles/Sono'
import SonoPopup from './SonoPopup'
import {notificationManager} from '../../services/NotificationManager'

class SonoData extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            enable: {},
            text: 'Desativar as notificações',
            underlayColor: '#810000',
            sono:[],
            horas: '',
            frase: ''
            
        }
        this.sono = []
        this.closePopup = this.closePopup.bind(this)
        this.desable = this.desable.bind(this)
        this.enable = this.enable.bind(this)
        this.select()
        this.notification
        this.notification = notificationManager
        this.notification.configure()
    }

    closePopup(){
        this.setState({visible: false})
    }

    desable(){
        this.setState({enable: {backgroundColor: '#1EC0B7'}})
        this.setState({text: 'Habilitar notificações'})
        this.setState({underlayColor: '#199891'})
    }

    enable(){
        this.setState({enable: {}})
        this.setState({text: 'Desativar as notificações'})
        this.setState({underlayColor: '#810000'})
    }

    async select(){
        const sono = new Sono
        await sono.select().then( value => {
            this.atribuiValor(value,this.sono)
        })
        this.setState({sono:this.sono})
        this.CustomText()
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    CustomText(){
        this.setState({horas: this.state.sono[0][0].horasDormidas})
        if(this.state.horas<6){
            this.setState({frase:'horas de sono, não é o tempo ideal para dormir, você está dormindo bem pouco, tente ir para cama mais cedo se possivel para conseguir ajeitar seu sono, dormir pouco pode resultar em cansaço excessivo e vai te prejudicar'})
        } else if(this.state.horas>=6 && this.state.horas<8){
            this.setState({frase:'horas de sono, não é o tempo ideal para dormir mas está perto de estar ideal, tente tirar um cochilo de 1 hora para poder ter as horas arrumadas'})
        }else if(this.state.horas>=8 && this.state.horas<10){
            this.setState({frase:'horas de sono, parabéns, você está com o sono em dia'})
        }else if(this.state.horas>=10 && this.state.horas<12){
            this.setState({frase:'horas de sono, você está dormindo mais do que devia, tente colocar um despertador para acordar no horário certo para regular esse sono'})
        }else if(this.state.horas>=12){
            this.setState({frase:'horas de sono, você está dormindo bem acima do ideal, dormir essa quantidade pode resultar em sérios problemas de saúde'})
        }
    }

    render(){
        return(
            <View style={sonoData.container}>
                <Text style={sonoData.title}>Na última noite você dormiu {this.state.horas} horas</Text>
                <Text style={sonoData.customText}>{this.state.horas} {this.state.frase}</Text>
                <Text style={sonoData.alert}>Para te alertar a hora certa de dormir, uma notificação será enviada para você de acordo com a hora que você deseja dormir</Text>

                <TouchableHighlight style={sonoData.changeButton} underlayColor='#00104A' onPress={()=>this.props.navigation.navigate('SonoForm',{edit:true})}>
                    <Text style={sonoData.ButtonText}>Trocar os horários</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[sonoData.desableButton,this.state.enable]} underlayColor={this.state.underlayColor} onPress={()=>{
                    if(this.state.text === 'Desativar as notificações'){
                        this.setState({visible: true})
                    }else{
                        alert('As notificações foram habilitadas')
                        this.notification.ScheduleSleepNotification(this.state.horas.toString())
                        this.enable()
                    }
                    
                }}>
                    <Text style={sonoData.ButtonText}>{this.state.text}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={sonoData.menuButton} underlayColor='#118F1D' onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={sonoData.ButtonText}>Voltar ao menu</Text>
                </TouchableHighlight>
                {this.state.visible && (<SonoPopup close={this.closePopup} desable={this.desable}/>)}
            </View>
        )
    }
}

export default SonoData