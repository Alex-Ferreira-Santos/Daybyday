import React,{Component} from 'react';
import {View,Text,Image,TouchableHighlight} from 'react-native'
import {massaFinal} from '../../styles/Massa'
import peso from '../../img/peso.png'
import Massa from '../../Database/massa'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'

class MassaFinal extends Component {

    constructor(props){
        super(props)
        this.state = {
            massa: [],
            IMC:'',
            Litros:'',
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
        this.setState({Litros: Litros.toFixed(1)})
    }

    render(){
        const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/2667178055';
        return (
            <View style={massaFinal.container}>
                <Text style={massaFinal.title}>Seu IMC é de <Text style={massaFinal.bold}>{this.state.IMC}</Text></Text>
                <Text style={massaFinal.agua}>A quantidade de água é de <Text style={massaFinal.bold}>{this.state.Litros}</Text> litros</Text>
                <Text style={massaFinal.mensagem}>Não se preocupe, você pode refazer o teste quando quiser para ver se ganhou ou perdeu massa corporal nas ultimas vezes</Text>
                <Image source={peso} style={massaFinal.peso}/>

                <TouchableHighlight style={massaFinal.button} underlayColor='#4E5000' onPress={()=>this.props.navigation.navigate('MassaForm',{edit:true})}>
                    <Text style={massaFinal.textButton}>Refazer o teste</Text>
                </TouchableHighlight>
                
                <TouchableHighlight style={[massaFinal.button,massaFinal.menuButton]} onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={massaFinal.textButton}>Voltar ao menu</Text>
                </TouchableHighlight>
                <BannerAd
                    unitId={'ca-app-pub-8189428112004694/2667178055'}
                    size={BannerAdSize.SMART_BANNER}
                />
            </View>
        )
    }
}

export default MassaFinal