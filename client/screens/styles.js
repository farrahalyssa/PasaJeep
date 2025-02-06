import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
    },
    title:{
        fontSize: 24,
        fontFamily:  'Poppins_700Bold'

    },
    textBody:{
        fontSize: 15,
        fontFamily:  'Poppins_300Light'
    },
    button:{
        backgroundColor: '#56a9fc',
        padding:'3%',
        margin:'10%',
        justifyContent:'center',
        shadowColor: 'gray',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.5,
            shadowRadius: 7,
    },
    buttonText:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button2:{
        margin:'2%',
        backgroundColor: '#D3D3D3',
        padding:'4%',
        width:'80%',
        borderRadius: 100
    },
    texInput:{
        margin:'2%',
        backgroundColor: '#D3D3D3',
        padding:'4%',
        width:'80%',
        borderRadius: 100,
        fontFamily:  'Poppins_300Light'

    },
    subText:{
        fontWeight:14,
        fontFamily:  'Poppins_300Light'

    }

    
})