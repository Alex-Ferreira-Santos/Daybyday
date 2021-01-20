import {StyleSheet} from 'react-native'

const sono = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
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

export {sono}