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
        fontSize: 18
    },
    input:{
        backgroundColor: '#EAEAEA',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#8B8B8B',
        height: 30,
        paddingVertical:0,
    },
    description:{
        height: 'auto',
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
})

export {tarefaHome, tarefaMain,tarefa,tarefaForm}