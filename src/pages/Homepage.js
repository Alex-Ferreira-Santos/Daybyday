import React,{Component,useState, useEffect} from 'react';
import {Text, View, TouchableHighlight,Image} from 'react-native'
import {styles} from '../styles/index'
import { BannerAd, BannerAdSize} from '@react-native-firebase/admob'
import {useNavigation} from '@react-navigation/native'

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

function Homepage(){
  const [visible,setVisible] = useState(false)
  const [aguaVisited,setAguaVisited] = useState(false)
  const [massaVisited,setMassaVisited] = useState(false)
  const [sonoVisited,setSonoVisited] = useState(false)
  const [tarefaVisited,setTarefaVisited] = useState(false)
  const [alimentacaoVisited,setAlimentacaoVisited] = useState(false)
  const [tarefa,setTarefa] = useState([])
  const [visited,setVisited] = useState([])
  const navigation = useNavigation()

  function ClosePopUp(){
    setVisible(false)
  }

  async function selectAgua(){
    const agua = new Agua
    await agua.select().then( value => {
      if(value[0] !== undefined){
        setAguaVisited(true)
      }
    })
  }

  async function selectMassa(){
    const massa = new Massa
    await massa.select().then( value => {
      if(value[0] !== undefined){
        setMassaVisited(true)
      }
    })
  }

  async function selectSono(){
    const sono = new Sono
    await sono.select().then( value => {
      if(value[0] !== undefined){
        setSonoVisited(true)
      }
    })
  }

  async function selectVisited(){
    const visited = new VisitedDB()
    await visited.select().then( value => {
      setVisited(...value)
      if(value[0].visited){
        setAlimentacaoVisited(true)
      }
    })
  }

  async function selectTarefa(){
    const tarefa = new TarefaDB
    await tarefa.select().then( value => {
      if(value[0] !== undefined){
        setTarefaVisited(true)
      }
      setTarefa(...value)
    })
  }

  async function createTable(){
    const agua = new Agua
    await agua.initDB()
    const visited = new VisitedDB
    await visited.initDB()
    const tarefa = new TarefaDB
    await tarefa.initDB()
    const massa = new Massa
    await massa.initDB()
    const sono = new Sono
    await sono.initDB()
  }

  useEffect(()=>{
    createTable()
  },[])

  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Day by day</Text>
      <Text style={styles.subtitle}>Viva mais saudável a cada dia</Text>

      <TouchableHighlight 
        style={[styles.touchable,styles.agua]} 
        underlayColor='#2EA6AD' 
        onPress={async ()=>{
          await selectAgua()
          if(aguaVisited){
            navigation.navigate('AguaOptions')
          }else{
            navigation.navigate('AguaHome')
          }
        }}
      >
        <View style={styles.Buttoncontainer}>
          <Image source={copoDeagua} style={styles.img}/>
          <Text style={{fontSize: 20}}>Lembrete de água</Text>
        </View> 
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.touchable,styles.alimentacao]} 
        underlayColor='#396D27' 
        onPress={async ()=>{
          await selectVisited()
          if(alimentacaoVisited){
            navigation.navigate('AlimentacaoMain')
          }else{
            navigation.navigate('AlimentacaoHome')
          }
        }}
      >
        <View style={styles.Buttoncontainer}>
          <Image source={brocolis} style={styles.img}/>
          <Text style={{fontSize: 20}}>Alimentação</Text>
        </View> 
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.touchable,styles.peso]} 
        underlayColor='#B6A721' 
        onPress={async ()=>{
          await selectMassa().finally(() => {
            if(massaVisited){
            navigation.navigate('MassaFinal')
            }else{
              navigation.navigate('MassaHome')
            }
          })      
        }}
      >
        <View style={styles.Buttoncontainer}>
          <Image source={peso} style={styles.img}/>
          <Text style={{fontSize: 20}}>Massa corporal</Text>
        </View> 
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.touchable,styles.lista]} 
        underlayColor='#963D3D' 
        onPress={async ()=>{
          await selectTarefa().finally( () => {
            if(tarefaVisited){
            navigation.navigate('TarefaMain')
            }else{
              navigation.navigate('TarefaHome')
            }
          })  
        }}
      >
        <View style={styles.Buttoncontainer}>
          <Image source={lista} style={styles.img}/>
          <Text style={{fontSize: 20}}>Lista de tarefas</Text>
        </View> 
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.touchable,styles.dormir]} 
        underlayColor='#373086' 
        onPress={async ()=>{
          await selectSono()
          if(sonoVisited){
            navigation.navigate('SonoData')
          }else{
            navigation.navigate('SonoHome')
          }
        }}
      >
        <View style={styles.Buttoncontainer}>
          <Image source={lua} style={styles.img}/>
          <Text style={{fontSize: 20,color: 'white'}}>Auxiliador de sono</Text>
        </View> 
      </TouchableHighlight>

      <TouchableHighlight 
        style={[styles.touchable,styles.extra]} 
        underlayColor='#792D7A' 
        onPress={()=>{setVisible(true)}}
      >
        <View style={styles.Buttoncontainer}>
          <Image source={config} style={styles.img}/>
          <Text style={{fontSize: 20,color: 'white'}}>Extra</Text>
        </View> 
      </TouchableHighlight>

      {visible && (<ExtraHome close={ClosePopUp}/>)}
      <BannerAd
        unitId={'ca-app-pub-8189428112004694/5727370523'}
        size={BannerAdSize.SMART_BANNER}
      />
    </View>
  )
}

export default Homepage