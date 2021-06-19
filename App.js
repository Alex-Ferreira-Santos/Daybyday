import React,{Component} from 'react';
import 'react-native-gesture-handler'
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import Homepage from './src/pages/Homepage'

import {AguaHome} from './src/pages/Agua/AguaHome'
import {AguaForm} from './src/pages/Agua/AguaForm';
import {AguaSuccessful} from './src/pages/Agua/AguaSuccessful';
import {AguaOptions} from './src/pages/Agua/AguaOptions';

import MassaHome from './src/pages/Massa/MassaHome';
import MassaForm from './src/pages/Massa/MassaForm';
import MassaData from './src/pages/Massa/MassaData';
import MassaFinal from './src/pages/Massa/MassaFinal';

import {SonoHome} from './src/pages/Dormir/SonoHome';
import {SonoForm} from './src/pages/Dormir/SonoForm';
import {SonoData} from './src/pages/Dormir/SonoData';

import TarefaHome from './src/pages/Tarefa/TarefaHome';
import TarefaMain from './src/pages/Tarefa/TarefaMain';
import TarefaForm from './src/pages/Tarefa/TarefaForm';
import TarefaDetail from './src/pages/Tarefa/TarefaDetails';

import AlimentacaoHome from './src/pages/Alimentacao/AlimentacaoHome';
import AlimentacaoMain from './src/pages/Alimentacao/AlimentacaoMain';
import AlimentacaoDieta from './src/pages/Alimentacao/AlimentacaoDieta';

class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <StatusBar translucent backgroundColor="transparent" barStyle='dark-content'/>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Homepage" component={Homepage}/>
          <Stack.Screen
            name="AguaHome"
            component={AguaHome}
          />
          <Stack.Screen
            name="AguaForm"
            component={AguaForm}
            initialParams={{
              edit:false
            }}
          />
          <Stack.Screen
            name="AguaSuccessful"
            component={AguaSuccessful}
          />
          <Stack.Screen
            name="AguaOptions"
            component={AguaOptions}
          />
          <Stack.Screen
            name="AlimentacaoHome"
            component={AlimentacaoHome}
          />
          <Stack.Screen
            name="AlimentacaoMain"
            component={AlimentacaoMain}
          />
          <Stack.Screen
            name="AlimentacaoDieta"
            component={AlimentacaoDieta}
          />
          <Stack.Screen
            name="MassaHome"
            component={MassaHome}
          />
          <Stack.Screen
            name="MassaForm"
            component={MassaForm}
            initialParams={{
              edit:false
            }}
          />
          <Stack.Screen
            name="MassaData"
            component={MassaData}
          />
          <Stack.Screen
            name="MassaFinal"
            component={MassaFinal}
          />
          <Stack.Screen
            name="TarefaHome"
            component={TarefaHome}
          />
          <Stack.Screen
            name="TarefaMain"
            component={TarefaMain}
            initialParams={{
              tarefa:''
            }}
          />
          <Stack.Screen
            name="TarefaForm"
            component={TarefaForm}
            initialParams={{
              title:'Inserir nova tarefa',
              taskName:'',
              buttonColor:'#680000',
              underlayColor: '#5B0000',
              buttonText: 'Inserir',
              buttonTextColor: 'white',
              id:''
            }}
          />
          <Stack.Screen
            name="TarefaDetail"
            component={TarefaDetail}
            initialParams={{
              tarefa:''
            }}
          />
          <Stack.Screen
            name="SonoHome"
            component={SonoHome}
          />
          <Stack.Screen
            name="SonoForm"
            component={SonoForm}
            initialParams={{
              edit: false
            }}
          />
          <Stack.Screen
            name="SonoData"
            component={SonoData}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App
