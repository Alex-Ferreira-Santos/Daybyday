import React,{Component} from 'react';
import {View,Text,TouchableHighlight,TextInput,ScrollView} from 'react-native'
import {alimentacaoForm} from '../../styles/Alimentacao'

class AlimentacaoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            ingredients: '',
            preparo: '',
            font: '',
            uri: ''
        }
    }

    insert(){

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
                        <TextInput placeholder='Digite a fonte da receita aqui' style={alimentacaoForm.input} onChange={value=>{
                            this.setState({font: value})
                        }}/>
                    </View>
                    <TouchableHighlight style={[alimentacaoForm.button,params.buttonColor]} underlayColor={params.underlayColor} onPress={()=>{
                        if(this.state.name === '' || this.state.ingredients === '' || this.state.preparo === '' || this.state.font === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }else{
                            alert('Receita X inserida com sucesso')
                            this.props.navigation.navigate('AlimentacaoMain')
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