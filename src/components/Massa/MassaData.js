import React,{Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native'
import {massaData} from '../../styles/Massa'

class MassaData extends Component{
    render(){
        return (
            <View style={massaData.container}>
                <View style={massaData.data}>
                    <Text style={massaData.mainData}>Seu IMC é de:</Text>
                    <Text style={[massaData.mainData,massaData.bold]}>23.76</Text>
                </View>
                <Text style={massaData.estado}>Isto quer dizer que você está:</Text>
                <Text style={massaData.customText}><Text style={massaData.bold}>Sobrepeso</Text>, você está um pouco acima do peso da média recomendada, para diminuir isto você pode fazer uma dieta que possa regular sua alimentação</Text>
                <Text style={massaData.textLitros}>Quantidade ideal de água por dia: </Text>
                <Text style={massaData.textLitros}><Text style={massaData.bold}>2.1</Text> litros</Text>
                <TouchableHighlight style={massaData.button} underlayColor='#4E5000' onPress={()=>this.props.navigation.navigate('MassaFinal')}>
                    <Text style={massaData.textButton}>Próximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default MassaData