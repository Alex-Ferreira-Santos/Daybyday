import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {aguaForm} from '../../styles/Agua'
import Water from '../../Model/water'
import Agua from '../../Database/agua'
import {notificationManager} from '../../services/NotificationManager'

class AguaForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            litros: '',
            horas: '',
        }
        this.notificador
        this.notificador = notificationManager
        this.notificador.configure()
    }

    insert(litros){
        const water = new Water(litros,18,60)
        const agua = new Agua
        agua.insert(water)
    }

    async update(litros){
        const water = new Water(litros,18,60)
        const agua = new Agua
        await agua.update(water)
    }

    ScheduleNotification = (ml) => {
        notificationManager.ScheduleWaterNotification(ml)
    }

    render() { 
        const params = this.props.route.params
        return(
            <View style={aguaForm.container}>
                <Text style={aguaForm.title}>Lembrete de água</Text>
                <View style={aguaForm.form}>
                    <Text style={aguaForm.dica}>Dica: para saber a quantidade de litros que é recomendado beber, cheque seu peso para aparecer a quantidade ideal</Text>
                    <View style={aguaForm.view}>
                        <Text style={aguaForm.label}>Quantos litros deseja beber:</Text>
                        <TextInput placeholder='Digite a quantidade de litros aqui' style={aguaForm.input} keyboardType='number-pad' maxLength={3} value={this.state.litros} onChangeText={value=>{
                            if(parseFloat(value)>4){
                                value = '4.0'
                            }
                            this.setState({litros:value})
                        }}
                        onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return   
                            }
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(2).toString()
                            if (parseFloat(value.nativeEvent.text) < 1.5) {
                                value.nativeEvent.text = '1.5'; 
                            }
                            this.setState({litros: value.nativeEvent.text}) 
                        }}
                        />
                    </View>
                    
                    <Text style={aguaForm.tips}>O valor minimo para litros é 1,5 e o maximo é 4.</Text>
                    <Text style={aguaForm.tips}>O quantidade de água é calculada ao longo de 18 horas</Text>

                    <TouchableHighlight style={aguaForm.next} underlayColor='#114A4A' onPress={()=>{
                        if(this.state.litros === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(parseInt(this.state.horas)<10){
                            this.setState({horas: '10'})
                        }
                        const litros = this.state.litros * 1000
                        const quantidade = litros / 18
                        if(params.edit){
                            this.update(this.state.litros)
                        }else{
                            this.insert(this.state.litros)
                        }
                        this.ScheduleNotification(quantidade)
                        
                        this.props.navigation.navigate('AguaSuccessful')
                        }}>
                        <Text style={aguaForm.confirmar}>Confirmar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default AguaForm;