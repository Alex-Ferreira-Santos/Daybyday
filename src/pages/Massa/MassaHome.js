import React from 'react';
import {massa} from '../../styles/Massa'
import {View,Text,Image,TouchableHighlight} from 'react-native'
import peso from '../../img/peso.png'
import {useNavigation} from '@react-navigation/native'

function MassaHome(){
    const navigation = useNavigation()
    return (
        <View style={massa.container}>
            <Text style={massa.title}>Massa Corporal</Text>
            <Text style={massa.text}>Está sessão mostrará para você o sua massa coporal utilizando a formula de IMC(indice de massa corporal), essa formula pega o seu peso e  sua altura ao quadrado e divide para saber o seu peso ideal.</Text>
            <Image source={peso} style={massa.img}/>
            <TouchableHighlight style={massa.button} underlayColor='#4E5000' onPress={()=>navigation.navigate('MassaForm')}>
                <Text style={massa.textButton}>Próximo</Text>
            </TouchableHighlight>
        </View>
    )
}

export default MassaHome