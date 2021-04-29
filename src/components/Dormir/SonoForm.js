import React,{Component} from 'react';
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import {sonoForm} from '../../styles/Sono'
import DateTimePicker from '@react-native-community/datetimepicker'
import Sono from '../../Database/Sono';
import Sleep from '../../Model/sleep'
import {notificationManager} from '../../services/NotificationManager'

class SonoForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            hour: '',
            sleep: ''
        }
        this.notification
        this.notification = notificationManager
        this.notification.configure()
        let mouth
        if(new Date().getUTCMonth() + 1 > 9){
            mouth = new Date().getUTCMonth() + 1
        }else{
            mouth = `0${new Date().getUTCMonth() + 1}`
        }
    }

    insert(horasDormidas,horaAcordar){
        const sono = new Sono
        const sleep = new Sleep(horasDormidas,horaAcordar)
        sono.insert(sleep)
    }

    update(horasDormidas,horaAcordar){
        const sono = new Sono
        const sleep = new Sleep(horasDormidas,horaAcordar)
        sono.update(sleep)
    } 

    render(){
        const params = this.props.route.params
        return (
            <View style={sonoForm.container}>
                <Text style={sonoForm.title}>Auxiliador de sono</Text>
                <View style={sonoForm.form}>
                    <Text style={sonoForm.tip}>Para comerçar, informe a quantidade de horas que você dormiu na última noite e a hora que deseja acordar</Text>
                    <View style={sonoForm.section}>
                        <Text style={sonoForm.label}>Horas dormidas</Text>
                        <TextInput placeholder='Digite a quantidade de horas' placeholderTextColor='#4F58A1' style={sonoForm.input} value={this.state.sleep} keyboardType='number-pad' maxLength={2} onChangeText={value=>{
                            if(parseInt(value)>24){
                                value = '24'
                            }
                            this.setState({sleep:value})
                        }} onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return
                            }
                            if (parseInt(value.nativeEvent.text) < 1) {
                                value = '1';
                                this.setState({sleep: value}) 
                            }
                        }}/>
                    </View>
                    <View style={sonoForm.section}>
                        <Text style={sonoForm.label}>Hora que deseja acordar</Text>
                        <TextInput placeholder='Selecione a hora que deseja acordar' style={sonoForm.input} placeholderTextColor='#4F58A1' onFocus={()=>{this.setState({visible: true})}} value={this.state.hour} showSoftInputOnFocus={false}/>
                        {this.state.visible && (<DateTimePicker mode={'time'} value={new Date()} onChange={(value,data)=>{
                            this.setState({visible: false})
                            if(data === undefined){
                                return
                            }
                            this.setState({hour: data.toString().slice(15,21)})
                        }} is24Hour={true}/>)}
                    </View>
                    <TouchableHighlight style={sonoForm.button} underlayColor='#00104A' onPress={()=>{
                        if(this.state.hour === '' || this.state.sleep === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(params.edit){
                            this.update(this.state.sleep,this.state.hour)
                        }else{
                            this.insert(this.state.sleep,this.state.hour)
                        }
                        this.notification.ScheduleSleepNotification(this.state.hour)
                        this.props.navigation.navigate('SonoData')
                    }}>
                        <Text style={sonoForm.textButton}>Confirmar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default SonoForm;