import React from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import { aguaSuccessful } from '../../styles/Agua';
import copo from '../../img/copo-de-agua.png'
import {useNavigation} from '@react-navigation/native'

export function AguaSuccessful(){
    const navigation = useNavigation()
    return(
        <View style={aguaSuccessful.container}>
            <Text style={aguaSuccessful.title}>Pronto</Text>
            <Text style={aguaSuccessful.notification}>Você irá receber uma notificação a cada 1 hora para lembra-lo de beber água</Text>
            <Image source={copo} style={aguaSuccessful.copo}/>
            <TouchableHighlight style={aguaSuccessful.button} underlayColor='#114A4A' onPress={()=>{
                navigation.navigate('AguaOptions',{reload:true})
            }}>
                <Text style={aguaSuccessful.textButton}>Seguir</Text>
            </TouchableHighlight>
        </View>
    )
}
