import React from 'react'
import { View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'


const ComponentButton = (props) => {
    
    return (
        <View style={styles.StyleSheet}>
            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <Text style={styles.text3}>{props.label}</Text>
            </TouchableOpacity>
    </View>    
    )
}
const styles = StyleSheet.create({
    container: {
       
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: { 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a4ebf3",
        fontWeight: 'bold',
        borderRadius: 20,
        borderWidth: 2,
        width:150 ,
        height:70,

    },
    text3: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default ComponentButton