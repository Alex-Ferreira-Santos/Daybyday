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
        width: '80%',
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

export {massa}