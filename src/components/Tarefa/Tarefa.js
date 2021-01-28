import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefa} from '../../styles/Tarefa'
import CheckBox from '@react-native-community/checkbox'
import TarefaDB from '../../Database/tarefa';

class Tarefa extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            done: '',
            late: '',
            textLate: '',
        }
    }

    updateCheck(){
        const tarefa = new TarefaDB
        tarefa.updateConcluido(!this.state.checked,this.props.id)
    }

    render() {
        if(this.props.data < Date().slice(3,21)){
            this.state.late = tarefa.late
            if(this.state.checked){
                this.state.textLate = {color: 'black'}
            }else{
                this.state.textLate = tarefa.textLate
            }   
        }
        if(this.props.concluido == 'true'){
            this.state.checked = true
            this.state.done = tarefa.done
        }else{
            this.state.checked = false
        }
        // tem que modificar a check box
        return(
            <View style={[tarefa.container,this.state.late,this.state.done]}>
                <View style={tarefa.box}>
                    <Text style={tarefa.lowerText}><CheckBox disabled={false} value={this.state.checked} onValueChange={value=>{
                        if(value){
                            this.setState({done: tarefa.done})
                        }else{
                            this.setState({done: ''})
                        }
                        this.setState({checked: value})
                        this.updateCheck()
                        
                    }}/></Text>
                </View>
                <View style={[tarefa.others,tarefa.description]}>
                    <Text style={tarefa.lowerText}>{this.props.descricao}</Text>
                </View>
                <View style={[tarefa.others,tarefa.date]}>
                    <Text style={[tarefa.lowerText,this.state.textLate]}>{this.props.data}</Text>
                </View>
                <View style={[tarefa.others,tarefa.priority]}>
                    <Text style={tarefa.lowerText}>{this.props.prioridade}</Text>
                </View>
                <View style={tarefa.detail}>
                    <TouchableHighlight underlayColor='white' onPress={()=>this.props.go(this.props.id)}>
                        <Text style={[tarefa.lowerText,tarefa.textDetails]}>Detalhes</Text>
                    </TouchableHighlight> 
                </View>
            </View>
        )
    }
}

export default Tarefa