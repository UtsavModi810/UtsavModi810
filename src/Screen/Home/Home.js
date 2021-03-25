import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import styles from './style';
import Right from 'react-native-vector-icons/dist/MaterialIcons';

import ComponentButton from '../../component/Button/ComponentButton';


function Home({ navigation },props) {

    const [people, setpeople] = useState([
        { photo: require('../../assets/img/ironman.jpg'), name: 'IRON MAN ', email: 'i@gmail.com', id: '1' },
        { photo: require('../../assets/img/hulk.jpg'), name: 'HULK', email: 'h@gmail.com', id: '2' },
        { photo: require('../../assets/img/captain3.png'), name: 'CAPTAIN', email: 'c@gmail.com', id: '3' },

    ]);

    return (
        <View style={styles.container}>
        
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

export default Home;
