import React from 'react';
import {View,TouchableHighlight,Text,Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {agua} from '../../styles/Agua'
import copo from '../../img/copo-de-agua.png'

export function AguaHome(){
    const navigation = useNavigation()
    return(
        <View style={agua.container}>
            <Text style={agua.title}>Lembrete de água</Text>
            <Text style={agua.text}>Está sessão ajudará você a saber a quantidade de água que você tem que beber no dia, alertando você a cada quantidade de tempo para beber um copo de água.</Text>
            <Image source={copo} style={agua.copo}/>
            <TouchableHighlight 
                underlayColor='#114A4A' 
                style={agua.button} 
                onPress={()=>navigation.navigate('AguaForm')}
            >
                <Text style={agua.textButton}>Próximo</Text>
            </TouchableHighlight>
        </View>
    )
}