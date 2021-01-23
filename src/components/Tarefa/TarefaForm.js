import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {tarefaForm,pickerSelectStyles} from '../../styles/Tarefa'
import DateTimePicker from '@react-native-community/datetimepicker'
import RNPickerSelect from 'react-native-picker-select' ;

class TarefaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            Pagetitle: '',
            title:'',
            description: '',
            day: '',
            hour: '',
            time: '',
            priority:'',
            show: false,
            mode: 'date'
        }
    }

    render(){
        console.log(JSON.stringify(this.props.route))
        const params = this.props.route.params
        return (
            <View style={tarefaForm.container}>
                <Text style={tarefaForm.title}>{params.title}</Text>
                <Text style={tarefaForm.taskName}>{params.taskName}</Text>
                <View style={tarefaForm.form}>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Título</Text>
                        <TextInput placeholder='Digite o título da tarefa aqui' style={tarefaForm.input} onChangeText={value=>{ 
                            this.setState({title: value})
                        }}/>
                    </View>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Descrição</Text>
                        <TextInput placeholder='Digite a descrição da tarefa aqui' style={[tarefaForm.input,tarefaForm.description]} multiline={true} onChangeText={value => {
                            this.setState({description: value})
                        }}/>
                    </View>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Data de término</Text>
                        <TextInput placeholder='Selecione a data de término aqui' style={tarefaForm.input} onFocus={()=>{this.setState({show: true})}} value={this.state.time}/>
                        {this.state.show && (<DateTimePicker mode={this.state.mode} value={new Date()} onChange={(value,data)=> {
                                if(data === undefined){
                                    return;
                                }
                                if(this.state.mode === 'date'){
                                    this.setState({day: data.toString().slice(3,15)})
                                    this.setState({mode:'time'})
                                    return;
                                }
  
 
                                if(this.state.mode === 'time'){
                                    this.setState({hour: data.toString().slice(15,21)})
                                    this.setState({show:false})
                                    
                                }
                                
                                this.setState({time: `${this.state.day}${this.state.hour}`})
                                this.setState({mode:'date'})

                            }} is24Hour={true}  
                            />)}
                    </View>
                    <View style={tarefaForm.section}>
                        <Text style={tarefaForm.label}>Prioridade</Text>
                        <RNPickerSelect
                                useNativeAndroidPickerStyle={false}
                                placeholder={{
                                    label: 'Selecione a prioridade',
                                    value: null,
                                    color: '#9EA0A4',
                                }}
                                onValueChange={(value)=>{
                                    this.setState({priority: value})
                                }}
                                style={pickerSelectStyles}
                                items={[
                                    { label: 'Baixa', value: 'Baixa'},
                                    { label: 'Média', value: 'Media'},
                                    { label: 'Alta', value: 'Alta'},
                                ]}
                            />
                    </View>
                    <TouchableHighlight underlayColor={params.underlayColor} style={[tarefaForm.button,params.buttonColor]} onPress={()=>{
                        if(this.state.title === '' || this.state.description === '' || this.state.time === '' || this.state.priority === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(this.state.buttonText === ''){
                            alert('tarefa inserida com sucesso')
                        }else{
                            alert('tarefa x editada com sucesso')
                        }

                        this.props. navigation.navigate('TarefaMain')
                    }}>
                        <Text style={[tarefaForm.buttonText,params.buttonTextColor]}>{params.buttonText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default TarefaForm;