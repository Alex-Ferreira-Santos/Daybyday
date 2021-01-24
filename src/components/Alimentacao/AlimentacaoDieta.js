import React,{Component} from 'react';
import { Linking } from 'react-native';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import {alimentacaoDieta} from '../../styles/Alimentacao'

class AlimentacaoDieta extends Component {
    render() {
        return(
            <View style={alimentacaoDieta.container}>
                <ScrollView style={alimentacaoDieta.main} contentContainerStyle={alimentacaoDieta.containerMain}>
                    <Text style={alimentacaoDieta.title}>Dieta da batata doce</Text>
                    <Text style={alimentacaoDieta.descricao}>A batata doce é uma fonte de carboidrato muito saudável e benéfica para a dieta, por isso tem consumida por quem quer emagrecer. Tanto que a dieta da batata doce tem se popularizado por aí. Entre as vantagens da batata doce está sua grande quantidade de amido resistente, uma fibra insolúvel que não é digerida pelo organismo e que retarda a absorção da gordura e da glicose.</Text>

                    <Text style={alimentacaoDieta.cardapio}>Cardápio</Text>

                    <Text style={alimentacaoDieta.opcao}><Text style={alimentacaoDieta.bold}>Opção 1:</Text> 4 rodelas de batata doce + 2 filés de frango grelhado com molho de tomate + salada verde crua + 1 fatia de melancia</Text>

                    <Text style={alimentacaoDieta.opcao}><Text style={alimentacaoDieta.bold}>Opção 2:</Text>O 2 rodelas de batata doce + 2 col. (sopa) de arroz integral + 1 posta de peixe cozido + salada de legumes refogados no azeite + 4 morangos</Text>

                    <Text style={alimentacaoDieta.opcao}><Text style={alimentacaoDieta.bold}>Opção 3:</Text> 2 rodelas de batata doce + Salada de atum, ovo cozido, acelga, tomate, cenoura ralada, berinjela e milho + 1 laranja.</Text>

                    <Text style={alimentacaoDieta.font}>Fonte: <Text style={[alimentacaoDieta.bold,alimentacaoDieta.link]} onPress={()=>Linking.openURL('https://www.minhavida.com.br/alimentacao/tudo-sobre/21232-dieta-da-batata-doce')}>https://www.minhavida.com.br</Text></Text>

                    <Text style={alimentacaoDieta.text}>Lembrando, sempre é recomendado consultar um nutricionista</Text>

                    <TouchableHighlight style={alimentacaoDieta.backButton} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoMain')}>
                        <Text style={alimentacaoDieta.buttonText}>Voltar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={alimentacaoDieta.editButton} underlayColor='#8D8918' onPress={()=>{}}>
                        <Text style={alimentacaoDieta.buttonText}>Editar</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={alimentacaoDieta.deleteButton} underlayColor='#8D1B1B' onPress={()=>{}}>
                        <Text style={alimentacaoDieta.buttonText}>Excluir</Text>
                    </TouchableHighlight>

                </ScrollView>
            </View>
        )
    }
}

export default AlimentacaoDieta