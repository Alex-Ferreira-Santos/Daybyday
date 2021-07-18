import React,{useState} from 'react';
import {View,Text, TouchableHighlight,Linking,Modal} from 'react-native'
import {extraHome} from '../../styles/Extra'
import ExtraCopy from './ExtraCopy'

function ExtraHome({close}){
    const [copyVisible,setCopyVisible] = useState(false)

    function ClosePopup(){
        setCopyVisible(false)
    }

    return(
        <View style={extraHome.container}>
            <View style={extraHome.main}>
                <TouchableHighlight style={extraHome.copyrightButton} underlayColor='#FF9E9E' onPress={()=>{setCopyVisible(true)}}>
                    <Text style={extraHome.buttonText}>Copyrights</Text>
                </TouchableHighlight>

                <Text style={extraHome.contato}>Contato</Text>
                <Text style={extraHome.send}>Mande um email para:</Text>
                <Text style={extraHome.email} onPress={()=>Linking.openURL('mailto:ricotefs@gmail.com')}>ricotefs@gmail.com</Text>

                <TouchableHighlight 
                    style={extraHome.backButton} 
                    underlayColor='#5AA73F' 
                    onPress={()=>{close()}}
                >
                    <Text style={extraHome.buttonText}>Voltar</Text>
                </TouchableHighlight>
            </View>
            <Modal
                visible={copyVisible}
                animationType='fade'
                transparent={true}
            >
                <ExtraCopy close={ClosePopup}/>
            </Modal>
        </View>
    )
}

export default ExtraHome