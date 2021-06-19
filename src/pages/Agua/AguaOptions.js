import React,{useState, useCallback} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {useNavigation,useFocusEffect} from '@react-navigation/native'
import {aguaOptions} from '../../styles/Agua'
import {AguaPopUp} from '../../components/Agua/AguaPopUp'
import Agua from '../../Database/agua'
import {notificationManager} from '../../services/NotificationManager'

export function AguaOptions(){
    const [visivel,setVisivel] = useState(false)
    const [excludeButton,setExcludeButton] = useState('')
    const [textExcludeButton,setTextExcludeButton] = useState('Desativar')
    const [title,setTitle] = useState('A próxima notificação virá em 60 minutos')
    const [subtitle,setSubtitle] = useState('Desativar notificação')
    const [agua,setAgua] = useState({})
    const [quantidade,setQuantidade] = useState(0)
    const notification = notificationManager
    notification.configure()
    const navigation = useNavigation()

    async function Select(){
        const water = new Agua
        await water.select().then( value => {
            setAgua(...value)
            CalculaQuantidade(...value)
        })
    }

    function ClosePopUp(){
        setVisivel(false)
    }

    function ChangeToActivateButton(){
        setExcludeButton({backgroundColor:'#8A53D0'})
        setTextExcludeButton('Habilitar')
        setTitle('As notificações estão desativadas')
        setSubtitle('Habilitar notificação')
    }

    function ChangeToDesableButton(){
        setExcludeButton('')
        setTextExcludeButton('Desativar')
        setTitle(`A próxima notificação virá em ${agua.tempo - new Date().getMinutes()} minutos`)
        setSubtitle('Desativar notificação')
    }

    function CalculaQuantidade(value){
        const litros = value.litros * 1000
        const amount = litros / value.horas
        setQuantidade(amount.toFixed(0))
        setTitle(`A próxima notificação virá em ${value.tempo - new Date().getMinutes()} minutos`)
    }

    useFocusEffect(useCallback(()=>{
        Select()
    },[]))
    
    const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/6055209981';
    if(agua.litros === undefined){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'#3EDDE8'}}>
                <Text style={{fontSize: 50}}>Loading...</Text>
            </View>
        )
    }else{
        return(
            <View style={aguaOptions.container}>
                <Text style={aguaOptions.title}>{title}</Text>
                <Text style={aguaOptions.quantidade}>Você deve beber um copo de {quantidade}ml a cada hora</Text>
                <View style={aguaOptions.editar}>
                    <Text style={aguaOptions.subtitle}>Editar Notificação</Text>
                    <Text style={aguaOptions.data}>Litros atuais: {agua.litros} litros</Text>
                    <TouchableHighlight style={aguaOptions.editButton} underlayColor='#3A74A9' onPress={()=>navigation.navigate('AguaForm',{edit:true})}>
                        <Text style={aguaOptions.ButtonText}>Editar</Text>
                    </TouchableHighlight>
                </View>
                <View style={aguaOptions.excluir}>
                    <Text style={aguaOptions.subtitle}>{subtitle}</Text>
                    <Text>Caso desative pode-se habilitar novamente</Text>
                    <TouchableHighlight style={[aguaOptions.excluirButton,excludeButton]} underlayColor='#BF4F4F' onPress={()=>{
                        if(textExcludeButton === 'Desativar'){
                            setVisivel(true)
                        }else{
                            ChangeToDesableButton()
                            notification.ScheduleWaterNotification(parseInt(quantidade))
                            alert('As notificações foram habilitadas')
                        }          
                    }}>
                        <Text style={aguaOptions.ButtonText}>{textExcludeButton}</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight underlayColor='#114A4A' style={aguaOptions.menuButton} onPress={()=>navigation.navigate('Homepage')}>
                    <Text style={aguaOptions.textButton}>Voltar ao menu</Text>
                </TouchableHighlight>
                {visivel && (<AguaPopUp invisible={ClosePopUp} change={ChangeToActivateButton}/>)}
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.SMART_BANNER}
                    
                /> 
            </View>
        ) 
    }
}
