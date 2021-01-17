import React,{Component} from 'react';
import {Text, View, TouchableHighlight,Image} from 'react-native'
import {styles} from './src/styles/index'

import copoDeagua from './src/img/copo-de-agua.png'
import brocolis from './src/img/brocolis.png'
import peso from './src/img/peso.png'
import lista from './src/img/lista-de-tarefas.png'
import lua from './src/img/lua-crescente.png'
import config from './src/img/configuracao.png'

class App extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Day by day</Text>
        <Text style={styles.subtitle}>Viva mais saudável a cada dia</Text>

        <TouchableHighlight style={[styles.touchable,styles.agua]} underlayColor='#2EA6AD' onPress={()=>this.props.navigation.navigate('Test')}>
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

        <TouchableHighlight style={[styles.touchable,styles.peso]} underlayColor='#B6A721' onPress={()=>{}}>
          <View style={styles.Buttoncontainer}>
            <Image source={peso} style={styles.img}/>
            <Text style={{fontSize: 20}}>Massa corporal</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.lista]} underlayColor='#963D3D' onPress={()=>{}}>
          <View style={styles.Buttoncontainer}>
            <Image source={lista} style={styles.img}/>
            <Text style={{fontSize: 20}}>Lista de tarefas</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.dormir]} underlayColor='#373086' onPress={()=>{}}>
          <View style={styles.Buttoncontainer}>
            <Image source={lua} style={styles.img}/>
            <Text style={{fontSize: 20,color: 'white'}}>Auxiliador de sono</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={[styles.touchable,styles.extra]} underlayColor='#792D7A' onPress={()=>{}}>
          <View style={styles.Buttoncontainer}>
            <Image source={config} style={styles.img}/>
            <Text style={{fontSize: 20,color: 'white'}}>Extra</Text>
          </View> 
        </TouchableHighlight>

        <TouchableHighlight style={styles.closeAd} underlayColor='#9C9C9C' onPress={()=>{}}>
          <Text>Remover anúncios</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


export default App
