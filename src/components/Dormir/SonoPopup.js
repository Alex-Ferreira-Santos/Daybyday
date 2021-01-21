import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {sonoPopup} from '../../styles/Sono'

class SonoPopup extends Component{
    render(){
        return (
            <View style={sonoPopup.container}>
                <View style={sonoPopup.popup}>
                    <Text style={sonoPopup.text}>Tem certeza que deseja remover as notificações, você não será lembrado na hora ideal de dormir caso desative elas</Text>
                    <TouchableHighlight underlayColor='#ADADAD' style={sonoPopup.backButton} onPress={()=>{
                        this.props.close()
                    }}>
                        <Text style={sonoPopup.backButtonText}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#810707' style={sonoPopup.desableButton} onPress={()=>{
                        this.props.close()
                        this.props.desable()
                        alert('As notificações foram desativadas')
                    }}>
                        <Text style={sonoPopup.desableButtonText}>Desativar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default SonoPopup