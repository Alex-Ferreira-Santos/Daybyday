import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefaDetails} from '../../styles/Tarefa'
import TarefaPopup from './TarefaPopup'

class TarefaDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: '',
            textLate: '',
            checked: '',
            buttonText: 'Concluir',
            show: false,
        }
        this.hide = this.hide.bind(this)
        this.goback = this.goback.bind(this)
    }

    hide(){
        this.setState({show: false})
    }

    goback(){
        this.props.navigation.navigate('TarefaMain')
    }

    render() {
        return (
            <View style={tarefaDetails.container}>
                <Text style={tarefaDetails.pageTitle}>Detalhes</Text>
                <View style={[tarefaDetails.main,this.state.done]}>
                    <Text style={tarefaDetails.title}>Estudar para prova</Text>
                    <Text style={tarefaDetails.category}>Descrição</Text>
                    <Text style={tarefaDetails.text}>copiar os a materia para poder estudar para a prova de matematica do dia 29</Text>
                    <Text style={tarefaDetails.category}>Data de término</Text>
                    <Text style={[tarefaDetails.text,this.state.textLate]}>Jan 22 2021 14:00</Text>
                    <Text style={tarefaDetails.category}>Prioridade</Text>
                    <Text style={tarefaDetails.text}>Média</Text>
                    <TouchableHighlight style={[tarefaDetails.concluir,this.state.checked]} underlayColor='#367720' onPress={()=>{
                        if(this.state.buttonText === 'Concluir'){
                            this.setState({done: tarefaDetails.done})
                            this.setState({checked: tarefaDetails.unChecked})
                            this.setState({buttonText: 'Desfazer'})
                        }else{
                            this.setState({done: ''})
                            this.setState({checked: ''})
                            this.setState({buttonText: 'Concluir'})
                        }      
                    }}>
                        <Text style={tarefaDetails.buttonText}>{this.state.buttonText}</Text>
                    </TouchableHighlight>
                    <View style={tarefaDetails.buttons}>
                        <TouchableHighlight style={tarefaDetails.editar} underlayColor='#B6B916' onPress={()=>this.props.navigation.navigate('TarefaForm')}>
                            <Text style={tarefaDetails.buttonText}>Editar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={tarefaDetails.excluir} underlayColor='#AA0E0E' onPress={()=>{this.setState({show: true})}}>
                            <Text style={tarefaDetails.excludeButtonText}>Excluir</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                {this.state.show && (<TarefaPopup hide={this.hide} goback={this.goback}/>)}
            </View>
        )
    }
}

export default TarefaDetail