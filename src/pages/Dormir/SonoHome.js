import React from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {sono} from '../../styles/Sono'
import lua from '../../img/lua-crescente.png'

export function SonoHome(){
    const navigation = useNavigation()
    return(
        <View style={sono.container}>
            <Text style={sono.title}>Auxiliador de sono</Text>
            <Text style={sono.description}>Está sessão ajudará você a controlar melhor o seu sono e te mostrara dicas para cada quantidade de horas de que você tem dormido por dia</Text>
            <Image source={lua} style={sono.lua}/>
            <TouchableHighlight style={sono.button} underlayColor='#00104A' onPress={()=>navigation.navigate('SonoForm')}>
                <Text style={sono.textButton}>Próximo</Text>
            </TouchableHighlight>
        </View>
    )
}