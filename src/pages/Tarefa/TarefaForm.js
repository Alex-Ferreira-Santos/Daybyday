import React,{useState,useCallback,Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {tarefaForm,pickerSelectStyles} from '../../styles/Tarefa'
import DateTimePicker from '@react-native-community/datetimepicker'
import RNPickerSelect from 'react-native-picker-select' ;
import {useRoute,useNavigation,useFocusEffect} from '@react-navigation/native'
import Task from '../../Model/task'
import TarefaDB from '../../Database/tarefa';
import {notificationManager} from '../../services/NotificationManager'

let minutes = ''
let dia
function TarefaForm(){
    const [title,setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [day, setDay] = useState('')
    const [hour, setHour] = useState('')
    const [time, setTime] = useState('')
    const [priority,setPriority] = useState('')
    const [show, setShow] = useState(false)
    const [mode,setMode] = useState('date')
    const [tarefa,setTarefa] = useState([])
    const [fulldate,setFulldate] = useState('')
    const navigation = useNavigation()
    const {params} = useRoute()
    const notification = notificationManager
    notification.configure()

    async function insert(titulo,descricao,dataDeTermino,prioridade,concluido){
        const task = {titulo,descricao,dataDeTermino,prioridade,concluido}
        const tarefa = new TarefaDB
        await tarefa.insert(task)
    }

    async function update(titulo,descricao,dataDeTermino,prioridade,concluido,id){
        const task = new Task(titulo,descricao,dataDeTermino,prioridade,concluido)
        const tarefa = new TarefaDB
        await tarefa.update(task,id)
    }

    async function select(){
        const tarefa = new TarefaDB
        await tarefa.select().then( value => {
            setTarefa(value)
        })
    }

    useFocusEffect(useCallback( () => {
        select()
    },[]))

    return (
        <View style={tarefaForm.container}>
            <Text style={tarefaForm.title}>{params.title}</Text>
            <Text style={tarefaForm.taskName}>{params.taskName}</Text>
            <View style={tarefaForm.form}>
                <View style={tarefaForm.section}>
                    <Text style={tarefaForm.label}>Título</Text>
                    <TextInput 
                        placeholder='Digite o título da tarefa aqui' 
                        style={tarefaForm.input} 
                        onChangeText={value=>{ 
                            setTitle(value)
                        }}
                    />
                </View>
                <View style={tarefaForm.section}>
                    <Text style={tarefaForm.label}>Descrição</Text>
                    <TextInput 
                        placeholder='Digite a descrição da tarefa aqui' 
                        style={[tarefaForm.input,tarefaForm.description]} 
                        multiline={true} 
                        onChangeText={value => {
                            setDescription(value)
                        }}
                    />
                </View>
                <View style={tarefaForm.section}>
                    <Text style={tarefaForm.label}>Data de término</Text>
                    <TextInput 
                        placeholder='Selecione a data de término aqui' 
                        style={tarefaForm.input} 
                        onFocus={()=>{
                            setShow(true)
                            setMode('date')
                        }} 
                        value={time} 
                        showSoftInputOnFocus={false}
                    />
                    {show && (
                        <DateTimePicker 
                            mode={mode} 
                            value={new Date()} 
                            onChange={(value,data)=> {
                                if(data === undefined){
                                    return;
                                }

                                if(mode === 'date'){
                                    
                                    dia = data.toString().slice(0,15)
                                    console.log(dia)
                                    setDay(data.toString().slice(3,15))
                                    setMode('time')
                                    return;
                                }

                                if(mode === 'time' && minutes === ''){
                                    minutes = data.toString().slice(15)
                                    setShow(false)
                                    setHour(data.toString().slice(15,21))
                                }
                                console.log(dia)
                                console.log(`${dia} ${minutes}`)
                                setFulldate(`${dia} ${minutes}`)
                                setTime(`${day}${data.toString().slice(15,21)}`)
                                
                                minutes = ''
                            }} 
                            is24Hour={true}  
                        />
                    )}
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
                                    setPriority(value)
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
                        if(title === '' || description === '' || time === '' || priority === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        await select()
                        

                        if(params.buttonText === 'Inserir'){
                            await insert(title,description,time,priority,false)    
                            alert(`tarefa ${title} inserida com sucesso`)
                        }else{
                            await update(title,description,time,priority,false,params.id)
                            alert(`tarefa ${title} editada com sucesso`)
                            notification.cancelNotifications(params.id)
                        }
                        
                        navigation.navigate('TarefaMain',{reload:true})
                        notification.ScheduleTaskNotification(fulldate, title, priority,tarefa.length)
                    }}>
                        <Text style={[tarefaForm.buttonText,params.buttonTextColor]}>{params.buttonText}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
}

export default TarefaForm;