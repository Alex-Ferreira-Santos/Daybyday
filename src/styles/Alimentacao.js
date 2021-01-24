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

const alimentacaoMain = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59A73D'
    },
    title:{
        fontSize: 30,
        marginVertical: 30,
    },
    text:{
        fontSize: 20,
        marginBottom: 20
    },
    dietas:{
        backgroundColor: 'white',
        width: '80%',
        maxHeight: 300,
        borderWidth: 1
    },
    button:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 20
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    dieta:{
        width: '100%',
        backgroundColor: '#BEF394',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    dietaName:{
        fontSize: 18
    }
})

export {alimentacaoHome,alimentacaoMain}