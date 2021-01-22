import React,{Component} from 'react';
import {View,Text,TextInput,TouchableHighlight} from 'react-native'
import {extraAdm} from '../../styles/Extra'
import {sha512} from 'react-native-sha512'
// colocar criptografia na senha

class ExtraAdm extends Component{
    constructor(props){
        super(props)
        this.state = {
            failed: '',
            password: '',
        }
    }
    render(){
        return(
            <View style={extraAdm.container}>
                <View style={extraAdm.main}>
                    <Text style={extraAdm.title}>Modo adm</Text>
                    <Text style={extraAdm.label}>Digite sua senha</Text>
                    <TextInput placeholder='Digite sua senha aqui' secureTextEntry={true} style={extraAdm.input} onChangeText={ value =>{
                        sha512(value).then(hash =>{
                            this.setState({password: hash})
                        })
                    }}/>
                    <Text style={extraAdm.fail}>{this.state.failed}</Text>
                    <View style={extraAdm.buttons}>
                        <TouchableHighlight style={extraAdm.backButton} underlayColor='#7E90BD' onPress={()=>{this.props.close()}}>
                            <Text style={extraAdm.buttonText}>Voltar</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={extraAdm.verifiedButton} underlayColor='#30A9A2' onPress={()=>{
                            if(this.state.password === 'x'){




                                // colocar comparação









                                alert('Modo adm está ativado')
                                this.props.close()
                            }else{
                                this.setState({failed:'senha incorreta'})
                                return
                            }
                        }}>
                            <Text style={extraAdm.buttonText}>Verificar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default ExtraAdm