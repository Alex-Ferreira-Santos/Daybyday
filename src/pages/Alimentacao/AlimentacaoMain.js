import React from 'react';
import {View,Text,TouchableHighlight,ScrollView,FlatList} from 'react-native'
import {alimentacaoMain} from '../../styles/Alimentacao'
import Recipes from '../../Database/recipes.json'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {useNavigation} from '@react-navigation/native'

let lastColor = ''

function AlimentacaoMain(){
    const navigation = useNavigation()
    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/5484913085'; 

    function corAleatoria(){
        const cor = ['#BEF394','#88A563','#A1E150','#5B8B1D','#C3F680']
        let corSelecionada = cor[Math.floor(Math.random() * cor.length)]
        if(lastColor === corSelecionada){
            corSelecionada = cor[Math.floor(Math.random() * cor.length)]
        }
        lastColor = corSelecionada
        return corSelecionada
    }

    function renderItem({item}){
        return(
            <TouchableHighlight 
            style={[alimentacaoMain.dieta,{backgroundColor: corAleatoria()}]} 
            underlayColor='#B6E98F' 
            onPress={()=>{
                navigation.navigate('AlimentacaoDieta',{recipe: item})
            }} 
            >
                <Text style={alimentacaoMain.dietaName}>{item.nome}</Text>
            </TouchableHighlight>
        )
    }

    return ( 
        <View style={alimentacaoMain.container}>
            <Text style={alimentacaoMain.title}>Alimentação</Text>
            <Text style={alimentacaoMain.text}>Receitas disponíveis</Text>

            <FlatList
                data={Recipes}
                renderItem={renderItem}
                keyExtractor={(item) => String(item.id)}
                style={alimentacaoMain.dietas}
            />

            <TouchableHighlight 
                style={alimentacaoMain.button} 
                onPress={()=>navigation.navigate('Homepage')}
            >
                <Text style={alimentacaoMain.buttonText}>Voltar ao menu</Text>
            </TouchableHighlight>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.SMART_BANNER}
            />
        </View>
    )
}

export default AlimentacaoMain;