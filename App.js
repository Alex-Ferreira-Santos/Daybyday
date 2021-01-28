import React,{Component} from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
import Homepage from './src/components/Homepage'
import AguaHome from './src/components/Agua/AguaHome'
import AguaForm from './src/components/Agua/AguaForm';
import AguaSuccessful from './src/components/Agua/AguaSuccessful';
import AguaOptions from './src/components/Agua/AguaOptions';
import MassaHome from './src/components/Massa/MassaHome';
import MassaForm from './src/components/Massa/MassaForm';
import MassaData from './src/components/Massa/MassaData';
import MassaFinal from './src/components/Massa/MassaFinal';
import SonoHome from './src/components/Dormir/SonoHome';
import SonoForm from './src/components/Dormir/SonoForm';
import SonoData from './src/components/Dormir/SonoData';
import TarefaHome from './src/components/Tarefa/TarefaHome';
import TarefaMain from './src/components/Tarefa/TarefaMain';
import TarefaForm from './src/components/Tarefa/TarefaForm';
import TarefaDetail from './src/components/Tarefa/TarefaDetails';
import AlimentacaoHome from './src/components/Alimentacao/AlimentacaoHome';
import AlimentacaoMain from './src/components/Alimentacao/AlimentacaoMain';
import AlimentacaoDieta from './src/components/Alimentacao/AlimentacaoDieta';
import AlimentacaoForm from './src/components/Alimentacao/AlimentacaoForm';

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
              underlayColor: '#1D470E'
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
