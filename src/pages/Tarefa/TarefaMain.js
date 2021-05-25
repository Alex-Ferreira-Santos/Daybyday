import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import TarefaDB from '../../Database/tarefa';
import {tarefaMain} from '../../styles/Tarefa'
import Tarefa from '../../components/Tarefa/Tarefa';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'

class TarefaMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            tarefa:[],
            tarefaExclude: [],
            show: false
        }
        this.tarefa = []
        this.tarefaExclude = []
        this.go = this.go.bind(this)
    }

    async go(id,concluido){
        await this.selectByIdTarefaToExclude(id)
        this.props.navigation.navigate('TarefaDetail',{tarefa:this.state.tarefaExclude[0],concluido:concluido})
    }

    async selectByIdTarefaToExclude(id){
        const tarefa = new TarefaDB 
        await tarefa.SelectById(id).then(data => {
          this.atribuiValor(data,this.tarefaExclude)
        })
        this.setState({tarefaExclude: this.tarefaExclude})
    }

    async select(){
        const tarefa = new TarefaDB
        await tarefa.select().then( value => {
            this.atribuiValor(value,this.tarefa)
        })
        if(this.props.route.params !== undefined){
            if(this.props.route.params.reload){
                this.setState({tarefa:this.tarefa})
                this.props.route.params.reload = false
            }
        }
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    render() {
        const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/9041014716';
        const params = this.props.route.params
        try{
            if(params.reload!==undefined){
                if(params){
                    this.state.show = true
                    this.select()
                }
            }
        }catch{

        }
        if(this.state.tarefa[0] === undefined){
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
                            <ScrollView style={tarefaMain.scroll}>
                                {this.state.show && (<View>
                                {this.state.tarefa[0].map( tarefa => <Tarefa key={tarefa.id} descricao={tarefa.titulo} data={tarefa.dataDeTermino} prioridade={tarefa.prioridade} go={this.go} id={tarefa.id} concluido={tarefa.concluido}/>)}
                                </View>)}                         
                            </ScrollView> 
                        </View>
                        <TouchableHighlight style={tarefaMain.button} underlayColor='#5B0000' onPress={()=>this.props.navigation.navigate('TarefaForm')}>
                            <Text style={tarefaMain.buttonText}>Inserir nova tarefa</Text>
                        </TouchableHighlight>
                        <BannerAd
                            unitId={'ca-app-pub-8189428112004694/9041014716'}
                            size={BannerAdSize.SMART_BANNER}
                        />
                    </View>
                )
            }
            
        }   
    }

export default TarefaMain;