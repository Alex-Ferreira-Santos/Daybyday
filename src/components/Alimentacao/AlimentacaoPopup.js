import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {alimentacaoPopup} from '../../styles/Alimentacao'

class AlimentacaoPopup extends Component {
    render() {
        return(
            <View style={alimentacaoPopup.container}>
                <View style={alimentacaoPopup.main}>
                    <Text style={alimentacaoPopup.warning}>Atenção!!! excluir uma tarefa é irreversivel</Text>
                    <Text style={alimentacaoPopup.text}>Tem certeza que deseja excluir a tarefa de</Text>
                    <Text style={alimentacaoPopup.name}>Descrição da tarefa</Text>
                    <View style={alimentacaoPopup.buttons}>
                        <TouchableHighlight style={alimentacaoPopup.backButton} underlayColor='#9E9E9E' onPress={()=>{
                            this.props.goback()
                        }}>
                            <Text style={alimentacaoPopup.backButtonText}>Voltar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={alimentacaoPopup.excludeButton} underlayColor='#BC1B1B' onPress={()=>{
                            alert('Tarefa X excluida com sucesso')
                            this.props.goback() 
                            this.props.backToMain()
                        }}>
                            <Text style={alimentacaoPopup.excludeButtonText}>Excluir</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default AlimentacaoPopup