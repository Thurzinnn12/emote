import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titulo: {
        color: '#ffffff',
        backgroundColor: 'red',
        fontSize: 20,
    },
    subtitulo: {
        color: '#ffffff',
        backgroundColor: 'blue',
        fontSize: 10,
    },
    image: {
        width: '50%',
    },
    bola:{
       marginBottom:10,
       backgroundColor: 'green',
       marginRight: 10
    },
    igor:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    menu:{
        marginBottom:0,
        backgroundColor: 'pink',
        width:300,
        height: 20
    },
    menu2:{
        position:'relative',
        Bottom:0,
        marginBottom:0,
        backgroundColor: 'blue',
        width:'100%',
        height: 20
    },
    menu2:{
        position:'absolute',
        Bottom:0,
        marginBottom:0,
        backgroundColor: 'green',
        width:'100%',
        height: 20
    }
});