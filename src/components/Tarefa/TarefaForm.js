import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {tarefaForm,pickerSelectStyles} from '../../styles/Tarefa'
import DateTimePicker from '@react-native-community/datetimepicker'
import RNPickerSelect from 'react-native-picker-select' ;
import Task from '../../Model/task'
import TarefaDB from '../../Database/tarefa';
import {notificationManager} from '../../services/NotificationManager'

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
            mode: 'date',
            tarefa: [],
            fulldate: ''
        }
        this.tarefa = []
        this.day = ''
        this.minutes = ''
        this.notification
        this.notification = notificationManager
        this.notification.configure()
    }

    async insert(titulo,descricao,dataDeTermino,prioridade,concluido){
        const task = new Task(titulo,descricao,dataDeTermino,prioridade,concluido)
        const tarefa = new TarefaDB
        await tarefa.insert(task)
    }

    async update(titulo,descricao,dataDeTermino,prioridade,concluido,id){
        const task = new Task(titulo,descricao,dataDeTermino,prioridade,concluido)
        const tarefa = new TarefaDB
        await tarefa.update(task,id)
    }

    async select(){
        const tarefa = new TarefaDB
        await tarefa.select().then( value => {
            this.atribuiValor(value,this.tarefa)
        })
        this.setState({tarefa:this.tarefa})
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    render(){
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
                        <TextInput placeholder='Selecione a data de término aqui' style={tarefaForm.input} onFocus={()=>{this.setState({show: true})}} value={this.state.time} showSoftInputOnFocus={false}/>
                        {this.state.show && (<DateTimePicker mode={this.state.mode} value={new Date()} onChange={(value,data)=> {
                                if(data === undefined){
                                    return;
                                }
                                if(this.state.mode === 'date'){
                                    this.day = data.toString().slice(0,15)
                                    this.setState({day: data.toString().slice(3,15)})
                                    this.setState({mode:'time'})
                                    return;
                                }
  
 
                                if(this.state.mode === 'time'){
                                    this.minutes = data.toString().slice(15)
                                    this.setState({hour: data.toString().slice(15,21)})
                                    this.setState({show:false})
                                }
                                
                                this.setState({fulldate: `${this.day}${this.minutes}`})
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
                                    { label: 'Média', value: 'Média'},
                                    { label: 'Alta', value: 'Alta'},
                                ]}
                            />
                    </View>
                    <TouchableHighlight underlayColor={params.underlayColor} style={[tarefaForm.button,params.buttonColor]} onPress={async ()=>{
                        if(this.state.title === '' || this.state.description === '' || this.state.time === '' || this.state.priority === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(params.buttonText === 'Inserir'){
                            this.insert(this.state.title,this.state.description,this.state.time,this.state.priority,false)
                            alert(`tarefa ${this.state.title} inserida com sucesso`)
                        }else{
                            await this.update(this.state.title,this.state.description,this.state.time,this.state.priority,false,params.id)
                            alert(`tarefa ${this.state.title} editada com sucesso`)
                            this.notification.cancelNotifications(params.id)
                        }
                        await this.select()
                        this.props.navigation.navigate('TarefaMain',{tarefa:this.state.tarefa[0]})
                        this.notification.ScheduleTaskNotification(this.state.fulldate, this.state.title, this.state.priority,this.state.tarefa[0][this.state.tarefa.length - 1])
                    }}>
                        <Text style={[tarefaForm.buttonText,params.buttonTextColor]}>{params.buttonText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default TarefaForm;