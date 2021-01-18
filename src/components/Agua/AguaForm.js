import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {aguaForm} from '../../styles/Agua'

class AguaForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            litros: '',
            horas: '',
        }
    }
    render() {
        return(
            <View style={aguaForm.container}>
                <Text style={aguaForm.title}>Lembrete de água</Text>
                <View style={aguaForm.form}>
                    <Text style={aguaForm.dica}>Dica: para saber a quantidade de litros que é recomendado beber, cheque seu peso para aparecer a quantidade ideal</Text>
                    <View style={aguaForm.view}>
                        <Text style={aguaForm.label}>Quantos litros deseja beber:</Text>
                        <TextInput placeholder='Digite a quantidade de litros aqui' style={aguaForm.input} keyboardType='number-pad' maxLength={1} value={this.state.litros} onChangeText={value=>{
                            if(parseInt(value)>4){
                                value = '4'
                            }
                            this.setState({litros:value})
                        }}/>
                    </View>
                    <View style={aguaForm.view}>
                        <Text style={aguaForm.label}>Em quanto tempo:</Text>
                        <TextInput placeholder='Digite a quantidade de Horas aqui' style={aguaForm.input} keyboardType='number-pad' maxLength={2} value={this.state.horas} onChangeText={value=>{
                            if (parseInt(value) > 20) {
                                value = '20';
                            }
                            this.setState({horas: value}) 
                        }}
                        onEndEditing={(value)=>{
                            if (parseInt(value.nativeEvent.text) < 10) {
                                value = '10';
                                this.setState({horas: value}) 
                            }
                        }}
                        />
                    </View>
                    <Text style={aguaForm.tips}>O valor maximo para litros é 4. Para as horas o minimo é 10 e o maximo é 20</Text>
                    <Text style={aguaForm.tips}>De acordo com a quantidade de horas, o tempo da notificação vai mudar</Text>

                    <TouchableHighlight style={aguaForm.next} underlayColor='#114A4A' onPress={()=>{
                        if(this.state.horas === '' && this.state.litros === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(parseInt(this.state.horas)<10){
                            this.setState({horas: '10'})
                        }
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