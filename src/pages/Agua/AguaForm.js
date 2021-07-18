import React,{useState} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as yup from 'yup'
import {useForm,Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {aguaForm} from '../../styles/Agua'
import Agua from '../../Database/agua'
import VisitedDB from '../../Database/visited'
import {notificationManager} from '../../services/NotificationManager'

export function AguaForm(){
    const [litros,setLitros] = useState('')
    const notificador = notificationManager
    notificador.configure()
    const navigation = useNavigation()
    const {params} = useRoute()

    const schema = yup.object().shape({
        litros: yup
        .number('o valor deve ser um número')
        .required('Digite os litros para continuar')
        .max(4.0,'o valor máximo para os litros é 4')
        .min(1.5,'o valor mínimo para os litros é 1.5')
    })

    const {control, handleSubmit, formState:{errors}} = useForm({ resolver: yupResolver(schema)})

    async function insert(litros){
        const agua = new Agua
        agua.insert({litros,horas:16,tempo:60})
    }

    async function update(litros){
        const agua = new Agua
        await agua.update({litros,horas:16,tempo:60})
    }

    async function updateVisited(){   
        const visited = new VisitedDB()
        await visited.update('aguaVisited','1')
    }

    const ScheduleNotification = (ml) => {
        notificationManager.ScheduleWaterNotification(ml)
    }

    async function Submit(){
        const liters = litros * 1000
        const quantidade = liters / 18

        if(params.edit){
            await update(litros)
        }else{
            await insert(litros).then(async () => {
                await updateVisited() 
            })
        }

        ScheduleNotification(quantidade)
                                
        navigation.navigate('AguaSuccessful')   
    }

    function litrosFormatter(newValue, oldValue=''){
  
        if (oldValue.length > newValue.length) {
          return newValue;
        }
    
        return newValue
          .replace(/\W/gi, '')
          .replace(/(.{1})/g, '$1.')
          .substring(0, 3);
    }

    return(
        <View style={aguaForm.container}>
            <Text style={aguaForm.title}>Lembrete de água</Text>
            <Text style={aguaForm.subtitle} >Preencha o formulário para configurar os lembretes</Text>
            <View style={aguaForm.form}>
                <Text style={aguaForm.dica}>Dica: para saber a quantidade de litros que é recomendado beber, cheque seu peso para aparecer a quantidade ideal</Text>
                <View style={aguaForm.view}>
                    <Text style={aguaForm.label}>Quantos litros deseja beber:</Text>
                    <Controller
                        control={control}
                        render={({field:{onChange,onBlur, value}}) => (
                            <TextInput 
                                placeholder='Digite a quantidade de litros aqui' 
                                style={[aguaForm.input,errors.litros ? {borderColor: 'red',borderWidth:1}: {}]} 
                                keyboardType='number-pad' 
                                maxLength={3} 
                                value={value} 
                                onChangeText={value=>{
                                    setLitros(litrosFormatter(value, litros))
                                    onChange(litrosFormatter(value, litros))
                                }}
                            />
                        )}
                        name='litros'
                    />
                    {!!errors.litros && <Text style={aguaForm.error}>{errors.litros.message}</Text>}
                </View>
                    
                <Text style={aguaForm.tips}>O quantidade de água é calculada ao longo de 16 horas</Text>

                <TouchableHighlight 
                    style={aguaForm.next} 
                    underlayColor='#114A4A' 
                    onPress={handleSubmit(Submit)}                            
                >
                    <Text style={aguaForm.confirmar}>Confirmar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}