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
        borderRadius: 20,
        borderWidth: 1,
    },
    head:{
        flexDirection: 'row',
        backgroundColor: '#C4C4C4',
        borderTopLeftRadius:20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
    },
    box:{
        padding: 5,
        borderRightWidth: 1,
    },
    others:{
        padding: 5,
        paddingLeft: 0,
        borderRightWidth: 1,
    },
    detail:{
        position: 'relative',
        right: 3
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

export {tarefaHome, tarefaMain}