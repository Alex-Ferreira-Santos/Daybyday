import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import {alimentacaoMain} from '../../styles/Alimentacao'
import Recipes from '../../Database/recipes.json'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'

class AlimentacaoMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            lastColor:'',
            alimentacao: [],
            alimentacaoById: [],
            show: true,
        }
        this.alimentacao = []
        this.alimentacaoById = []
        this.corAleatoria = this.corAleatoria.bind(this)
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
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
        const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/5484913085'; 
        return ( 
            <View style={alimentacaoMain.container}>
                <Text style={alimentacaoMain.title}>Alimentação</Text>
                <Text style={alimentacaoMain.text}>Receitas disponíveis</Text>
                <ScrollView style={alimentacaoMain.dietas} showsVerticalScrollIndicator={false}>
                    {Recipes.map( recipes => (
                        <TouchableHighlight style={[alimentacaoMain.dieta,{backgroundColor: this.corAleatoria()}]} underlayColor='#B6E98F' onPress={()=>{
                            this.props.navigation.navigate('AlimentacaoDieta',{recipe: recipes})
                            }} key={recipes.id}>
                            <Text style={alimentacaoMain.dietaName}>{recipes.nome}</Text>
                         </TouchableHighlight>
                    ))}
                </ScrollView>
                <TouchableHighlight style={alimentacaoMain.button} onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={alimentacaoMain.buttonText}>Voltar ao menu</Text>
                </TouchableHighlight>
                <BannerAd
                    unitId={'ca-app-pub-8189428112004694/5484913085'}
                    size={BannerAdSize.SMART_BANNER}
                />
            </View>
        )
    }
}

export default AlimentacaoMain;