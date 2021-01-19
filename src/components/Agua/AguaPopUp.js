import React,{Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'
import {aguaPopup} from '../../styles/Agua'

class AguaPopUp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={[aguaPopup.container]}>
                <View style={aguaPopup.section}>
                    <Text style={aguaPopup.text}>Tem certeza que deseja remover as notificações, você não será lembrado na hora ideal para beber água caso desative elas</Text>
                    <TouchableHighlight style={aguaPopup.backButton} underlayColor='#A4A3A3' onPress={()=>{
                        this.props.invisible()
                    }}>
                        <Text style={aguaPopup.back}>Voltar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={aguaPopup.desableButton} underlayColor='#810D0D' onPress={()=>{
                        this.props.invisible()
                    }}>
                        <Text style={aguaPopup.desable}>Desativar</Text>
                    </TouchableHighlight>
                </View>
                
            </View>
        )
    }
}

export default AguaPopUp;