import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import Right from 'react-native-vector-icons/dist/MaterialIcons';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ComponentButton from '../../component/Button/ComponentButton';


function Home({ navigation },props) {

    const [people, setpeople] = useState([
        { photo: require('../../assets/img/ironman.jpg'), name: 'IRON MAN ', email: 'i@gmail.com', id: '1' },
        { photo: require('../../assets/img//hulk1.jpg'), name: 'HULK', email: 'h@gmail.com', id: '2' },
        { photo: require('../../assets/img/captain.jpg'), name: 'CAPTAIN AMERICA', email: 'c@gmail.com', id: '3' },

    ]);

    return (
        <View style={styles.container}>
        <Icon name="person" style={{fontSize:50}} onPress={() => navigation.navigate("UserProfile")}/>
            <FlatList
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({ item }) =>
                (

                    <View style={styles.show}>
                  
                        <Image style={styles.img} source={item.photo}></Image>
                        <View style={styles.text}>
                            <Text style={styles.item}>{item.name}</Text>
                            <Text style={styles.email}>{item.email}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('HomeDetail',item)}>
                            
                            <Right
                                name="keyboard-arrow-right"
                                style={{
                                    fontSize: 50, marginTop: 20, marginRight: 15, color: 'white',
                                }}
                            />
                        </TouchableOpacity>
                        
                    </View>

                )
                }
            />


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    img: {
        height: 100,
        width: 100,
        resizeMode: 'center',
        borderRadius: 100 / 2,
    },
    show: {
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#046582',
        flexDirection: 'row',
    },
    item: {
        color: 'white',
        fontSize: 20,
    },
    email: {
        color: 'white',

        fontSize: 20,
    },
    text: {

        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: 20,
        marginLeft: 20,
    },

});
export default Home;
