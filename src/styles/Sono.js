import {StyleSheet} from 'react-native'

const sono = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#483FB1',
    },
    title:{
        color: 'white',
        fontSize: 30,
        marginVertical: 50
    },
    description:{
        textAlign: 'center',
        width: '90%',
        fontSize: 20,
        color: 'white',
    },
    lua:{
        width: 171,
        height: 171,
        marginVertical: 30
    },
    button:{
        backgroundColor: '#001768',
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
    }
})

const sonoForm = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#483FB1',
    },
    title:{
        color: 'white',
        fontSize: 30,
        marginVertical: 30
    },
    form:{
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    },
    tip:{
        fontSize: 20,
        textAlign: 'center',
        width: '70%',
        marginVertical: 20,
    },
    section:{
        width: '90%',
        marginVertical: 10
    },
    label:{
        fontSize: 17,
        marginBottom: 4
    },
    input:{
        backgroundColor: '#B2BAFC',
        height: 30,
        paddingVertical: 0,
        borderRadius: 20,
        borderColor: '#5C6DFF',
        borderWidth: 1.5,
    },
    button:{
        backgroundColor: '#001768',
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

const sonoData = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#483FB1',
    },
    title:{
        color:'white',
        fontSize: 25,
        textAlign: 'center',
        width: '86%',
        marginVertical: 40
    },
    customText:{
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        width: '90%',
        marginBottom: 30
    },
    alert:{
        color: 'white',
        fontSize: 20,
        width: '90%',
        textAlign: 'center',
        marginBottom: 30
    },
    changeButton:{
        backgroundColor: '#001768',
        width: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10,
    },
    ButtonText:{
        color: 'white',
        fontSize: 20
    },
    desableButton:{
        backgroundColor: '#680000',
        width: '67%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10,
    },
    menuButton:{
        backgroundColor: '#14B023',
        width: '67%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10,
    }
})

const sonoPopup = StyleSheet.create({
    container:{
        position: 'absolute',
        height: '100%',
        width: '100%',
        top:0,
        backgroundColor: 'rgba(35,30,86,0.8)',
        justifyContent: 'center',
        alignItems:'center'
    },
    popup:{
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: 20,
        paddingVertical: 20,
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        width: '85%',
        marginBottom: 20,
    },
    backButton:{
        backgroundColor: '#C4C4C4',
        width: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10,
    },
    backButtonText:{
        fontSize: 15
    },
    desableButton:{
        backgroundColor: '#9E0D0D',
        width: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10,
    },
    desableButtonText:{
        fontSize: 15,
        color:'white',
    },

})

export {sono,sonoForm,sonoData, sonoPopup}