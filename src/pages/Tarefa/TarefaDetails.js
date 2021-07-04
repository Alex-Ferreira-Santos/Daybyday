import React,{useState} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {tarefaDetails} from '../../styles/Tarefa'
import TarefaPopup from '../../components/Tarefa/TarefaPopup'
import {useNavigation,useRoute} from '@react-navigation/native'

function TarefaDetail(){
    const [textLate,setTextLate] = useState('')
    const [show,setShow] = useState(false)
    const navigation = useNavigation()
    const {params} = useRoute()
    console.log(params)

    function hide(){
        setShow(false)
    }

    async function goback(){
        navigation.navigate('TarefaMain')
    }

    return (
        <View style={tarefaDetails.container}>
            <Text style={tarefaDetails.pageTitle}>Detalhes</Text>
            <View style={tarefaDetails.main}>
                <Text style={tarefaDetails.title}>{params.tarefa.titulo}</Text>
                <Text style={tarefaDetails.category}>Descrição</Text>
                <Text style={tarefaDetails.text}>{params.tarefa.descricao}</Text>
                <Text style={tarefaDetails.category}>Data de término</Text>
                <Text style={[tarefaDetails.text,textLate]}>{params.tarefa.dataDeTermino}</Text>
                <Text style={tarefaDetails.category}>Prioridade</Text>
                <Text style={tarefaDetails.text}>{params.tarefa.prioridade}</Text>

                <TouchableHighlight 
                    style={[tarefaDetails.concluir,tarefaDetails.voltar]} 
                    underlayColor='#8f8f8f' 
                    onPress={async ()=>{ await goback()}}
                >
                    <Text style={tarefaDetails.buttonText}>Voltar</Text>
                </TouchableHighlight>

                <View style={tarefaDetails.buttons}>
                    <TouchableHighlight 
                        style={tarefaDetails.editar} 
                        underlayColor='#B6B916' 
                        onPress={()=>navigation.navigate('TarefaForm',{
                            title:'Editar a tarefa',
                            taskName:params.tarefa.titulo,
                            buttonColor:{backgroundColor:'#D3D713'},
                            underlayColor:'#B6B916',
                            buttonText: 'Editar',
                            buttonTextColor:{color:'black'},
                            id: params.tarefa.id,
                        })}
                    >
                        <Text style={tarefaDetails.buttonText}>Editar</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={tarefaDetails.excluir} 
                        underlayColor='#AA0E0E' 
                        onPress={()=>{setShow(true)}}
                    >
                        <Text style={tarefaDetails.excludeButtonText}>Excluir</Text>
                    </TouchableHighlight>
                </View>
            </View>
            {show && (
                <TarefaPopup 
                    hide={hide} 
                    goback={goback} 
                    titulo={params.tarefa.titulo} 
                    id={params.tarefa.id}
                />
            )}
        </View>
    )
}

export default TarefaDetail