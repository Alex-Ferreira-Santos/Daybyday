import {StyleSheet} from 'react-native'

const agua = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3EDDE8',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        margin: 50,
        fontWeight: 'bold'
    },
    text:{
        width: '70%',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 30
        
    },
    copo:{
        width: 171,
        height: 171,
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 25,
        maxWidth: '90%',
        textAlign: 'center'
    },
    form:{
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    dica:{
        fontSize: 18,
        textAlign: 'justify',
        width: '90%',
        marginVertical: 20
    },
    view:{
        width:'90%',
        marginBottom: 20
    },
    label:{
        fontSize: 22,
        marginBottom:4,
    },
    input:{
        backgroundColor: '#C5FBFF',
        height: 50,
        borderRadius: 10,
        paddingVertical: 7,
        fontSize: 20
    },
    tips:{
        textAlign: 'justify',
        width: '90%',
        marginBottom: 10,
        fontSize: 15,
    },
    next:{
        backgroundColor: '#177070',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 5,
        marginVertical: 5
    },
    confirmar:{
        color: 'white',
        fontSize: 18
    },
    error:{
        color: 'red',
        fontSize: 15,
    }
})

const aguaSuccessful = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EDDE8',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        margin: 50,
        fontWeight: 'bold',
    },
    notification:{
        width:'80%',
        textAlign: 'center',
        fontSize: 20,
    },
    copo:{
        width: 171,
        height: 171,
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

const aguaOptions = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3EDDE8',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title:{
        textAlign: 'center',
        fontSize: 25,
        margin: 20,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 25,
        margin: 10,
    },
    editar:{
        backgroundColor: 'white',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingBottom: 20,
        marginBottom: 30,
    },
    data:{
        fontSize: 18
    },
    editButton:{
        backgroundColor: '#5AB0FF',
        paddingVertical: 3,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop:20,
    },
    ButtonText:{
        fontSize: 20
    },
    excluir:{
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    excluirButton:{
        backgroundColor: '#E85A5A',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 20,
        paddingVertical: 3,
    },
    menuButton:{
        backgroundColor: '#177070',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 5,
        marginTop: 20,
    },
    textButton:{
        fontSize: 20,
        color: 'white'
    },
    quantidade:{
        fontSize: 15,
        marginBottom: 10
    }
})

const aguaPopup = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        top:0,
        backgroundColor: 'rgba(26,90,95,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    section:{
        backgroundColor: 'white',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingBottom: 15,
    },
    text:{
        fontSize: 20,
        width: '88%',
        textAlign: 'center',
        marginVertical: 30,
    },
    backButton:{
        backgroundColor: '#c4c4c4',
        borderRadius: 20,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginVertical: 5
    },
    back:{
        fontSize: 16
    },
    desableButton:{
        backgroundColor: '#9E0D0D',
        borderRadius: 20,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        marginVertical: 5
    },
    desable:{
        fontSize: 16,
        color: 'white'
    }
})

export {agua,aguaForm,aguaSuccessful,aguaOptions,aguaPopup}