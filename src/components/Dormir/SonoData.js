import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {sonoData} from '../../styles/Sono'
import SonoPopup from './SonoPopup'

class SonoData extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            enable: {},
            text: 'Desativar as notificações',
            underlayColor: '#810000'
            
        }
        this.closePopup = this.closePopup.bind(this)
        this.desable = this.desable.bind(this)
        this.enable = this.enable.bind(this)
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

    render(){
        return(
            <View style={sonoData.container}>
                <Text style={sonoData.title}>Na última noite você dormiu 7 horas</Text>
                <Text style={sonoData.customText}>7 horas de sono não é o tempo ideal para dormir mas está perto de estar ideal, tente tirar um cochilo de 1 hora para poder ter as horas arrumadas</Text>
                <Text style={sonoData.alert}>Para te alertar a hora certa de dormir, uma notificação será enviada para você de acordo com a hora que você deseja dormir</Text>

                <TouchableHighlight style={sonoData.changeButton} underlayColor='#00104A' onPress={()=>this.props.navigation.navigate('SonoForm')}>
                    <Text style={sonoData.ButtonText}>Trocar os horários</Text>
                </TouchableHighlight>

                <TouchableHighlight style={[sonoData.desableButton,this.state.enable]} underlayColor={this.state.underlayColor} onPress={()=>{
                    if(this.state.text === 'Desativar as notificações'){
                        this.setState({visible: true})
                    }else{
                        alert('As notificações foram habilitadas')
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