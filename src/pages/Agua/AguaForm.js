import React,{useState} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {aguaForm} from '../../styles/Agua'
import Water from '../../Model/water'
import Agua from '../../Database/agua'
import {notificationManager} from '../../services/NotificationManager'
import {useNavigation, useRoute} from '@react-navigation/native'

export function AguaForm(){
    const [litros,setLitros] = useState('')
    const notificador = notificationManager
    notificador.configure()
    const navigation = useNavigation()
    const {params} = useRoute()

    function insert(litros){
        const water = new Water(litros,16,60)
        const agua = new Agua
        agua.insert(water)
    }

    async function update(litros){
        const water = new Water(litros,16,60)
        const agua = new Agua
        await agua.update(water)
    }

    const ScheduleNotification = (ml) => {
        notificationManager.ScheduleWaterNotification(ml)
    }

    return(
        <View style={aguaForm.container}>
            <Text style={aguaForm.title}>Lembrete de água</Text>
            <View style={aguaForm.form}>
                <Text style={aguaForm.dica}>Dica: para saber a quantidade de litros que é recomendado beber, cheque seu peso para aparecer a quantidade ideal</Text>
                <View style={aguaForm.view}>
                    <Text style={aguaForm.label}>Quantos litros deseja beber:</Text>
                    <TextInput 
                        placeholder='Digite a quantidade de litros aqui' 
                        style={aguaForm.input} 
                        keyboardType='number-pad' 
                        maxLength={3} 
                        value={litros} 
                        onChangeText={value=>{
                            if(parseFloat(value)>4){
                                    value = '4.0'
                            }
                            setLitros(value)
                        }}
                        onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return   
                            }
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(2).toString()
                            if (parseFloat(value.nativeEvent.text) < 1.5) {
                                value.nativeEvent.text = '1.5'; 
                            }
                            setLitros(value.nativeEvent.text) 
                        }}
                    />
                    </View>
                    
                <Text style={aguaForm.tips}>O valor minimo para litros é 1,5 e o maximo é 4.</Text>
                <Text style={aguaForm.tips}>O quantidade de água é calculada ao longo de 16 horas</Text>

                <TouchableHighlight 
                    style={aguaForm.next} 
                    underlayColor='#114A4A' 
                    onPress={()=>{
                        if(litros === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }

                        const liters = litros * 1000
                        const quantidade = liters / 18

                        if(params.edit){
                            update(litros)
                        }else{
                            insert(litros)
                        }

                        ScheduleNotification(quantidade)
                            
                        navigation.navigate('AguaSuccessful')
                    }}
                >
                    <Text style={aguaForm.confirmar}>Confirmar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}