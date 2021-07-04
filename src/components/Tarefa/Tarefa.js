import React,{Component,useState,useEffect} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefa} from '../../styles/Tarefa'
import CheckBox from '@react-native-community/checkbox'
import TarefaDB from '../../Database/tarefa';

function Tarefa(props){
    const [checked,setChecked] = useState(false)
    const [done,setDone] = useState('')
    const [late,setLate] = useState('')
    const [textLate,setTextLate] = useState('')

    function carregarConcluido(){
        if(props.concluido == 'true'){
            setChecked(true)
            setDone(tarefa.done)
        }else{
            setChecked(false)
        }
    }

    function updateCheck(){
        const tarefa = new TarefaDB
        tarefa.updateConcluido(!checked,props.id)
    }

    useEffect(()=>{
        carregarConcluido()
        if(props.data < Date().slice(3,21)){
            setLate(tarefa.late)
            if(checked){
                setTextLate({color: 'black'})
            }else{
                setTextLate(tarefa.textLate)
            }   
        }
    },[])

    
    return(
        <View style={[tarefa.container,late,done]}>
            <View style={tarefa.box}>
                <Text style={tarefa.lowerText}>
                    <CheckBox 
                        disabled={false} 
                        value={checked} 
                        onValueChange={value=>{
                            if(value){
                                setDone(tarefa.done)
                            }else{
                                setDone('')
                            }
                            setChecked(value) 
                            updateCheck()
                        }}
                    />
                </Text>
            </View>
            <View style={[tarefa.others,tarefa.description]}>
                <Text style={tarefa.lowerText}>{props.descricao}</Text>
            </View>
            <View style={[tarefa.others,tarefa.date]}>
                <Text style={[tarefa.lowerText,textLate]}>{props.data}</Text>
            </View>
            <View style={[tarefa.others,tarefa.priority]}>
                <Text style={tarefa.lowerText}>{props.prioridade}</Text>
            </View>
            <View style={tarefa.detail}>
                <TouchableHighlight underlayColor='white' onPress={()=>props.go(props.id,checked)}>
                    <Text style={[tarefa.lowerText,tarefa.textDetails]}>Detalhes</Text>
                </TouchableHighlight> 
            </View>
        </View>
    )
}


export default Tarefa