import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import {alimentacaoMain} from '../../styles/Alimentacao'

class AlimentacaoMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            lastColor:''
        }
        this.corAleatoria = this.corAleatoria.bind(this)
    }

    corAleatoria(){
        const cor = ['#BEF394','#88A563','#A1E150','#5B8B1D','#C3F680']
        let corSelecionada = cor[Math.floor(Math.random() * cor.length)]
        if(this.state.lastColor === corSelecionada){
            corSelecionada = cor[Math.floor(Math.random() * cor.length)]
        }
        this.state.lastColor = corSelecionada
        return corSelecionada
    }
    render(){ 
        return ( 
            <View style={alimentacaoMain.container}>
                <Text style={alimentacaoMain.title}>Alimentação</Text>
                <Text style={alimentacaoMain.text}>Receitas disponíveis</Text>
                <ScrollView style={alimentacaoMain.dietas}>
                    <TouchableHighlight style={[alimentacaoMain.dieta,{backgroundColor: this.corAleatoria()}]} underlayColor='#B6E98F' onPress={()=>this.props.navigation.navigate('AlimentacaoDieta')}>
                        <Text style={alimentacaoMain.dietaName}>Chips assado de batata doce e alecrim</Text>
                    </TouchableHighlight>
                </ScrollView>
                <TouchableHighlight style={alimentacaoMain.button} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoForm')}>
                    <Text style={alimentacaoMain.buttonText}>Inserir</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AlimentacaoMain;