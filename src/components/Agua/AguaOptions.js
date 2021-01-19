import React,{Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native'
import {aguaOptions} from '../../styles/Agua'
import AguaPopUp from './AguaPopUp'
 
class AguaOptions extends Component {
    constructor(props){
        super(props)
        this.state = {
            visivel:false,
            excludeButton: '',
            textExcludeButton: 'Desativar',
            title: 'A proxima notificação virá em x minutos',
            subtitle: 'Desativar notificação'
        }
        this.ClosePopUp = this.ClosePopUp.bind(this)
        this.ChangeToActivateButton = this.ChangeToActivateButton.bind(this)
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
        this.setState({title: 'A proxima notificação virá em x minutos'})
        this.setState({subtitle: 'Desativar notificação'})
    }
    
    render(){
        return(
            <View style={aguaOptions.container}>
                <Text style={aguaOptions.title}>{this.state.title}</Text>
                <View style={aguaOptions.editar}>
                    <Text style={aguaOptions.subtitle}>Editar Notificação</Text>
                    <Text style={aguaOptions.data}>Litros atuais: x litros</Text>
                    <Text style={aguaOptions.data}>Horas atuais: x horas</Text>
                    <TouchableHighlight style={aguaOptions.editButton} underlayColor='#3A74A9' onPress={()=>this.props.navigation.navigate('AguaForm')}>
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
                            alert('As notificações foram habilitadas')
                        }          
                    }}>
                        <Text style={aguaOptions.ButtonText}>{this.state.textExcludeButton}</Text>
                    </TouchableHighlight>
                </View>
                {this.state.visivel && (<AguaPopUp invisible={this.ClosePopUp} change={this.ChangeToActivateButton}/>)}
            </View>
        )
    }
}

export default AguaOptions;