import React,{useState,useCallback} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {useFocusEffect,useNavigation} from '@react-navigation/native'
import Sono from '../../Database/Sono';
import {sonoData} from '../../styles/Sono'
import {SonoPopup} from '../../components/Dormir/SonoPopup'
import {notificationManager} from '../../services/NotificationManager'

export function SonoData(){
    const [visible,setVisible] = useState(false)
    const [enable,setEnable] = useState({})
    const [text,setText] = useState('Desativar as notificações')
    const [underlayColor,setUnderlayColor] = useState('#810000')
    const [sono,setSono] = useState({})
    const [horas, setHoras] = useState('')
    const [frase, setFrase] = useState('')
    const notification = notificationManager
    notification.configure()
    const navigation = useNavigation()

    useFocusEffect(useCallback(()=>{
        select()
    },[]))


    function closePopup(){
        setVisible(false)
    }

    function desableNotification(){
        setEnable({backgroundColor: '#1EC0B7'})
        setText('Habilitar notificações')
        setUnderlayColor('#199891')
    }

    function enableNotfication(){
        setEnable({})
        setText('Desativar as notificações')
        setUnderlayColor('#810000')
    }

    async function select(){
        const sono = new Sono
        await sono.select().then( value => {
            setSono(...value)
            CustomText(...value)
        })    
    }

    function CustomText(value){
        setHoras(value.horasDormidas)
        if(value.horasDormidas<6){
            setFrase('horas de sono, não é o tempo ideal para dormir, você está dormindo bem pouco, tente ir para cama mais cedo se possivel para conseguir ajeitar seu sono, dormir pouco pode resultar em cansaço excessivo e vai te prejudicar')
        } else if(value.horasDormidas>=6 && value.horasDormidas<8){
            setFrase('horas de sono, não é o tempo ideal para dormir mas está perto de estar ideal, tente tirar um cochilo de 1 hora para poder ter as horas arrumadas')
        }else if(value.horasDormidas>=8 && value.horasDormidas<10){
            setFrase('horas de sono, parabéns, você está com o sono em dia')
        }else if(value.horasDormidas>=10 && value.horasDormidas<12){
            setFrase('horas de sono, você está dormindo mais do que devia, tente colocar um despertador para acordar no horário certo para regular esse sono')
        }else if(value.horasDormidas>=12){
            setFrase('horas de sono, você está dormindo bem acima do ideal, dormir essa quantidade pode resultar em sérios problemas de saúde')
        }
    }

    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/7919504739';
               
    return(
        <View style={sonoData.container}>
            <Text style={sonoData.title}>Na última noite você dormiu {horas} horas</Text>
            <Text style={sonoData.customText}>{horas} {frase}</Text>
            <Text style={sonoData.alert}>Para te alertar a hora certa de dormir, uma notificação será enviada para você de acordo com a hora que você deseja dormir</Text>

            <TouchableHighlight 
                style={sonoData.changeButton} 
                underlayColor='#00104A' 
                onPress={()=>navigation.navigate('SonoForm',{edit:true})}
            >
                <Text style={sonoData.ButtonText}>Trocar os horários</Text>
            </TouchableHighlight>

            <TouchableHighlight 
                style={[sonoData.desableButton,enable]} 
                underlayColor={underlayColor} 
                onPress={()=>{
                    if(text === 'Desativar as notificações'){
                        setVisible(true)
                    }else{
                        alert('As notificações foram habilitadas')
                        notification.ScheduleSleepNotification(horas.toString())
                        enableNotfication()
                    }
                }}
            >
                <Text style={sonoData.ButtonText}>{text}</Text>
            </TouchableHighlight>

            <TouchableHighlight 
                style={sonoData.menuButton} 
                underlayColor='#118F1D' 
                onPress={()=>navigation.navigate('Homepage')}
            >
                <Text style={sonoData.ButtonText}>Voltar ao menu</Text>
            </TouchableHighlight>

            {visible && (<SonoPopup close={closePopup} desable={desableNotification}/>)}
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.SMART_BANNER}
            />
        </View>
    )
    
}
