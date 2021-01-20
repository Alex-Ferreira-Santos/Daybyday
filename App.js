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
            name="MassaHome"
            component={MassaHome}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="MassaForm"
            component={MassaForm}
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
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App
