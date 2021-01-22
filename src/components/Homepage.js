import React,{Component} from 'react';
import {Text, View, TouchableHighlight,Image} from 'react-native'
import {styles} from '../styles/index'

import copoDeagua from '../img/copo-de-agua.png'
import brocolis from '../img/brocolis.png'
import peso from '../img/peso.png'
import lista from '../img/lista-de-tarefas.png'
import lua from '../img/lua-crescente.png'
import config from '../img/configuracao.png'
import ExtraHome from './Extra/ExtraHome';

class Homepage extends Component{
  constructor(props){
    super(props)
    this.state = {
      visible: false
    }
    this.ClosePopUp = this.ClosePopUp.bind(this)
  }

  ClosePopUp(){
    this.setState({visible: false})
  }
  render(){
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>Day by day</Text>
        <Text style={styles.subtitle}>Viva mais saudável a cada dia</Text>

        <TouchableHighlight style={[styles.touchable,styles.agua]} underlayColor='#2EA6AD' onPress={()=>this.props.navigation.navigate('AguaHome')}>
          <View style={styles.Buttoncontainer}>
            <Image source={copoDeagua} style={styles.img}/>
            <Text style={{fontSize: 20}}>Lembrete de água</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.alimentacao]} underlayColor='#396D27' onPress={()=>{}}>
          <View style={styles.Buttoncontainer}>
            <Image source={brocolis} style={styles.img}/>
            <Text style={{fontSize: 20}}>Alimentação</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.peso]} underlayColor='#B6A721' onPress={()=>this.props.navigation.navigate('MassaHome')}>
          <View style={styles.Buttoncontainer}>
            <Image source={peso} style={styles.img}/>
            <Text style={{fontSize: 20}}>Massa corporal</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.lista]} underlayColor='#963D3D' onPress={()=>this.props.navigation.navigate('TarefaHome')}>
          <View style={styles.Buttoncontainer}>
            <Image source={lista} style={styles.img}/>
            <Text style={{fontSize: 20}}>Lista de tarefas</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.dormir]} underlayColor='#373086' onPress={()=>this.props.navigation.navigate('SonoHome')}>
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

        <TouchableHighlight style={styles.closeAd} underlayColor='#9C9C9C' onPress={()=>{}}>
          <Text>Remover anúncios</Text>
        </TouchableHighlight>

        {this.state.visible && (<ExtraHome close={this.ClosePopUp}/>)}
      </View>
    )
  }
}


export default Homepage