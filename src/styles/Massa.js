import {StyleSheet} from 'react-native'

const massa = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
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
        justifyContent: 'flex-start',
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
        backgroundColor: '#E5E5E5',
        borderRadius: 20,
        height: 30,
        paddingVertical: 0,
        borderColor: '#787878',
        borderWidth: 1
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

export {massa,massaForm}