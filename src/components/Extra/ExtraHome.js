import React,{Component} from 'react';
import {View,Text, TouchableHighlight,Linking} from 'react-native'
import {extraHome} from '../../styles/Extra'
import ExtraCopy from './ExtraCopy'

class ExtraHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            copyVisible: false,
        }
        this.ClosePopup = this.ClosePopup.bind(this)
    }

    ClosePopup(){
        this.setState({copyVisible: false})
    }

    render() {
        return(
            <View style={extraHome.container}>
                <View style={extraHome.main}>
                    <TouchableHighlight style={extraHome.copyrightButton} underlayColor='#FF9E9E' onPress={()=>{this.setState({copyVisible: true})}}>
                        <Text style={extraHome.buttonText}>Copyrights</Text>
                    </TouchableHighlight>

                    <Text style={extraHome.contato}>Contato</Text>
                    <Text style={extraHome.send}>Mande um email para:</Text>
                    <Text style={extraHome.email} onPress={()=>Linking.openURL('mailto:ricotefs@gmail.com')}>ricotefs@gmail.com</Text>

                    <TouchableHighlight style={extraHome.backButton} underlayColor='#5AA73F' onPress={()=>{
                        this.props.close()
                    }}>
                        <Text style={extraHome.buttonText}>Voltar</Text>
                    </TouchableHighlight>
                </View>
                {this.state.copyVisible && (<ExtraCopy close={this.ClosePopup}/>)}
            </View>
        )
    }
}

export default ExtraHome