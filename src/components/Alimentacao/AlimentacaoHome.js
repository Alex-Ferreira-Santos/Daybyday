import React,{Component} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native'
import brocolis from '../../img/brocolis.png';
import {alimentacaoHome} from '../../styles/Alimentacao'

class AlimentacaoHome extends Component {
    render(){
        const params = this.props.route.params
        console.log(params)
        return (
            <View style={alimentacaoHome.container}>
                <Text style={alimentacaoHome.title}>Alimentação</Text>
                <Text style={alimentacaoHome.text}>Está sessão mostrará para você algumas receitas para que possa manter uma alimentação  mais saúdavel lembrando que consultar um nutricionista é recomendado </Text>
                <Image source={brocolis} style={alimentacaoHome.brocolis}/>
                <TouchableHighlight style={alimentacaoHome.button} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoMain',{adm:params.adm,receitas:params.receitas})}>
                    <Text style={alimentacaoHome.buttonText}>Próximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AlimentacaoHome