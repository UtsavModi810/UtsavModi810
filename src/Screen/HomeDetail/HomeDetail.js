import React from 'react';
import { Text, View,Image, StyleSheet ,ImageComponent } from 'react-native';
import styles from './style';

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


export default HomeDetail;