import React,{useState,useCallback} from 'react';
import {View, Text, TouchableHighlight} from 'react-native'
import {massaData} from '../../styles/Massa'
import Massa from '../../Database/massa'
import {useNavigation, useFocusEffect} from '@react-navigation/native'

function MassaData(){
    const [loading,setLoading] = useState(true)
    const [IMC,setIMC] = useState('')
    const [litros,setLitros] = useState('')
    const [categoria,setCategoria] = useState('')
    const [description,setDescription] = useState('')
    const navigation = useNavigation()

    async function Select(){
        setLoading(true)
        const massa = new Massa
        await massa.select().then( value => {
            CalculaIMC(...value)
            CalculaLitros(...value)
            CustomFrase(...value)
            setLoading(false)
        })
        
    }

    function CalculaIMC(value){
        const IMC = value.peso / (value.altura * value.altura)
        setIMC(IMC.toFixed(1))
    }

    function CalculaLitros(value){
        const Litros = value.peso * 0.035
        setLitros(Litros.toFixed(1))
    }

    function CustomFrase(value){
        const IMC = value.peso / (value.altura * value.altura)
        if(IMC <= 18.5){
            setCategoria('Magreza')
            setDescription(', você está abaixo do peso ideal, recomendamos que você busque uma dieta focada em ganho de peso, ficar muito abaixo do peso pode ser perigoso para sua saúde')
        }else if(IMC > 18.5 && IMC < 24.9){
            setCategoria('Normal')
            setDescription(', parabéns você está no peso ideal, mas fique de olho para se manter nesse estado ideal')
        }else if(IMC > 25 && IMC < 29.9){
            setCategoria('Sobrepeso')
            setDescription(', você está um pouco acima do peso da média recomendada, para diminuir isto você pode fazer uma dieta que possa regular sua alimentação')
        }else if(IMC > 30 && IMC < 39.9){
            setCategoria('Obesidade')
            setDescription(', você está acima do peso ideal, recomendamos que faça dietas e busque fazer exercícios com acompanhamento profissional, estar com obesidade pode ser perigo para sua saúde então não ignore isso')
        }else if(IMC >= 40){
            setCategoria('Obesidade Grave')
            setDescription(', você está muito acima do peso ideal, isto é um grande perigo para sua saúde, recomendamos que você busque ajuda médica imediatamente para te ajudar a sair desse estado')
        }
    }

    useFocusEffect(useCallback( () => {
        Select()
    },[]))

    if(loading){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems: 'center',backgroundColor:'#DFCD2A'}}>
                <Text style={{fontSize: 50}}>Loading...</Text>
            </View>
        )
    }
    return (
        <View style={massaData.container}>
            <View style={massaData.data}>
                <Text style={massaData.mainData}>Seu IMC é de:</Text>
                <Text style={[massaData.mainData,massaData.bold]}>{IMC}</Text>
            </View>
            <Text style={massaData.estado}>Sua classificação é:</Text>
            <Text style={massaData.customText}><Text style={massaData.bold}>{categoria}</Text>{description}</Text>
            <Text style={massaData.textLitros}>Quantidade ideal de água por dia: </Text>
            <Text style={massaData.textLitros}><Text style={massaData.bold}>{litros}</Text> litros</Text>
            <TouchableHighlight 
                style={massaData.button} 
                underlayColor='#4E5000' 
                onPress={()=>navigation.navigate('MassaFinal')}
            >
                <Text style={massaData.textButton}>Próximo</Text>
            </TouchableHighlight>
        </View>
    )
}



export default MassaData