import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import TarefaDB from '../../Database/tarefa';
import {tarefaDetails} from '../../styles/Tarefa'
import TarefaPopup from '../../components/Tarefa/TarefaPopup'

class TarefaDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            done: '',
            textLate: '',
            checked: '',
            buttonText: 'Concluir',
            show: false,
            tarefa: []
        }
        this.tarefa = []
        this.hide = this.hide.bind(this)
        this.goback = this.goback.bind(this)
        this.checkConcluido()
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

    hide(){
        this.setState({show: false})
    }

    async goback(){
        await this.select()
        this.props.navigation.navigate('TarefaMain',{tarefa:this.state.tarefa[0]})
    }

    async updateCheck(concluido){
        const tarefa = new TarefaDB
        const params = this.props.route.params
        await tarefa.updateConcluido(concluido,params.tarefa.id)
    }

    checkConcluido(){
        const params = this.props.route.params
        if(params.concluido){
            this.state.done = tarefaDetails.done
            this.state.checked = tarefaDetails.unChecked
            this.state.buttonText = 'Desfazer'
        }else{
            this.state.done = ''
            this.state.checked = ''
            this.state.buttonText = 'Concluir'
        }
    }

    render() {
        const params = this.props.route.params
        return (
            <View style={tarefaDetails.container}>
                <Text style={tarefaDetails.pageTitle}>Detalhes</Text>
                <View style={[tarefaDetails.main,this.state.done]}>
                    <Text style={tarefaDetails.title}>{params.tarefa.titulo}</Text>
                    <Text style={tarefaDetails.category}>Descrição</Text>
                    <Text style={tarefaDetails.text}>{params.tarefa.descricao}</Text>
                    <Text style={tarefaDetails.category}>Data de término</Text>
                    <Text style={[tarefaDetails.text,this.state.textLate]}>{params.tarefa.dataDeTermino}</Text>
                    <Text style={tarefaDetails.category}>Prioridade</Text>
                    <Text style={tarefaDetails.text}>{params.tarefa.prioridade}</Text>

                    <TouchableHighlight style={[tarefaDetails.concluir,this.state.checked]} underlayColor='#367720' onPress={async ()=>{
                        if(this.state.buttonText === 'Concluir'){
                            this.setState({done: tarefaDetails.done})
                            this.setState({checked: tarefaDetails.unChecked})
                            this.setState({buttonText: 'Desfazer'})
                            await this.updateCheck(true).then(async () =>{
                                await this.goback()
                            })
                        }else{
                            this.setState({done: ''})
                            this.setState({checked: ''})
                            this.setState({buttonText: 'Concluir'})
                            await this.updateCheck(false) 
                        }      
                    }}>
                        <Text style={tarefaDetails.buttonText}>{this.state.buttonText}</Text>
                    </TouchableHighlight>

                    <View style={tarefaDetails.buttons}>
                        <TouchableHighlight style={tarefaDetails.editar} underlayColor='#B6B916' onPress={()=>this.props.navigation.navigate('TarefaForm',{
                            title:'Editar a tarefa',
                            taskName:params.tarefa.titulo,
                            buttonColor:{backgroundColor:'#D3D713'},
                            underlayColor:'#B6B916',
                            buttonText: 'Editar',
                            buttonTextColor:{color:'black'},
                            id: params.tarefa.id,
                        })}>
                            <Text style={tarefaDetails.buttonText}>Editar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={tarefaDetails.excluir} underlayColor='#AA0E0E' onPress={()=>{this.setState({show: true})}}>
                            <Text style={tarefaDetails.excludeButtonText}>Excluir</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                {this.state.show && (<TarefaPopup hide={this.hide} goback={this.goback} titulo={params.tarefa.titulo} id={params.tarefa.id}/>)}
            </View>
        )
    }
}

export default TarefaDetail