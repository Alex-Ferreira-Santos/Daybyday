import React,{Component} from 'react';
import {View,Text,TouchableHighlight,TextInput,ScrollView} from 'react-native'
import {alimentacaoForm} from '../../styles/Alimentacao'
import AlimentacaoDB from '../../Database/alimetacao'
import Food from '../../Model/food'

class AlimentacaoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            ingredients: '',
            preparo: '',
            font: '',
            uri: '',
            alimentacao: [],
        }
        this.alimentacao = []
    }

    async insert(nome,imagem,ingredientes,modoDePreparo,fonte){
        const alimentacao = new AlimentacaoDB
        const food = new Food(nome,imagem,ingredientes,modoDePreparo,fonte)
        await alimentacao.insert(food)
    }

    async update(nome,imagem,ingredientes,modoDePreparo,fonte,id){
        const alimentacao = new AlimentacaoDB
        const food = new Food(nome,imagem,ingredientes,modoDePreparo,fonte)
        await alimentacao.update(food,id)
    }  

    async select(){
        const alimentacao = new AlimentacaoDB
        await alimentacao.select().then( value => {
            this.atribuiValor(value,this.alimentacao)
        })
        this.setState({alimentacao:this.alimentacao})
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    render() {
        const params = this.props.route.params
        return(
            <ScrollView style={alimentacaoForm.container} contentContainerStyle={alimentacaoForm.scrollContainer}>
                <Text style={alimentacaoForm.title}>{params.title}</Text>
                <Text style={alimentacaoForm.name}>{params.receita}</Text>
                <View style={alimentacaoForm.main}>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Nome da receita</Text>
                        <TextInput placeholder='Digite o nome da receita aqui' style={alimentacaoForm.input} onChangeText={value=>{
                            this.setState({name: value})
                        }}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Imagem receita</Text>
                        <TextInput placeholder='Digite o caminho da imagem aqui' style={alimentacaoForm.input} onChangeText={value=>{
                            this.setState({uri: value})
                        }}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Ingredientes da receita</Text>
                        <Text>Separe os ingredientes por vírgula</Text>
                        <TextInput placeholder='Digite os ingredientes da receita aqui' style={[alimentacaoForm.input, alimentacaoForm.biggerInput]} multiline={true} onChangeText={value=>{
                            this.setState({ingredients: value})
                        }}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Modo de preparo</Text>
                        <TextInput placeholder='Digite o modo de preparo aqui' style={[alimentacaoForm.input,alimentacaoForm.biggerInput]} multiline={true} onChangeText={value=>{
                            this.setState({preparo: value})
                        }}/>
                    </View>
                    <View style={alimentacaoForm.section}>
                        <Text style={alimentacaoForm.label}>Fonte da receita</Text>
                        <TextInput placeholder='Digite a fonte da receita aqui' style={alimentacaoForm.input} onChangeText={value=>{
                            this.setState({font: value})
                        }}/>
                    </View>
                    <TouchableHighlight style={[alimentacaoForm.button,params.buttonColor]} underlayColor={params.underlayColor} onPress={async ()=>{
                        if(this.state.name === '' || this.state.uri === '' || this.state.ingredients === '' || this.state.preparo === '' || this.state.font === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }else{
                            if(params.buttonText === 'Editar'){
                                await this.update(this.state.name,this.state.uri,this.state.ingredients,this.state.preparo,this.state.font,params.id)
                                alert(`Receita ${this.state.name} editada com sucesso`)
                            }else{
                                await this.insert(this.state.name,this.state.uri,this.state.ingredients,this.state.preparo,this.state.font)
                                alert(`Receita ${this.state.name} inserida com sucesso`)
                            }
                            await this.select()
                            this.props.navigation.navigate('AlimentacaoMain',{receitas:this.state.alimentacao[0]})
                        }
                    }}>
                        <Text style={alimentacaoForm.buttonText}>{params.buttonText}</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

export default AlimentacaoForm;