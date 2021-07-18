import React,{useEffect,useState} from 'react';
import { Linking } from 'react-native';
import {View,Text,TouchableHighlight,ScrollView,Image} from 'react-native'
import {alimentacaoDieta} from '../../styles/Alimentacao'
import {useRoute,useNavigation} from '@react-navigation/native'

function AlimentacaoDieta(){
    const [link,setLink] = useState('')
    const {params} = useRoute()
    const navigation = useNavigation()

    function separaLink(){
        const linkSplitted = params.recipe.fonte.split('/',3)
        setLink(linkSplitted.join('/'))
    }

    useEffect(()=>{
        separaLink()
    },[])

    return(
        <View style={alimentacaoDieta.container}>
            <ScrollView 
                style={alimentacaoDieta.main} 
                contentContainerStyle={alimentacaoDieta.containerMain}
                showsVerticalScrollIndicator={false}
            >
                <Text style={alimentacaoDieta.title}>{params.recipe.nome}</Text>

                <Image source={{uri:params.recipe.image}} style={alimentacaoDieta.image} resizeMode='cover'/>

                <Text style={alimentacaoDieta.subtitle}>Ingredientes</Text>
                <View style={alimentacaoDieta.ingredients}>
                    {params.recipe.ingredientes.map( ingredients => (
                        <Text style={alimentacaoDieta.bold} key={ingredients}>
                            {'\u2022'} {ingredients}
                        </Text>
                    ))}
                </View>

                <Text style={alimentacaoDieta.subtitle}>Modo de preparo</Text>

                <Text style={alimentacaoDieta.preparo}>{params.recipe.modoDePreparo}</Text>

                <Text style={alimentacaoDieta.font}>Fonte: 
                    <Text 
                        style={[alimentacaoDieta.bold,alimentacaoDieta.link]} 
                        onPress={()=>Linking.openURL(params.recipe.fonte)}
                    >
                        {link}
                    </Text>
                </Text>

                <Text style={alimentacaoDieta.text}>Lembrando, sempre é recomendado consultar um nutricionista</Text>

                <TouchableHighlight 
                    style={alimentacaoDieta.backButton} 
                    underlayColor='#1D470E' 
                    onPress={()=>navigation.navigate('AlimentacaoMain')}
                >
                    <Text style={alimentacaoDieta.buttonText}>Voltar</Text>
                </TouchableHighlight>

            </ScrollView>
        </View>
    )
}

export default AlimentacaoDieta