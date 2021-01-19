import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {massaForm} from '../../styles/Massa'

class MassaForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            altura: ''
        }
    }
    render(){
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
                            value.nativeEvent.text = parseFloat(value.nativeEvent.text).toFixed(2).toString()
                            this.setState({altura: value.nativeEvent.text}) 
                        }} keyboardType='number-pad'/>
                    </View>
                    <View style={massaForm.inputBox}>
                        <Text style={massaForm.label}>Peso</Text>
                        <TextInput placeholder='Digite seu peso em kg aqui' style={massaForm.input}/>
                    </View>
                    <TouchableHighlight style={massaForm.button} underlayColor='#4E5000' onPress={()=>{

                    }} keyboardType='number-pad'>
                        <Text style={massaForm.textButton}>Confirmar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

export default MassaForm