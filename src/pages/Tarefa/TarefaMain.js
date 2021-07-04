import React,{useState,useCallback} from 'react';
import {View,Text,TouchableHighlight,ScrollView,FlatList} from 'react-native'
import TarefaDB from '../../Database/tarefa';
import {tarefaMain} from '../../styles/Tarefa'
import Tarefa from '../../components/Tarefa/Tarefa';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {useNavigation,useFocusEffect} from '@react-navigation/native'

function TarefaMain(){
    const [loading,setLoading] = useState(true)
    const [tarefa,setTarefa] = useState([])
    const navigation = useNavigation()

    async function selectByIdTarefaToExclude(id){
        const tarefa = new TarefaDB 
        await tarefa.SelectById(id).then(data => {
            navigation.navigate('TarefaDetail',{tarefa:data})
        })
    }

    async function select(){
        setLoading(true)
        const tarefa = new TarefaDB
        await tarefa.select().then( value => {
            setTarefa(value)
            setLoading(false)
        })
    }

    function renderItem({item}){
        return(
            <Tarefa 
                key={item.id} 
                descricao={item.titulo} 
                data={item.dataDeTermino} 
                prioridade={item.prioridade} 
                go={selectByIdTarefaToExclude} 
                id={item.id} 
                concluido={item.concluido}
            />
        )
    }

    useFocusEffect(useCallback(() => {
        select()
    },[]))

    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/9041014716';
    if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'#B94B4B'}}>
                <Text style={{fontSize: 50}}>Loading...</Text>
            </View>
        )
    }else{
        return(
            <View style={tarefaMain.container}>
                <Text style={tarefaMain.title}>Suas tarefas</Text>
                <Text style={tarefaMain.text}>Para editar ou excluir uma tarefa, clique em detalhes na tarefa que deseja modificar</Text>
                    <View style={tarefaMain.main}>
                        <View style={tarefaMain.head}>
                            <View style={tarefaMain.box}>
                                <Text style={tarefaMain.lowerText}>Box</Text>
                            </View>
                            <View style={[tarefaMain.others,tarefaMain.description]}>
                                <Text style={tarefaMain.lowerText}>Titulo</Text>
                            </View>
                            <View style={[tarefaMain.others,tarefaMain.date]}>
                                <Text style={tarefaMain.lowerText}>Data de término</Text>
                            </View>
                            <View style={[tarefaMain.others,tarefaMain.priority]}>
                                <Text style={tarefaMain.lowerText}>Prioridade</Text>
                            </View>
                            <View style={tarefaMain.detail}>
                                <Text style={tarefaMain.lowerText}>Detalhes</Text>
                            </View>
                        </View>
                        <FlatList
                            data={tarefa}
                            renderItem={renderItem}
                            style={tarefaMain.scroll}
                            keyExtractor={ tarefa => tarefa.id.toString()}
                        />
                    </View>
                <TouchableHighlight 
                    style={tarefaMain.button} 
                    underlayColor='#5B0000' 
                    onPress={()=>navigation.navigate('TarefaForm')}
                >
                    <Text style={tarefaMain.buttonText}>Inserir nova tarefa</Text>
                </TouchableHighlight>
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.SMART_BANNER}
                />
            </View>
        )
    }
}   
    

export default TarefaMain;