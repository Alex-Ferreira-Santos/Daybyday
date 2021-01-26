import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import {massaFinal} from '../../styles/Massa'
import peso from '../../img/peso.png'

class MassaFinal extends Component {
    render(){
        return (
            <View style={massaFinal.container}>
                <Text style={massaFinal.title}>Seu IMC é de <Text style={massaFinal.bold}>23.76</Text></Text>
                <Text style={massaFinal.agua}>A quantidade de água é de <Text style={massaFinal.bold}>2.1</Text> litros</Text>
                <Text style={massaFinal.mensagem}>Não se preocupe, você pode refazer o teste quando quiser para ver se ganhou ou perdeu massa corporal nas ultimas vezes</Text>
                <Image source={peso} style={massaFinal.peso}/>
                <TouchableHighlight style={massaFinal.button} underlayColor='#4E5000' onPress={()=>this.props.navigation.navigate('MassaForm',{edit:true})}>
                    <Text style={massaFinal.textButton}>Refazer o teste</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[massaFinal.button,massaFinal.menuButton]} onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={massaFinal.textButton}>Voltar ao menu</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default MassaFinal