import {StyleSheet} from 'react-native'

const massa = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DFCD2A'
    },
    title: {
        fontSize: 30,
        marginBottom: 30,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        width: '85%',
        marginBottom: 20,
    },
    img:{
        width: 171,
        height: 171
    },
    button:{
        backgroundColor: '#323301',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 20,

    },
    textButton:{
        color:'white',
        fontSize: 20
    }
})

const massaForm = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DFCD2A'
    },
    title: {
        fontSize: 30,
        marginTop: 50,
    },
    form:{
        backgroundColor:'white',
        borderRadius: 20,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 60,
    },
    text:{
        textAlign: 'center',
        fontSize: 17,
        width: '80%',
        marginVertical: 20,
    },
    inputBox:{
        width: '90%',
        marginVertical: 10
    },
    label:{
        fontSize: 17
    },
    input:{
        backgroundColor: '#F5C84C',
        borderRadius: 10,
        height: 50,
        paddingVertical: 0,
    },
    button:{
        backgroundColor: '#323301',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10,
    },
    textButton:{
        color: 'white',
        fontSize: 20
    }
})

const massaData = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DFCD2A',
    },
    mainData:{
        fontSize: 30,
        marginTop: 20,
    },
    data:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    textLitros:{
        fontSize: 20,
        marginTop: 20,
    },
    estado:{
        fontSize: 23,
        marginTop: 20,
    },
    customText:{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        width: '90%'
    },
    button:{
        backgroundColor: '#323301',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 40,
        
    },
    textButton:{
        color: 'white',
        fontSize: 20
    },
    bold:{
        fontWeight: 'bold',
    }
})

const massaFinal = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DFCD2A',
    },
    bold:{
        fontWeight: 'bold',
    },
    title:{
        fontSize: 30,
        marginVertical: 40
    },
    agua:{
        fontSize: 20,
        marginBottom: 20,
    },
    mensagem:{
        fontSize: 23,
        textAlign: 'center',
        width: '92%',
        marginBottom: 20
    },
    peso:{
        width: 150,
        height: 150,
    },
    button:{
        backgroundColor: '#323301',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 18,
        
    },
    textButton:{
        color: 'white',
        fontSize: 20
    },
    menuButton:{
        backgroundColor: '#379EC3'
    }
})

export {massa,massaForm,massaData,massaFinal}