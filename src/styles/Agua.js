import {StyleSheet} from 'react-native'

const agua = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3EDDE8',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        margin: 50
    },
    text:{
        width: '70%',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30
        
    },
    copo:{
        width: '35%',
        height: '30%',
        marginBottom: 20,
    },
    button:{
        backgroundColor: '#177070',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 5
    },
    textButton:{
        fontSize: 20,
        color: 'white'
    }
})

export {agua}