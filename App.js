import React,{Component} from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
import Homepage from './src/pages/Homepage'
import AguaHome from './src/pages/Agua/AguaHome'
import AguaForm from './src/pages/Agua/AguaForm';
import AguaSuccessful from './src/pages/Agua/AguaSuccessful';
import AguaOptions from './src/pages/Agua/AguaOptions';
import MassaHome from './src/pages/Massa/MassaHome';
import MassaForm from './src/pages/Massa/MassaForm';
import MassaData from './src/pages/Massa/MassaData';
import MassaFinal from './src/pages/Massa/MassaFinal';
import SonoHome from './src/pages/Dormir/SonoHome';
import SonoForm from './src/pages/Dormir/SonoForm';
import SonoData from './src/pages/Dormir/SonoData';
import TarefaHome from './src/pages/Tarefa/TarefaHome';
import TarefaMain from './src/pages/Tarefa/TarefaMain';
import TarefaForm from './src/pages/Tarefa/TarefaForm';
import TarefaDetail from './src/pages/Tarefa/TarefaDetails';
import AlimentacaoHome from './src/pages/Alimentacao/AlimentacaoHome';
import AlimentacaoMain from './src/pages/Alimentacao/AlimentacaoMain';
import AlimentacaoDieta from './src/pages/Alimentacao/AlimentacaoDieta';
import AlimentacaoForm from './src/pages/Alimentacao/AlimentacaoForm';

class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Homepage"
            component={Homepage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AguaHome"
            component={AguaHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AguaForm"
            component={AguaForm}
            initialParams={{
              edit:false
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AguaSuccessful"
            component={AguaSuccessful}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AguaOptions"
            component={AguaOptions}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AlimentacaoHome"
            component={AlimentacaoHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AlimentacaoMain"
            component={AlimentacaoMain}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AlimentacaoDieta"
            component={AlimentacaoDieta}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="AlimentacaoForm"
            component={AlimentacaoForm}
            initialParams={{
              title: 'Inserir receita',
              receita: '',
              buttonColor: '',
              buttonText: 'Inserir',
              underlayColor: '#1D470E',
              id:''
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MassaHome"
            component={MassaHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MassaForm"
            component={MassaForm}
            initialParams={{
              edit:false
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MassaData"
            component={MassaData}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MassaFinal"
            component={MassaFinal}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TarefaHome"
            component={TarefaHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="TarefaMain"
            component={TarefaMain}
            initialParams={{
              tarefa:''
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
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
            options={{ headerShown: false }}
            name="TarefaDetail"
            component={TarefaDetail}
            initialParams={{
              tarefa:''
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SonoHome"
            component={SonoHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SonoForm"
            component={SonoForm}
            initialParams={{
              edit: false
            }}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="SonoData"
            component={SonoData}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App
