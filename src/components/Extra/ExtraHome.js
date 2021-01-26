import React,{Component} from 'react';
import {View,Text, TouchableHighlight} from 'react-native'
import {extraHome} from '../../styles/Extra'
import ExtraCopy from './ExtraCopy'
import ExtraAdm from './ExtraAdm'

class ExtraHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copyVisible: false,
            admVisible: false,
        }
        this.ClosePopup = this.ClosePopup.bind(this)
    }

    ClosePopup(){
        this.setState({copyVisible: false})
        this.setState({admVisible: false})
    }

    render() {
        return(
            <View style={extraHome.container}>
                <View style={extraHome.main}>
                    <TouchableHighlight style={extraHome.copyrightButton} underlayColor='#FF9E9E' onPress={()=>{this.setState({copyVisible: true})}}>
                        <Text style={extraHome.buttonText}>Copyrights</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={extraHome.admButton} underlayColor='#92F3F3' onPress={()=>{this.setState({admVisible:true})}}>
                        <Text style={extraHome.buttonText}>Modo adm</Text>
                    </TouchableHighlight>

                    <Text style={extraHome.contato}>Contato</Text>
                    <Text style={extraHome.send}>Mande um email para:</Text>
                    <Text style={extraHome.email}>email@gmail.com</Text>

                    <TouchableHighlight style={extraHome.backButton} underlayColor='#5AA73F' onPress={()=>{
                        this.props.close()
                    }}>
                        <Text style={extraHome.buttonText}>Voltar</Text>
                    </TouchableHighlight>
                </View>
                {this.state.copyVisible && (<ExtraCopy close={this.ClosePopup}/>)}
                {this.state.admVisible && (<ExtraAdm close={this.ClosePopup} setAdm={this.props.setAdm}/>)}
            </View>
        )
    }
}

export default ExtraHome