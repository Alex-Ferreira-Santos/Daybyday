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
        console.log('==========================')
        console.log(this.state.massa[0][0])
        console.log('==========================')
        this.setState({IMC:IMC.toFixed(2)})
    }

    CalculaLitros(){
        const Litros = this.state.massa[0][0].peso * 0.035
        this.setState({litros: Litros})
    }

    CustomFrase(){
        if(this.state.IMC){
            //continuar com as frases e categoria
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
                <Text style={massaData.estado}>Isto quer dizer que você está:</Text>
                <Text style={massaData.customText}><Text style={massaData.bold}>Sobrepeso</Text>, você está um pouco acima do peso da média recomendada, para diminuir isto você pode fazer uma dieta que possa regular sua alimentação</Text>
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