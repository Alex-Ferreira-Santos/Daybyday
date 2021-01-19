import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    title:{
        fontSize: 40,
    },
    subtitle:{
        fontSize: 20,
        marginBottom: 20,
    },
    touchable:{
        width:'90%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        margin: 5,
    },
    agua:{
        backgroundColor: '#3EDDE8',
    },
    Buttoncontainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    img:{
        width:50,
        height:50,
        marginRight: 5,
    },
    alimentacao:{
        backgroundColor: '#59A73D',   
    },
    peso:{
        backgroundColor: '#DFCD2A'
    },
    lista:{
        backgroundColor: '#B94B4B'
    },
    dormir:{
        backgroundColor: '#483FB1'
    },
    extra:{
        backgroundColor: '#9C359E'
    },
    closeAd:{
        textAlign: 'center',
        alignItems:'center',
        backgroundColor: '#C4C4C4',
        position: 'absolute',
        bottom:0,
        width:'100%'
    }
})

export {styles}