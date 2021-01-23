import React,{Component} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native'
import brocolis from '../../img/brocolis.png';
import {alimentacaoHome} from '../../styles/Alimentacao'

class AlimentacaoHome extends Component {
    render(){
        return (
            <View>
                <Text>Alimentação</Text>
                <Text>Está sessão mostrará para você algumas dietas e receitas para que  possa manter uma alimentação  mais saúdavel lembrando que consultar um nutricionista é recomendado </Text>
                <Image source={brocolis}/>
                <TouchableHighlight>
                    <Text>Próximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AlimentacaoHome