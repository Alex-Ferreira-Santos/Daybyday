import React,{useState} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {massaForm} from '../../styles/Massa'
import Massa from '../../Database/massa'
import Mass from '../../Model/mass'
import {useRoute, useNavigation} from '@react-navigation/native'

function MassaForm(){
    const [altura,setAltura] = useState('')
    const [peso, setPeso] = useState('')

    async function insert(altura,peso){
        const mass = new Mass(altura,peso)
        const massa = new Massa
        await massa.insert(mass)
    }

    async function update(altura,peso){
        const mass = new Mass(altura,peso)
        const massa = new Massa
        await massa.update(mass)
    }

    const {params} = useRoute()
    const navigation = useNavigation()

    return(
        <View style={massaForm.container}>
            <Text style={massaForm.title}>Massa Corporal</Text>
            <View style={massaForm.form}>
                <Text style={massaForm.text}>Para sabermos seu indice de massa corporal precisaremos  da sua altura e do seu peso</Text>
                <View style={massaForm.inputBox}>
                    <Text style={massaForm.label}>Altura</Text>
                    <TextInput 
                        placeholder='Digite sua altura em metros aqui' 
                        style={massaForm.input} 
                        maxLength={4} 
                        onChangeText={ value =>{
                            if(parseFloat(value)>2.50){
                                value = '2.50'
                            }
                            setAltura(value)
                        }}
                        value={altura}  
                        onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return   
                            }
                            if(altura<1.00){
                                value.nativeEvent.text = '1.00'
                            }
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(2).toString()
                            setAltura(value.nativeEvent.text)
                        }} 
                        keyboardType='number-pad'
                    />
                </View>
                <View style={massaForm.inputBox}>
                    <Text style={massaForm.label}>Peso</Text>
                    <TextInput 
                        placeholder='Digite seu peso em kg aqui' 
                        style={massaForm.input} 
                        maxLength={5} 
                        onChangeText={ value =>{
                            if(parseFloat(value)>250){
                                value = '250.0'
                            }
                            setPeso(value)
                        }} 
                        keyboardType='number-pad' 
                        value={peso}
                        onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return   
                            }
                            if(peso<25.0){
                                value.nativeEvent.text = '25.0'
                            }
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(1).toString()
                            setPeso(value.nativeEvent.text)
                        }}
                    />
                </View>
                <TouchableHighlight 
                    style={massaForm.button} 
                    underlayColor='#4E5000' 
                    onPress={async ()=>{
                        if(altura === '' || peso === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(params.edit){
                            await update(altura,peso)
                        }else{
                            await insert(altura,peso)
                        }
                        navigation.navigate('MassaData')
                    }} 
                    keyboardType='number-pad'
                >
                    <Text style={massaForm.textButton}>Confirmar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}



export default MassaForm