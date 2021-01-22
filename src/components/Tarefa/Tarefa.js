import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefa} from '../../styles/Tarefa'
import CheckBox from '@react-native-community/checkbox'

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
    render() {
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
                    <TouchableHighlight underlayColor='white' onPress={()=>{}}>
                        <Text style={[tarefa.lowerText,tarefa.textDetails]}>Detalhes</Text>
                    </TouchableHighlight> 
                </View>
            </View>
        )
    }
}

export default Tarefa