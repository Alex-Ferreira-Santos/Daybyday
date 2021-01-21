import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {sonoData} from '../../styles/Sono'
import SonoPopup from './SonoPopup'

class SonoData extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
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
                <TouchableHighlight style={sonoData.desableButton} underlayColor='#810000' onPress={()=>{this.setState({visible: true})}}>
                    <Text style={sonoData.ButtonText}>Desativar as notificações</Text>
                </TouchableHighlight>

                <TouchableHighlight style={sonoData.menuButton} underlayColor='#118F1D' onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={sonoData.ButtonText}>Voltar ao menu</Text>
                </TouchableHighlight>
                {this.state.visible && (<SonoPopup close={''} desable={''}/>)}
            </View>
        )
    }
}

export default SonoData