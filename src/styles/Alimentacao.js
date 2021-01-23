import {StyleSheet} from 'react-native'

const alimentacaoHome = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59A73D'
    },
    title:{
        fontSize: 30,
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        width: '90%',
        marginBottom: 20,
    },
    brocolis:{
        width: 171,
        height: 171,
        marginBottom: 20,
    },
    button:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    }
})

export {alimentacaoHome}