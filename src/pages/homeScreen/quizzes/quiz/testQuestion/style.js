import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: '100%',
        marginLeft: 15
    },
    goBackButton: {
        position:'relative',
        alignItems:'center',
        borderColor:'#BEBAB3',
        borderRadius: 50,
        borderWidth:1,
        marginTop: 52,
        width: 40,
        height:40,
        marginLeft: 16,
        justifyContent:'center',
        zIndex: 1
    },
    header:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 0,
    },
    content:{
        marginTop: 32,
    },
    image:{
        width: 343,
        height: 191,
        borderRadius: 8,
    },
    optionsWraper:{
        width: 343,
        height: 58,
        marginTop: 16,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 16,
    },
    pageNumber:{
        marginTop: 47,
        marginLeft: 168.5,
        color: '#78746D',
        lineHeight: 26,
        fontSize: 16,
        fontWeight: '400'
    },
    title:{
        marginTop: 8,
        width: 343,
        lineHeight: 32,
        fontSize: 24,
        textAlign: 'center',
        marginLeft: 16,
        fontWeight: 'bold'
    },
    card:{
        width:346,
        height: 194,
        flexDirection:"column",
        justifyContent:"space-evenly",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#BEBAB3',
        marginLeft: 16,
        marginTop: 16,
          
    },
    option:{
        color: '#3C3A36',
        lineHeight: 26,
        fontSize: 16,
        marginLeft: 24,
        marginTop: 16,
    },
    buttonCircle: {
        width: 309,
        height: 56,
        backgroundColor: '#82327E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginLeft: 33,
        marginTop: 61,
      },
})

export default styles
