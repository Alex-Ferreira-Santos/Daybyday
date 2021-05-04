import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import AlimentacaoDB from '../../Database/alimetacao';
import {alimentacaoMain} from '../../styles/Alimentacao'

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

    async selectByIdTarefa(id){
        const alimentacao = new AlimentacaoDB 
        await alimentacao.SelectById(id).then(data => {
          this.atribuiValor(data,this.alimentacaoById)
        })
        this.setState({alimentacaoById: this.alimentacaoById})
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
        console.log(this.props.route.params)
        const params = this.props.route.params
        if(params === undefined){
            this.state.show = false
        }
        return ( 
            <View style={alimentacaoMain.container}>
                <Text style={alimentacaoMain.title}>Alimentação</Text>
                <Text style={alimentacaoMain.text}>Receitas disponíveis</Text>
                <ScrollView style={alimentacaoMain.dietas}>
                    {this.state.show && params.receitas.map(receita => (
                        <TouchableHighlight style={[alimentacaoMain.dieta,{backgroundColor: this.corAleatoria()}]} underlayColor='#B6E98F' onPress={async ()=>{
                            await this.selectByIdTarefa(receita.id)
                            this.props.navigation.navigate('AlimentacaoDieta',{receita: this.state.alimentacaoById[0]})
                            }} key={receita.id}>
                            <Text style={alimentacaoMain.dietaName}>{receita.nome}</Text>
                         </TouchableHighlight>
                    ))}
                </ScrollView>
                <TouchableHighlight style={alimentacaoMain.button} onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={alimentacaoMain.buttonText}>Voltar ao menu</Text>
                </TouchableHighlight>
               <TouchableHighlight style={alimentacaoMain.button} underlayColor='#1D470E' onPress={()=>this.props.navigation.navigate('AlimentacaoForm')}>
                    <Text style={alimentacaoMain.buttonText}>Inserir</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AlimentacaoMain;