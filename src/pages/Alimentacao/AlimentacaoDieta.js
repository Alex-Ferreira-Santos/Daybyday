import React,{Component,useState} from 'react';
import { Linking } from 'react-native';
import {View,Text,TouchableHighlight,ScrollView,Image} from 'react-native'
import {alimentacaoDieta} from '../../styles/Alimentacao'
import {useRoute} from '@react-navigation/native'

function AlimentacaoDiete(){
    const [link,setLink] = useState('')
    const {params} = useRoute()

    function separaLink(){

        const params = this.props.route.params
        const link = params.recipe.fonte.split('/',3)
        this.state.link = link.join('/')
    }

    return(
        <View style={alimentacaoDieta.container}>
            <ScrollView style={alimentacaoDieta.main} contentContainerStyle={alimentacaoDieta.containerMain}showsVerticalScrollIndicator={false}>
                <Text style={alimentacaoDieta.title}>{params.recipe.nome}</Text>

                <Image source={{uri:params.recipe.image}} style={alimentacaoDieta.image} resizeMode='cover'/>

                <Text style={alimentacaoDieta.subtitle}>Ingredientes</Text>
                <View style={alimentacaoDieta.ingredients}>
                    {params.recipe.ingredientes.map( ingredients => (
                        <Text style={alimentacaoDieta.bold} key={ingredients}>{'\u2022'} {ingredients}</Text>
                    ))}
                </View>

                <Text style={alimentacaoDieta.subtitle}>Modo de preparo</Text>

                <Text style={alimentacaoDieta.preparo}>{params.recipe.modoDePreparo}</Text>

                <Text style={alimentacaoDieta.font}>Fonte: <Text style={[alimentacaoDieta.bold,alimentacaoDieta.link]} onPress={()=>Linking.openURL(params.recipe.fonte)}>{link}</Text></Text>

                <Text style={alimentacaoDieta.text}>Lembrando, sempre é recomendado consultar um nutricionista</Text>

                <TouchableHighlight style={alimentacaoDieta.backButton} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoMain')}>
                    <Text style={alimentacaoDieta.buttonText}>Voltar</Text>
                </TouchableHighlight>

            </ScrollView>
        </View>
    )
}

class AlimentacaoDieta extends Component {
    constructor(props){
        super(props)
        this.state = {
            link:'',
        }
        this.alimentacao = []
        this.separaLink()
    }
    separaLink(){
        const params = this.props.route.params
        const link = params.recipe.fonte.split('/',3)
        this.state.link = link.join('/')
    }

    render() {
        const params = this.props.route.params
        return(
            <View style={alimentacaoDieta.container}>
                <ScrollView style={alimentacaoDieta.main} contentContainerStyle={alimentacaoDieta.containerMain}showsVerticalScrollIndicator={false}>
                    <Text style={alimentacaoDieta.title}>{params.recipe.nome}</Text>

                    <Image source={{uri:params.recipe.image}} style={alimentacaoDieta.image} resizeMode='cover'/>

                    <Text style={alimentacaoDieta.subtitle}>Ingredientes</Text>
                    <View style={alimentacaoDieta.ingredients}>
                        {params.recipe.ingredientes.map( ingredients => (
                            <Text style={alimentacaoDieta.bold} key={ingredients}>{'\u2022'} {ingredients}</Text>
                        ))}
                    </View>

                    <Text style={alimentacaoDieta.subtitle}>Modo de preparo</Text>

                    <Text style={alimentacaoDieta.preparo}>{params.recipe.modoDePreparo}</Text>

                    <Text style={alimentacaoDieta.font}>Fonte: <Text style={[alimentacaoDieta.bold,alimentacaoDieta.link]} onPress={()=>Linking.openURL(params.recipe.fonte)}>{this.state.link}</Text></Text>

                    <Text style={alimentacaoDieta.text}>Lembrando, sempre é recomendado consultar um nutricionista</Text>

                    <TouchableHighlight style={alimentacaoDieta.backButton} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoMain')}>
                        <Text style={alimentacaoDieta.buttonText}>Voltar</Text>
                    </TouchableHighlight>

                </ScrollView>
            </View>
        )
    }
}

export default AlimentacaoDieta