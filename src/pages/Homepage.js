import React,{Component} from 'react';
import {Text, View, TouchableHighlight,Image} from 'react-native'
import {styles} from '../styles/index'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'

import copoDeagua from '../img/copo-de-agua.png'
import brocolis from '../img/brocolis.png'
import peso from '../img/peso.png'
import lista from '../img/lista-de-tarefas.png'
import lua from '../img/lua-crescente.png'
import config from '../img/configuracao.png'
import ExtraHome from '../components/Extra/ExtraHome';

import Agua from '../Database/agua'
import Massa from '../Database/massa';
import Sono from '../Database/Sono';
import TarefaDB from '../Database/tarefa';
import VisitedDB from '../Database/visited'

class Homepage extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false,
      aguaVisited: false,
      massaVisited: false,
      sonoVisited: false,
      tarefaVisited: false,
      alimentacaoVisited: false,
      tarefa: [],
      alimentacao: [],
      visited: [],
    }
    this.visited = [];
    this.tarefa = []
    this.alimentacao = []
    this.ClosePopUp = this.ClosePopUp.bind(this)
  }

  ClosePopUp(){
    this.setState({visible: false})
  }

  async selectAgua(){
    const agua = new Agua
    await agua.select().then( value => {
      if(value[0] !== undefined){
        this.setState({aguaVisited: true})
      }
    })
  }

  async selectMassa(){
    const massa = new Massa
    await massa.select().then( value => {
      if(value[0] !== undefined){
        this.setState({massaVisited: true})
      }
    })
  }

  async selectSono(){
    const sono = new Sono
    await sono.select().then( value => {
      if(value[0] !== undefined){
        this.setState({sonoVisited: true})
      }
    })
  }

  async selectVisited(){
    const visited = new VisitedDB()
    await visited.select().then( value => {
      this.atribuiValor(value,this.visited)
      if(value[0].visited){
        this.setState({alimentacaoVisited: true})
      }
    })
    this.setState({visited:this.visited})
  }

  async selectTarefa(){
    const tarefa = new TarefaDB
    await tarefa.select().then( value => {
      if(value[0] !== undefined){
        this.setState({tarefaVisited: true})
      }
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

  createTable(){
    const agua = new Agua
    agua.initDB()
    const visited = new VisitedDB
    visited.initDB()
    const tarefa = new TarefaDB
    tarefa.initDB()
    const massa = new Massa
    massa.initDB()
    const sono = new Sono
    sono.initDB()
  }

  componentDidMount(){
    this.createTable()
  }
  

  render(){
    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/5727370523';
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>Day by day</Text>
        <Text style={styles.subtitle}>Viva mais saudável a cada dia</Text>

        <TouchableHighlight style={[styles.touchable,styles.agua]} underlayColor='#2EA6AD' onPress={async ()=>{
          await this.selectAgua()
          if(this.state.aguaVisited){
            this.props.navigation.navigate('AguaOptions',{reload:true})
          }else{
            this.props.navigation.navigate('AguaHome')
          }
          }}>
          <View style={styles.Buttoncontainer}>
            <Image source={copoDeagua} style={styles.img}/>
            <Text style={{fontSize: 20}}>Lembrete de água</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.alimentacao]} underlayColor='#396D27' onPress={async ()=>{
          await this.selectVisited()
          if(this.state.alimentacaoVisited){
            this.props.navigation.navigate('AlimentacaoMain')
          }else{
            this.props.navigation.navigate('AlimentacaoHome')
          }
          }}>
          <View style={styles.Buttoncontainer}>
            <Image source={brocolis} style={styles.img}/>
            <Text style={{fontSize: 20}}>Alimentação</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.peso]} underlayColor='#B6A721' onPress={async ()=>{
          await this.selectMassa().finally(() => {
            if(this.state.massaVisited){
            this.props.navigation.navigate('MassaFinal')
            }else{
              this.props.navigation.navigate('MassaHome')
            }
          })      
          }}>
          <View style={styles.Buttoncontainer}>
            <Image source={peso} style={styles.img}/>
            <Text style={{fontSize: 20}}>Massa corporal</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.lista]} underlayColor='#963D3D' onPress={async ()=>{
          await this.selectTarefa().finally( () => {
            if(this.state.tarefaVisited){
            this.props.navigation.navigate('TarefaMain',{reload:true})
            }else{
              this.props.navigation.navigate('TarefaHome')
            }
          })  
          }}>
          <View style={styles.Buttoncontainer}>
            <Image source={lista} style={styles.img}/>
            <Text style={{fontSize: 20}}>Lista de tarefas</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.dormir]} underlayColor='#373086' onPress={async ()=>{
          await this.selectSono()
          if(this.state.sonoVisited){
            this.props.navigation.navigate('SonoData',{reload:true})
          }else{
            this.props.navigation.navigate('SonoHome')
          }
          }}>
          <View style={styles.Buttoncontainer}>
            <Image source={lua} style={styles.img}/>
            <Text style={{fontSize: 20,color: 'white'}}>Auxiliador de sono</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.extra]} underlayColor='#792D7A' onPress={()=>{this.setState({visible:true})}}>
          <View style={styles.Buttoncontainer}>
            <Image source={config} style={styles.img}/>
            <Text style={{fontSize: 20,color: 'white'}}>Extra</Text>
          </View> 
        </TouchableHighlight>

        {this.state.visible && (<ExtraHome close={this.ClosePopUp}/>)}
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.SMART_BANNER}
        />
      </View>
    )
  }
}


export default Homepage