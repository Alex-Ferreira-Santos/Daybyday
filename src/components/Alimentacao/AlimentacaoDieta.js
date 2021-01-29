import React,{Component} from 'react';
import { Linking } from 'react-native';
import {View,Text,TouchableHighlight,ScrollView,Image} from 'react-native'
import {alimentacaoDieta} from '../../styles/Alimentacao'
import AlimentacaoPopup from './AlimentacaoPopup'

class AlimentacaoDieta extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            image: require('../../img/chips-assado-de-batata-doce-e-alecrim.png'),
            ingredients: [],
            link:''
        }
        this.goback = this.goback.bind(this)
        this.backToMain = this.backToMain.bind(this)
        this.separaIngredientes = this.separaIngredientes.bind(this)
        this.separaIngredientes()
        this.separaLink()
        this.buscaImagem()
    }
    goback(){
        this.setState({show: false})
    }
    backToMain(){
        this.props.navigation.navigate('AlimentacaoMain')
    }
    separaIngredientes(){
        const params = this.props.route.params
        this.state.ingredients = params.receita.ingredientes.split(',')
    }
    separaLink(){
        const params = this.props.route.params
        const link = params.receita.fonte.split('/',3)
        this.state.link = link.join('/')
    }
    buscaImagem(){
        const params = this.props.route.params
        let brocolis = 'brocolis.png'
        console.log(params.receita.imagem)
        this.state.image = require(`../../img/${brocolis}`)
    }
    // renderizar imagens dinamicamente
    render() {
        const params = this.props.route.params
        return(
            <View style={alimentacaoDieta.container}>
                <ScrollView style={alimentacaoDieta.main} contentContainerStyle={alimentacaoDieta.containerMain}>
                    <Text style={alimentacaoDieta.title}>{params.receita.nome}</Text>

                    <Image source={this.state.image} style={alimentacaoDieta.image}/>

                    <Text style={alimentacaoDieta.subtitle}>Ingredientes</Text>
                    <View style={alimentacaoDieta.ingredients}>
                        {this.state.ingredients.map( ingredients => (
                            <Text style={alimentacaoDieta.bold} key={ingredients}>{'\u2022'} {ingredients}</Text>
                        ))}
                    </View>

                    <Text style={alimentacaoDieta.subtitle}>Modo de preparo</Text>

                    <Text style={alimentacaoDieta.preparo}>{params.receita.modoDePreparo}</Text>

                    <Text style={alimentacaoDieta.font}>Fonte: <Text style={[alimentacaoDieta.bold,alimentacaoDieta.link]} onPress={()=>Linking.openURL(params.receita.fonte)}>{this.state.link}</Text></Text>

                    <Text style={alimentacaoDieta.text}>Lembrando, sempre é recomendado consultar um nutricionista</Text>

                    <TouchableHighlight style={alimentacaoDieta.backButton} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoMain')}>
                        <Text style={alimentacaoDieta.buttonText}>Voltar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={alimentacaoDieta.editButton} underlayColor='#8D8918' onPress={()=>this.props.navigation.navigate('AlimentacaoForm',{title: 'Editar a receita', receita: params.receita.nome, buttonColor: {backgroundColor: '#A59F1A'},buttonText:'Editar',underlayColor:'#8D8918',id:params.receita.id})}>
                        <Text style={alimentacaoDieta.buttonText}>Editar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={alimentacaoDieta.deleteButton} underlayColor='#8D1B1B' onPress={()=>{this.setState({show: true})}}>
                        <Text style={alimentacaoDieta.buttonText}>Excluir</Text>
                    </TouchableHighlight>

                </ScrollView>
                {this.state.show && (<AlimentacaoPopup goback={this.goback} backToMain={this.backToMain}/>)}
            </View>
        )
    }
}

export default AlimentacaoDieta