import { Component } from "react";
import React from 'react';

import Input from '../../component/Input/Input'
import ComponentButton from '../../component/Button/ComponentButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, ScrollView } from "react-native";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            mobileno: '',

        }
    }
    checkAuth = async () => {
        // debugger
        try {
            let user = await AsyncStorage.getItem('Register');
            let parsed = JSON.parse(user);
            console.log('auth--', user)
            //debugger
            console.log("parsed-", parsed.email, parsed.password)
            this.setState({ firstname: parsed.firstname, lastname: parsed.lastname, email: parsed.email, mobileno: parsed.mobileno })


        } catch (error) {
            alert(error);
        }
    };

    componentDidMount() {


        // let obj = {
        //   name: 'utsav',
        //   email: 'utsav@gmail.com',
        //   password: 'Ut$av1234',
        // };
        /*AsyncStorage.setItem('user',user);*/
        // AsyncStorage.setItem('user', JSON.stringify(obj));
        this.checkAuth();
    }



    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.text}> User Detail </Text>
                    </View>

                    <View style={styles.footer}>
                        <Input iconName="person-pin-circle" value={this.state.firstname} />
                        <Input iconName="person-pin-circle" value={this.state.lastname} />
                        <Input iconName="email" value={this.state.email} />
                        <Input iconName="contact-page" value={this.state.mobileno} />
                        <ComponentButton label="LOGOUT" />
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#161616',
        height:'100%',
        width:'100%',

    },
    text:{
        marginTop:60,
        fontSize:50,
        fontWeight:'bold',
        alignSelf:'center',
        color: '#ffffff',

    },
    header: {
        height: 200,
    },
    footer: {
        height:600,
        paddingTop:80,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 80,
    },
   

});

export default UserProfile;