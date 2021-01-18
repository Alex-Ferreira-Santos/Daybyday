import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {aguaOptions} from '../../styles/Agua'
 
class AguaOptions extends Component {
    render(){
        return(
            <View style={aguaOptions.container}>
                <Text style={aguaOptions.title}>A proxima notificação virá em x minutos</Text>
                <View style={aguaOptions.editar}>
                    <Text style={aguaOptions.subtitle}>Editar Notificação</Text>
                    <Text style={aguaOptions.data}>Litros atuais: x litros</Text>
                    <Text style={aguaOptions.data}>Horas atuais: x horas</Text>
                    <TouchableHighlight style={aguaOptions.editButton} underlayColor='#3A74A9' onPress={()=>this.props.navigation.navigate('AguaForm')}>
                        <Text style={aguaOptions.ButtonText}>Editar</Text>
                    </TouchableHighlight>
                </View>
                <View style={aguaOptions.excluir}>
                    <Text style={aguaOptions.subtitle}>Excluir notificação</Text>
                    <Text>Caso desative pode-se habilitar novamente</Text>
                    <TouchableHighlight style={aguaOptions.excluirButton} underlayColor='#BF4F4F' onPress={()=>{}}>
                        <Text style={aguaOptions.ButtonText}>Excluir</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default AguaOptions;