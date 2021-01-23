import {StyleSheet} from 'react-native'

const tarefaHome = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B94B4B',
    },
    title:{
        fontSize: 30,
        marginVertical: 30
    },
    text:{
        fontSize: 20,
        marginVertical: 20,
        width: '85%',
        textAlign: 'center'
    },
    img:{
        width:171,
        height:171,
        marginBottom: 20
    },
    button:{
        backgroundColor: '#680000',
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    }

})

const tarefaMain = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B94B4B',
    },
    title:{
        fontSize: 30,
        marginVertical: 10
    },
    text:{
        fontSize: 15,
        textAlign: 'center',
        width: '50%',
        marginVertical: 10
    },
    main:{
        backgroundColor: 'white',
        height: '60%',
        width: '92%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
    },
    head:{
        flexDirection: 'row',
        backgroundColor: '#C4C4C4',
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    box:{
        paddingVertical: 6,
        borderRightWidth: 1,
        width: '10%',
    },
    description:{
        width: '28%'
    },
    date:{
        width: '30%'
    },
    priority:{
        width: '18%'
    },
    others:{
        paddingVertical: 6,
        borderRightWidth: 1,
        
    },
    detail:{
        position: 'relative',
        right: 3,
        padding: 5
    },
    button:{
        backgroundColor: '#680000',
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    lowerText:{
        fontSize: 12,
        textAlign: 'center',
    }
})

const tarefa = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: '#C4C4C4',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    done:{
        backgroundColor: '#3EE882'
    },
    late:{
        backgroundColor: '#CD9696'
    },
    textLate:{
        color: 'red'
    },
    box:{
        paddingVertical: 6,
        borderRightWidth: 1,
        width: '10%',
        justifyContent: 'center',
    },
    description:{
        width: '28%',
        justifyContent: 'center',
    },
    date:{
        width: '30%'
    },
    priority:{
        width: '18%'
    },
    others:{
        paddingVertical: 6,
        borderRightWidth: 1,
        justifyContent: 'center',
    },
    detail:{
        position: 'relative',
        right: 3,
        padding: 5,
        justifyContent: 'center',
    },
    textDetails:{
        color: 'blue'
    },
    lowerText:{
        fontSize: 12,
        textAlign: 'center',
    },
})

const tarefaForm = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B94B4B',
    },
    title:{
        fontSize: 30,
        marginBottom: 50,
    },
    form:{
        backgroundColor: 'white',
        borderRadius: 20,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section:{
        width: '90%',
        marginVertical: 10
    },
    label:{
        fontSize: 18,
        marginBottom: 5
    },
    input:{
        backgroundColor: '#EAEAEA',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#8B8B8B',
        height: 30,
        paddingVertical:0,
        paddingLeft: 10,
    },
    description:{
        height: 'auto',
        maxHeight: 100
    },
    button:{
        backgroundColor: '#680000',
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    taskName:{
        position: 'relative',
        bottom: 30,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#f0f0f0',
        fontSize: 16,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#959595',
        borderRadius: 15,
        color: 'black',
    },
    inputAndroid: {  
        backgroundColor: '#f0f0f0',
        fontSize: 16,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#959595',
        borderRadius: 15,
        color: 'black',
    },
    placeholder:{
        fontSize: 14,
        color: '#919191',
        paddingLeft: 10
    }
});

const tarefaDetails = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B94B4B',
    },
    pageTitle:{
        fontSize: 30,
        position: 'relative',
        bottom: 50
    },
    main:{
        width: '80%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    title:{
        fontSize: 25,
        marginVertical: 20,
    },
    text:{
        fontSize: 16,
        width: '90%',
        textAlign: 'center',
    },
    category:{
        fontSize: 22,
        marginVertical: 10
    },
    concluir:{
        backgroundColor:'#469A28',
        borderRadius: 20,
        width: '50%',
        paddingVertical: 3,
        alignItems: 'center',
        marginVertical: 10
    },
    editar:{
        backgroundColor:'#D3D713',
        borderRadius: 20,
        width: '46%',
        paddingVertical: 3,
        alignItems: 'center',
    },
    excluir:{
        backgroundColor:'#CF0D0D',
        borderRadius: 20,
        width: '46%',
        paddingVertical: 3,
        alignItems: 'center',
    },
    buttonText:{
        fontSize: 16
    },
    excludeButtonText:{
        fontSize: 16,
        color: 'white'
    },
    buttons:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:'90%',
        marginVertical: 10
    },
    done:{
        backgroundColor: '#3EE882'
    },
    textLate:{
        color: 'red'
    },
    unChecked:{
        backgroundColor: '#8F8F8F'
    }
})

const tarefaPopup = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(94,28,28,0.8)',
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main:{
        backgroundColor:'white',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 10
    },
    warning:{
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        marginBottom: 10
    },
    text:{
        fontSize: 15,
        textAlign: 'center',
        width: '70%',
        marginBottom: 10
    },
    name:{
        fontSize: 20,
        textAlign: 'center',
        width: '80%',
        fontWeight: 'bold',
        marginBottom: 40
    },
    buttons:{
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backButton:{
        backgroundColor:'#C4C4C4',
        borderRadius: 20,
        width: '46%',
        paddingVertical: 3,
        alignItems: 'center',
    },
    backButtonText:{
        fontSize: 15
    },
    excludeButton:{
        backgroundColor:'#D81D1D',
        borderRadius: 20,
        width: '46%',
        paddingVertical: 3,
        alignItems: 'center',
    },
    excludeButtonText:{
        fontSize: 15,
        color: 'white'
    }
})

export {tarefaHome, tarefaMain,tarefa,tarefaForm,pickerSelectStyles,tarefaDetails,tarefaPopup}