import React,{Component} from 'react';
import {View,Text,TouchableHighlight,ScrollView} from 'react-native'
import TarefaDB from '../../Database/tarefa';
import {tarefaMain} from '../../styles/Tarefa'
import Tarefa from './Tarefa';

class TarefaMain extends Component{
    constructor(props){
        super(props)
        this.state = {
            tarefa:[],
            tarefaExclude: [],
            select: ''
        }
        this.tarefa = []
        this.tarefaExclude = []
        this.go = this.go.bind(this)
    }

    async go(id){
        await this.selectByIdTarefaToExclude(id)
        this.props.navigation.navigate('TarefaDetail',{tarefa:this.state.tarefaExclude[0]})
    }

    async selectByIdTarefaToExclude(id){
        const tarefa = new TarefaDB 
        await tarefa.SelectById(id).then(data => {
          this.atribuiValor(data,this.tarefaExclude)
        })
        this.setState({tarefaExclude: this.tarefaExclude})
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    render() {
        const params = this.props.route.params
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
                        <Tarefa descricao={'estudar para a prova do dia 14'} data={'Jan 22 2021 14:00'} prioridade={'média'} go={this.go}/>
                        <Tarefa descricao={'Titulo 2'} data={'Jan 22 2021 14:00'} prioridade={'média'} go={this.go}/>

                        {params.tarefa.map( tarefa => (<Tarefa key={tarefa.id} descricao={tarefa.titulo} data={tarefa.dataDeTermino} prioridade={tarefa.prioridade} go={this.go} id={tarefa.id}/>))}
                        
                    </ScrollView>
                </View>
                <TouchableHighlight style={tarefaMain.button} underlayColor='#5B0000' onPress={()=>this.props.navigation.navigate('TarefaForm')}>
                    <Text style={tarefaMain.buttonText}>Inserir nova tarefa</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default TarefaMain;