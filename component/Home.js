import React, { useState } from 'react';
import { FlatList, StyleSheet, View,Text, Image } from 'react-native';

function Home(){
    const [people,setpeople] = useState([
        { photo:require('./img/ironman.jpg'), name: 'IRON MAN ', id : '1' },
        { photo:require('./img/hulk.jpg'), name: 'HULK', id : '2' },
  
    ]);
    return(
        <View style={styles.container}>
      
        <FlatList 
        numColumns={1}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({ item }) => 
            (
                <View style={styles.show}>
                    <Image style={styles.img} source={item.photo}></Image>
                    <Text style={styles.item}>{item.name}</Text>
                </View>
            )
        }
        />


        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginHorizontal:10,
    },
    img:{
 
        height:100,
        width:100,
    },
    show:{
        height:100,
        flex:1,
        marginVertical: 10,
        backgroundColor:'#c06014',
        flexDirection:'row',
    },
    item:{ 
        marginLeft:30, 
        marginTop:30,
        fontSize:24,
    },
});
export default Home;
