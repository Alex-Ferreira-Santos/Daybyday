import React from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native'
import VisitedDB from '../../Database/visited';
import brocolis from '../../img/brocolis.png';
import {alimentacaoHome} from '../../styles/Alimentacao'
import {useNavigation} from '@react-navigation/native'

function AlimentacaoHome(){
    const navigation = useNavigation()

    function updateVisited(){
        const visited = new VisitedDB
        visited.update(true)
    }

    return (
        <View style={alimentacaoHome.container}>
            <Text style={alimentacaoHome.title}>Alimentação</Text>
            <Text style={alimentacaoHome.text}>Está sessão mostrará para você algumas receitas para que possa manter uma alimentação mais saúdavel lembrando que consultar um nutricionista é recomendado </Text>
            <Image source={brocolis} style={alimentacaoHome.brocolis}/>
            <TouchableHighlight 
                style={alimentacaoHome.button} 
                underlayColor='#1D470E' 
                onPress={()=>{
                    updateVisited()
                    navigation.navigate('AlimentacaoMain')
                }}
            >
                <Text style={alimentacaoHome.buttonText}>Próximo</Text>
            </TouchableHighlight>
        </View>
    )
}

export default AlimentacaoHome