import React,{useState,useCallback} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import {massaFinal} from '../../styles/Massa'
import peso from '../../img/peso.png'
import Massa from '../../Database/massa'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {useNavigation, useFocusEffect} from '@react-navigation/native'

function MassaFinal(){
    const [IMC,setIMC] = useState('')
    const [litros,setLitros] = useState('')
    const navigation = useNavigation()

    async function Select(){
        const massa = new Massa
        await massa.select().then( value => {
            CalculaIMC(...value)
            CalculaLitros(...value)
        })  
    }

    function CalculaIMC(value){
        const IMC = value.peso / (value.altura * value.altura)
        setIMC(IMC.toFixed(1))
    }

    function CalculaLitros(value){
        const Litros = value.peso * 0.035
        setLitros(Litros.toFixed(1))
    }

    useFocusEffect(useCallback( () => {
        Select()
    },[]))

    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/2667178055';
    return (
        <View style={massaFinal.container}>
            <Text style={massaFinal.title}>Seu IMC é de <Text style={massaFinal.bold}>{IMC}</Text></Text>
            <Text style={massaFinal.agua}>A quantidade de água é de <Text style={massaFinal.bold}>{litros}</Text> litros</Text>
            <Text style={massaFinal.mensagem}>Não se preocupe, você pode refazer o teste quando quiser para ver se ganhou ou perdeu massa corporal nas ultimas vezes</Text>
            <Image source={peso} style={massaFinal.peso}/>

            <TouchableHighlight style={massaFinal.button} underlayColor='#4E5000' onPress={()=>navigation.navigate('MassaForm',{edit:true})}>
                <Text style={massaFinal.textButton}>Refazer o teste</Text>
            </TouchableHighlight>
                
            <TouchableHighlight style={[massaFinal.button,massaFinal.menuButton]} onPress={()=>navigation.navigate('Homepage')}>
                <Text style={massaFinal.textButton}>Voltar ao menu</Text>
            </TouchableHighlight>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.SMART_BANNER}
            />
        </View>
    )
}

export default MassaFinal