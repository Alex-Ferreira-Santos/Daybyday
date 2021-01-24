import {StyleSheet} from 'react-native'

const alimentacaoHome = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59A73D'
    },
    title:{
        fontSize: 30,
        marginBottom: 20,
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        width: '90%',
        marginBottom: 20,
    },
    brocolis:{
        width: 171,
        height: 171,
        marginBottom: 20,
    },
    button:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    }
})

const alimentacaoMain = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59A73D'
    },
    title:{
        fontSize: 30,
        marginVertical: 30,
    },
    text:{
        fontSize: 20,
        marginBottom: 20
    },
    dietas:{
        backgroundColor: 'white',
        width: '80%',
        maxHeight: 300,
        borderWidth: 1
    },
    button:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 20
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    dieta:{
        width: '100%',
        backgroundColor: '#BEF394',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    dietaName:{
        fontSize: 18,
        textAlign: 'center',
        width:'90%'
    }
})

const alimentacaoDieta = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59A73D'
    },
    main:{
        backgroundColor:'white',
        width: '90%',
        maxHeight: 500,
        borderRadius: 30,
    },
    containerMain:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        marginTop: 10,
        textAlign: 'center',
    },
    descricao:{
        width: '80%',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15
    },
    subtitle:{
        fontSize: 20,
        marginVertical: 20,
    },
    bold:{
        fontWeight: 'bold',
    },
    font:{
        fontSize: 15,
        width: '90%',
        marginBottom: 10
    },
    link:{
        color: 'blue',
        textDecorationLine: 'underline'
    },
    text:{
        width:'80%',
        textAlign: 'center',
        fontSize: 15,
    },
    backButton:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 10
    },
    editButton:{
        backgroundColor: '#A59F1A',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginTop: 10
    },
    deleteButton:{
        backgroundColor: '#A11F1F',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    ingredients:{
        width:'80%',
        marginBottom: 20
    },
    preparo:{
        width:'90%',
        textAlign: 'center',
        marginBottom: 20
    }
})

const alimentacaoForm = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#59A73D'
    },
    main:{
        backgroundColor:'white',
        width: '80%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30,
        marginBottom: 20
    },
    section:{
        width: '90%',
        marginVertical: 5
    },
    label:{
        fontSize: 20
    },
    input:{
        backgroundColor: '#E5E5E5',
        height: 30,
        paddingVertical: 0,
        borderRadius: 20,
        paddingLeft: 8,
        borderWidth: 1,
        borderColor: '#979797',
        marginTop: 8
    },
    button:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    biggerInput:{
        height: 50
    },
    name:{
        fontSize: 20,
        width: '80%',
        textAlign: 'center',
        position: 'relative',
        bottom: 10,
        fontWeight: 'bold'
    } 
})

export {alimentacaoHome,alimentacaoMain, alimentacaoDieta, alimentacaoForm}