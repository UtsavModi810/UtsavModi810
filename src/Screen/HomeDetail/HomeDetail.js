import React from 'react';
import { Text, View,Image, StyleSheet ,ImageComponent } from 'react-native';

function HomeDetail({ navigation,route }) {
    const {  photo,name,email  } = route.params;
 
   
    return (
        <View style={styles.container}>
            <Image style={styles.img} source ={ photo }></Image>
            <Text style={styles.text1}>{ name }</Text>
            <Text style={styles.text1}>{ email }</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",   
    },
    img:{
        height:300,
        width:300,
        borderRadius: 150 / 2,
    },
    text1:{
        top:30,
        fontSize:20,
        fontWeight:'bold',

    }
})

export default HomeDetail;