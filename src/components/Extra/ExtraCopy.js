import React from 'react';
import {View,Text,TouchableHighlight,Linking} from 'react-native'
import {extraCopy} from '../../styles/Extra'

function ExtraCopy({close}){
    return (
        <View style={extraCopy.container}>
            <View style={extraCopy.main}>
                <Text style={extraCopy.title}>Copyrights</Text>
                <View style={extraCopy.links}>
                    <Text style={extraCopy.copyrights}>Ícones feitos por <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/autores/flat-icons')}>Flat Icons</Text> from <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/')}>www.flaticon.com</Text></Text>

                    <Text style={extraCopy.copyrights}>Ícones feitos por <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/autores/dinosoftlabs')}>DinosoftLabs</Text> from <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/')}>www.flaticon.com</Text></Text>

                    <Text style={extraCopy.copyrights}>Ícones feitos por <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/autores/photo3idea-studio')}>photo3idea_studio</Text> from <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/')}>www.flaticon.com</Text></Text>

                    <Text style={extraCopy.copyrights}>Ícones feitos por <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://smashicons.com/')}>Smashicons</Text> from <Text style={extraCopy.url} onPress={()=>Linking.openURL('https://www.flaticon.com/br/')}>www.flaticon.com</Text></Text>

                </View>
                
                <TouchableHighlight style={extraCopy.button} underlayColor='#56BAB4' onPress={()=>{close()}}>
                    <Text style={extraCopy.buttonText}>Voltar</Text>
                </TouchableHighlight>
            </View> 
        </View>
    )
}

export default ExtraCopy