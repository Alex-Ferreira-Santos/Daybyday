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
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}


export default App
