import React,{useState} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {useNavigation,useRoute,useFocusEffect} from '@react-navigation/native'
import {aguaOptions} from '../../styles/Agua'
import AguaPopUp from '../../components/Agua/AguaPopUp'
import Agua from '../../Database/agua'
import {notificationManager} from '../../services/NotificationManager'
import { useCallback } from 'react';

 
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
            
        })
        CalculaQuantidade()
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

    function CalculaQuantidade(){
        const litros = agua.litros * 1000
        const amount = litros / agua.horas
        setQuantidade(amount.toFixed(0))
        setTitle(`A próxima notificação virá em ${agua.tempo - new Date().getMinutes()} minutos`)
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
/*
class AguaOptions extends Component {
    constructor(props){
        super(props)
        this.state = {
            visivel:false,
            excludeButton: '',
            textExcludeButton: 'Desativar',
            title: `A próxima notificação virá em 60 minutos`,
            subtitle: 'Desativar notificação',
            agua: [],
            quantidade: 0,
        }
        this.agua = []
        this.ClosePopUp = this.ClosePopUp.bind(this)
        this.ChangeToActivateButton = this.ChangeToActivateButton.bind(this)
        this.ProximaNotificação = this.ProximaNotificação.bind(this)
        this.notification
        this.notification = notificationManager
        this.notification.configure()
    }

    async select(){
        const agua = new Agua
        await agua.select().then( value => {
            this.atribuiValor(value,this.agua)
        })
        this.state.agua = this.agua
        this.CalculaQuantidade()
    }

    async update(tempo){
        const water = new Water(this.state.agua[0][0].litros,this.state.agua[0][0].horas, tempo)
        const agua = new Agua
        await agua.update(water)
        await this.select()
    }

    atribuiValor(data,array){
        array.push(data)
        if(array.length > 1){
          array.shift()
        }
    }

    async ProximaNotificação(){
        await this.select()
        if(this.props.route.params !== undefined){
            this.props.route.params.reload = false
        }
    }

    ClosePopUp(){
        this.setState({visivel:false})
    }

    ChangeToActivateButton(){
        this.setState({excludeButton:{backgroundColor:'#8A53D0'}})
        this.setState({textExcludeButton:'Habilitar'})
        this.setState({title: 'As notificações estão desativadas'})
        this.setState({subtitle: 'Habilitar notificação'})
    }

    ChangeToDesableButton(){
        this.setState({excludeButton:''})
        this.setState({textExcludeButton:'Desativar'})
        this.setState({title: `A próxima notificação virá em ${this.state.agua[0][0].tempo - new Date().getMinutes()} minutos`})
        this.setState({subtitle: 'Desativar notificação'})
    }

    CalculaQuantidade(){
        const litros = this.state.agua[0][0].litros * 1000
        const quantidade = litros / this.state.agua[0][0].horas
        if(this.props.route.params){
            if(this.props.route.params.reload){
                this.setState({quantidade: quantidade.toFixed(0)})
                this.setState({title:`A próxima notificação virá em ${this.state.agua[0][0].tempo - new Date().getMinutes()} minutos`})
            }else{
                this.state.quantidade = quantidade.toFixed(0)
                this.state.title = `A próxima notificação virá em ${this.state.agua[0][0].tempo - new Date().getMinutes()} minutos`
            }
        }else{
            this.setState({quantidade: quantidade.toFixed(0)})
            this.setState({title:`A próxima notificação virá em ${this.state.agua[0][0].tempo - new Date().getMinutes()} minutos`})
        }
        
    }
    
    render(){
        const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8189428112004694/6055209981';
        try{
            if(this.props.route.params.reload!==undefined){
                if(this.props.route.params){
                    this.ProximaNotificação()
                }
            }
        }catch{
            
        }
        if(this.state.agua[0] === undefined){
            this.ProximaNotificação()
            return(
                <View style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'#3EDDE8'}}>
                    <Text style={{fontSize: 50}}>Loading...</Text>
                </View>
            )
        }else{
            return(
            <View style={aguaOptions.container}>
                <Text style={aguaOptions.title}>{this.state.title}</Text>
                <Text style={aguaOptions.quantidade}>Você deve beber um copo de {this.state.quantidade}ml a cada hora</Text>
                <View style={aguaOptions.editar}>
                    <Text style={aguaOptions.subtitle}>Editar Notificação</Text>
                    <Text style={aguaOptions.data}>Litros atuais: {this.state.agua[0][0].litros} litros</Text>
                    <TouchableHighlight style={aguaOptions.editButton} underlayColor='#3A74A9' onPress={()=>this.props.navigation.navigate('AguaForm',{edit:true})}>
                        <Text style={aguaOptions.ButtonText}>Editar</Text>
                    </TouchableHighlight>
                </View>
                <View style={aguaOptions.excluir}>
                    <Text style={aguaOptions.subtitle}>{this.state.subtitle}</Text>
                    <Text>Caso desative pode-se habilitar novamente</Text>
                    <TouchableHighlight style={[aguaOptions.excluirButton,this.state.excludeButton]} underlayColor='#BF4F4F' onPress={()=>{
                        if(this.state.textExcludeButton === 'Desativar'){
                            this.setState({visivel: true})
                        }else{
                            this.ChangeToDesableButton()
                            this.notification.ScheduleWaterNotification(parseInt(this.state.quantidade))
                            alert('As notificações foram habilitadas')
                        }          
                    }}>
                        <Text style={aguaOptions.ButtonText}>{this.state.textExcludeButton}</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight underlayColor='#114A4A' style={aguaOptions.menuButton} onPress={()=>this.props.navigation.navigate('Homepage')}>
                    <Text style={aguaOptions.textButton}>Voltar ao menu</Text>
                </TouchableHighlight>
                {this.state.visivel && (<AguaPopUp invisible={this.ClosePopUp} change={this.ChangeToActivateButton}/>)}
                <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.SMART_BANNER}
                />
            </View>
            ) 
        }
        
    }
}
*/
export default AguaOptions;