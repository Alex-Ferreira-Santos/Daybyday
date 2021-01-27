import React,{Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native'
import {massaData} from '../../styles/Massa'
import Massa from '../../Database/massa'

class MassaData extends Component{
    constructor(props){
        super(props)
        this.state = {
            massa:[],
            IMC: '',
            litros: '',
            categoria: '',
            description: '',
        }
        this.massa = []
        this.select()
    }

    async select(){
        const massa = new Massa
        await massa.select().then( value => {
            this.atribuiValor(value,this.massa)
        })
        this.setState({massa:this.massa})
        this.CalculaIMC()
        this.CalculaLitros()
        this.CustomFrase()
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    CalculaIMC(){
        const IMC = this.state.massa[0][0].peso / (this.state.massa[0][0].altura * this.state.massa[0][0].altura)
        this.setState({IMC:IMC.toFixed(1)})
    }

    CalculaLitros(){
        const Litros = this.state.massa[0][0].peso * 0.035
        this.setState({litros: Litros.toFixed(1)})
    }

    CustomFrase(){
        if(this.state.IMC <= 18.5){
            this.setState({categoria: 'Magreza'})
            this.setState({description: ', você está abaixo do peso ideal, recomendamos que você busque uma dieta focada em ganho de peso, ficar muito abaixo do peso pode ser perigoso para sua saúde'})
        }else if(this.state.IMC > 18.5 && this.state.IMC < 24.9){
            this.setState({categoria: 'Normal'})
            this.setState({description: ', parabéns você está no peso ideal, mas fique de olho para se manter nesse estado ideal'})
        }else if(this.state.IMC > 25 && this.state.IMC < 29.9){
            this.setState({categoria: 'Sobrepeso'})
            this.setState({description: ', você está um pouco acima do peso da média recomendada, para diminuir isto você pode fazer uma dieta que possa regular sua alimentação'})
        }else if(this.state.IMC > 30 && this.state.IMC < 39.9){
            this.setState({categoria: 'Obesidade'})
            this.setState({description: ', você está acima do peso ideal, recomendamos que faça dietas e busque fazer exercícios com acompanhamento profissional, estar com obesidade pode ser perigo para sua saúde então não ignore isso'})
        }else if(this.state.IMC >= 40){
            this.setState({categoria: 'Obesidade Grave'})
            this.setState({description: ', você está muito acima do peso ideal, isto é um grande perigo para sua saúde, recomendamos que você busque ajuda médica imediatamente para te ajudar a sair desse estado'})
        }
    }

    render(){
        if(this.state.massa[0] === undefined){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'#DFCD2A'}}>
                    <Text style={{fontSize: 50}}>Loading...</Text>
                </View>
            )
        }
        return (
            <View style={massaData.container}>
                <View style={massaData.data}>
                    <Text style={massaData.mainData}>Seu IMC é de:</Text>
                    <Text style={[massaData.mainData,massaData.bold]}>{this.state.IMC}</Text>
                </View>
                <Text style={massaData.estado}>Sua classificação é:</Text>
                <Text style={massaData.customText}><Text style={massaData.bold}>{this.state.categoria}</Text>{this.state.description}</Text>
                <Text style={massaData.textLitros}>Quantidade ideal de água por dia: </Text>
                <Text style={massaData.textLitros}><Text style={massaData.bold}>{this.state.litros}</Text> litros</Text>
                <TouchableHighlight style={massaData.button} underlayColor='#4E5000' onPress={()=>this.props.navigation.navigate('MassaFinal')}>
                    <Text style={massaData.textButton}>Próximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default MassaData