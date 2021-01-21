import {StyleSheet} from 'react-native'

const extraHome = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(113,113,113,0.8)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        backgroundColor:'white',
        borderRadius: 20,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    copyrightButton:{
        backgroundColor: '#FF8C8C',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    buttonText:{
        fontSize: 15,
    },
    admButton:{
        backgroundColor: '#55FEFE',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 10,
        marginVertical: 10,
    },
    contato:{
        fontSize: 20,
        marginBottom: 10
    },
    send:{
        fontSize: 18,
        marginBottom:5,
    },
    email:{
        fontSize:15,
        fontWeight:'bold'
    },
    backButton:{
        backgroundColor: '#79D758',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 20,
    }
})

export {extraHome}