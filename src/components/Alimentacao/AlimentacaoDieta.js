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
            image: require('../../img/chips-assado-de-batata-doce-e-alecrim.png')
        }
        this.goback = this.goback.bind(this)
        this.backToMain = this.backToMain.bind(this)
    }
    goback(){
        this.setState({show: false})
    }
    backToMain(){
        this.props.navigation.navigate('AlimentacaoMain')
    }
    render() {
        return(
            <View style={alimentacaoDieta.container}>
                <ScrollView style={alimentacaoDieta.main} contentContainerStyle={alimentacaoDieta.containerMain}>
                    <Text style={alimentacaoDieta.title}>Chips assado de batata doce e alecrim</Text>

                    <Image source={this.state.image} style={alimentacaoDieta.image}/>

                    <Text style={alimentacaoDieta.subtitle}>Ingredientes</Text>
                    <View style={alimentacaoDieta.ingredients}>
                        <Text style={alimentacaoDieta.bold}>{'\u2022'} 3 batatas-doces</Text>
                        <Text style={alimentacaoDieta.bold}>{'\u2022'} Azeite de oliva</Text>
                        <Text style={alimentacaoDieta.bold}>{'\u2022'} Sal e pimenta a gosto</Text>
                        <Text style={alimentacaoDieta.bold}>{'\u2022'} Alecrim a gosto</Text>
                    </View>

                    <Text style={alimentacaoDieta.subtitle}>Modo de preparo</Text>

                    <Text style={alimentacaoDieta.preparo}>Lave as batatas. Com o auxílio de um mandolin, corte-as, com casca, em rodelas bem fininhas. Ajeite as fatias em uma assadeira coberta com silpat ou papel-manteiga e untada com azeite. Tempere com sal e pimenta, regue com um fio de azeite e complete com o alecrim. Leve ao forno preaquecido a 200° por 20 minutos ou até as fatias ficarem douradas. O tempo pode variar de um forno para outro. Quanto mais fininhas forem as fatias, mais rápido elas assam. Retire do forno e deixe esfriar uns cinco minutinhos antes de servir porque assim elas ficam bem crocantes.</Text>

                    <Text style={alimentacaoDieta.font}>Fonte: <Text style={[alimentacaoDieta.bold,alimentacaoDieta.link]} onPress={()=>Linking.openURL('https://www.receiteria.com.br/receita/chips-assado-de-batata-doce-e-alecrim/')}>https://www.receiteria.com.br</Text></Text>

                    <Text style={alimentacaoDieta.text}>Lembrando, sempre é recomendado consultar um nutricionista</Text>

                    <TouchableHighlight style={alimentacaoDieta.backButton} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoMain')}>
                        <Text style={alimentacaoDieta.buttonText}>Voltar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={alimentacaoDieta.editButton} underlayColor='#8D8918' onPress={()=>this.props.navigation.navigate('AlimentacaoForm',{title: 'Editar a receita', receita: 'Chips assado de batata doce e alecrim', buttonColor: {backgroundColor: '#A59F1A'},buttonText:'Editar',underlayColor:'#8D8918'})}>
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