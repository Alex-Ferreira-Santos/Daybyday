import {StyleSheet} from 'react-native'

const alimentacaoHome = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'space-around',
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
        justifyContent: 'space-around',
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
        
        borderWidth: 1,
    },
    button:{
        backgroundColor: '#21560E',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        margin: 20
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    dieta:{
        width: '100%',
        backgroundColor: '#BEF394',
        minHeight: 40,
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
        marginVertical: 30,
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
        fontSize: 22,
        marginVertical: 20,
    },
    bold:{
        fontWeight: 'bold',
        fontSize: 16,
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
        marginVertical: 10
    },
    buttonText:{
        fontSize: 20,
        color: 'white'
    },
    ingredients:{
        width:'90%',
        marginBottom: 20
    },
    preparo:{
        width:'90%',
        textAlign: 'justify',
        marginBottom: 20,
        fontSize: 16
    },
    image:{
        width: '80%',
        height:200,
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'gray'
    }
})

export {alimentacaoHome,alimentacaoMain, alimentacaoDieta}