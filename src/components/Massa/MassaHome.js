import React,{Component} from 'react';
import {massa} from '../../styles/Massa'
import {View,Text,Image,TouchableHighlight} from 'react-native'
import peso from '../../img/peso.png'

class MassaHome extends Component {
    render(){
        return (
            <View style={massa.container}>
                <Text style={massa.title}>Peso</Text>
                <Text style={massa.text}>Está sessão mostrará para você o seu peso utilizando a formula de IMC(indice de massa corporal), essa formula pega o seu peso e  sua altura ao quadrado e divide para saber o seu peso ideal </Text>
                <Image source={peso} style={massa.img}/>
                <TouchableHighlight style={massa.button} onPress={()=>{}}>
                    <Text style={massa.textButton}>Proximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default MassaHome