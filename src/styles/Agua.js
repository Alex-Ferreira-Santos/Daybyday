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

const aguaForm = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EDDE8',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        margin: 50
    },
    form:{
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    dica:{
        fontSize: 14,
        textAlign: 'center',
        width: '80%',
        margin: 20,
    },
    view:{
        width:'90%',
        marginVertical: 10
    },
    label:{
        fontSize: 18,
        marginBottom:4,
    },
    input:{
        backgroundColor: '#DADADA',
        height: 30,
        borderRadius: 15,
        paddingVertical: 7,
        borderColor: '#707070',
        borderWidth: 1.7
    },
    tips:{
        textAlign: 'center',
        width: '80%',
        marginBottom: 5
    },
    next:{
        backgroundColor: '#177070',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 5
    },
    confirmar:{
        color: 'white',
        fontSize: 18
    }
})

const aguaSuccessful = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EDDE8',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        margin: 50
    },
    notification:{
        width:'80%',
        textAlign: 'center',
        fontSize: 20,
    },
    copo:{
        width: '35%',
        height: '30%',
        margin: 50,
    },
    button:{
        backgroundColor: '#177070',
        width: '70%',
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

export {agua,aguaForm,aguaSuccessful}