import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {massaForm} from '../../styles/Massa'
import Massa from '../../Database/massa'
import Mass from '../../Model/mass'

class MassaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            altura: '',
            peso: ''
        }
    }

    insert(altura,peso){
        const mass = new Mass(altura,peso)
        const massa = new Massa
        massa.insert(mass)
    }

    update(altura,peso){
        const mass = new Mass(altura,peso)
        const massa = new Massa
        massa.update(mass)
    }

    render(){
        const params = this.props.route.params
        return(
            <View style={massaForm.container}>
                <Text style={massaForm.title}>Massa Corporal</Text>
                <View style={massaForm.form}>
                    <Text style={massaForm.text}>Para sabermos seu indice de massa corporal precisaremos  da sua altura e do seu peso</Text>
                    <View style={massaForm.inputBox}>
                        <Text style={massaForm.label}>Altura</Text>
                        <TextInput placeholder='Digite sua altura em metros aqui' style={massaForm.input} maxLength={4} onChangeText={ value =>{
                            if(parseFloat(value)>2.50){
                                value = '2.50'
                            }
                            this.setState({altura: value})
                        }} value={this.state.altura}  onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return   
                            }
                            if(this.state.altura<1.00){
                                value.nativeEvent.text = '1.00'
                            }
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(2).toString()
                            this.setState({altura: value.nativeEvent.text}) 
                        }} keyboardType='number-pad'/>
                    </View>
                    <View style={massaForm.inputBox}>
                        <Text style={massaForm.label}>Peso</Text>
                        <TextInput placeholder='Digite seu peso em kg aqui' style={massaForm.input} maxLength={5} onChangeText={ value =>{
                            if(parseFloat(value)>250){
                                value = '250.0'
                            }
                            this.setState({peso: value})
                        }} keyboardType='number-pad' value={this.state.peso}
                        onEndEditing={(value)=>{
                            if(value.nativeEvent.text === ''){
                                return   
                            }
                            if(this.state.peso<25.0){
                                value.nativeEvent.text = '25.0'
                            }
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(1).toString()
                            this.setState({peso: value.nativeEvent.text}) 
                        }}/>
                    </View>
                    <TouchableHighlight style={massaForm.button} underlayColor='#4E5000' onPress={()=>{
                        if(this.state.altura === '' || this.state.peso === ''){
                            alert('Ainda há campos incompletos')
                            return
                        }
                        if(params.edit){
                            this.update(this.state.altura,this.state.peso)
                        }else{
                            this.insert(this.state.altura,this.state.peso)
                        }
                        this.props.navigation.navigate('MassaData')
                    }} keyboardType='number-pad'>
                        <Text style={massaForm.textButton}>Confirmar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default MassaForm