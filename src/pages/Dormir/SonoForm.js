import React,{useState} from 'react';
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import {useNavigation,useRoute} from '@react-navigation/native'
import {sonoForm} from '../../styles/Sono'
import DateTimePicker from '@react-native-community/datetimepicker'
import Sono from '../../Database/Sono';
import Sleep from '../../Model/sleep'
import {notificationManager} from '../../services/NotificationManager'

export function SonoForm(){
    const [visible,setVisible] = useState(false)
    const [hour,setHour] = useState('')
    const [sleep,setSleep] = useState('')
    const [fulldate,setFulldate] = useState('')
    const notification = notificationManager
    notification.configure()
    const navigation = useNavigation()
    const {params} = useRoute()

    async function insert(horasDormidas,horaAcordar){
        const sono = new Sono
        const sleep = new Sleep(horasDormidas,horaAcordar)
        await sono.insert(sleep)
    }

    async function update(horasDormidas,horaAcordar){
        const sono = new Sono
        const sleep = new Sleep(horasDormidas,horaAcordar)
        await sono.update(sleep)
    } 

    return (
        <View style={sonoForm.container}>
            <Text style={sonoForm.title}>Auxiliador de sono</Text>
            <View style={sonoForm.form}>
                <Text style={sonoForm.tip}>Para comerçar, informe a quantidade de horas que você dormiu na última noite e a hora que deseja acordar</Text>
                <View style={sonoForm.section}>
                    <Text style={sonoForm.label}>Horas dormidas</Text>
                    <TextInput 
                        placeholder='Digite a quantidade de horas' 
                        placeholderTextColor='#4F58A1' 
                        style={sonoForm.input} 
                        value={sleep}
                        keyboardType='number-pad' 
                        maxLength={2} 
                        onChangeText={value=>{
                            if(parseInt(value)>24){
                                value = '24'
                            }
                            setSleep(value)
                        }} 
                        onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return
                            }
                            if (parseInt(value.nativeEvent.text) < 1) {
                                value = '1';
                                setSleep(value)
                            }
                        }}
                    />
                </View>
                <View style={sonoForm.section}>

                    <Text style={sonoForm.label}>Hora que deseja acordar</Text>

                    <TextInput 
                        placeholder='Selecione a hora que deseja acordar' 
                        style={sonoForm.input} 
                        placeholderTextColor='#4F58A1' 
                        onFocus={()=>{
                            setVisible(true)
                        }} 
                        value={hour} 
                        showSoftInputOnFocus={false}
                    />

                    {visible && (
                        <DateTimePicker 
                        mode={'time'} 
                        value={new Date()} 
                        onChange={(_,data)=>{
                            setVisible(false)
                            if(data === undefined){
                                return
                            }
                            setFulldate(data.toString())
                            setHour(data.toString().slice(15,21))
                        }} 
                        is24Hour={true}
                        />
                    )}


                </View>
                <TouchableHighlight 
                style={sonoForm.button} 
                underlayColor='#00104A' 
                onPress={async ()=>{
                    if(hour === '' || sleep === ''){
                        alert('Ainda há campos incompletos')
                        return
                    }
                    if(params.edit){
                        await update(sleep,hour)
                    }else{
                        await insert(sleep,hour)
                    }
                    notification.ScheduleSleepNotification(fulldate)
                    navigation.navigate('SonoData',{reload:true})
                }}>
                    <Text style={sonoForm.textButton}>Confirmar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}