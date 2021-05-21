import React,{Component} from 'react';
import {View,Text,TouchableHighlight,Image} from 'react-native'
import {tarefaHome} from '../../styles/Tarefa'
import lista from '../../img/lista-de-tarefas.png'

class TarefaHome extends Component {
    render() {
        return(
            <View style={tarefaHome.container}>
                <Text style={tarefaHome.title}>Organizador de tarefas</Text>
                <Text style={tarefaHome.text}>Está sessão contem um organizador de tarefas, para que você possa  colocar seus afazeres e o app vai te notificar quando estiver perto de acabar o tempo para a conclusão da tarefa inserida</Text>
                <Image source={lista} style={tarefaHome.img}/>
                <TouchableHighlight style={tarefaHome.button} underlayColor='#5B0000' onPress={()=>this.props.navigation.navigate('TarefaMain',{reload:true})}>
                    <Text style={tarefaHome.buttonText}>Próximo</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default TarefaHome