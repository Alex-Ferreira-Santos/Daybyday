import React,{Component} from 'react';
import {View,Text,TouchableHighlight,TextInput} from 'react-native'
import {sonoForm} from '../../styles/Sono'
import DateTimePicker from '@react-native-community/datetimepicker'

class SonoForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            hour: '',
            sleep: ''
        }
    }
    render(){
        return (
            <View style={sonoForm.container}>
                <Text style={sonoForm.title}>Auxiliador de sono</Text>
                <View style={sonoForm.form}>
                    <Text style={sonoForm.tip}>Para comerçar, informe a quantidade de horas que você dormiu na última noite e a hora que deseja acordar</Text>
                    <View style={sonoForm.section}>
                        <Text style={sonoForm.label}>Horas dormidas</Text>
                        <TextInput placeholder='Digite a quantidade de horas' placeholderTextColor='#4F58A1' style={sonoForm.input} keyboardType='number-pad' maxLength={2} onChangeText={value=>{
                            value = parseInt(value).toString()
                            this.setState({sleep:value})
                        }}/>
                    </View>
                    <View style={sonoForm.section}>
                        <Text style={sonoForm.label}>Hora que deseja acordar</Text>
                        <TextInput placeholder='Selecione a hora que deseja acordar' style={sonoForm.input} placeholderTextColor='#4F58A1' onFocus={()=>{this.setState({visible: true})}} value={this.state.hour}/>
                        {this.state.visible && (<DateTimePicker mode={'time'} value={new Date()} onChange={(value,data)=>{
                            this.setState({visible: false})
                            if(data === undefined){
                                return
                            }
                            this.setState({hour: data.toString().slice(15,21)})
                        }} is24Hour={true}/>)}
                    </View>
                    <TouchableHighlight style={sonoForm.button} underlayColor='#00104A' onPress={()=>{}}>
                        <Text style={sonoForm.textButton}>Confirmar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default SonoForm;