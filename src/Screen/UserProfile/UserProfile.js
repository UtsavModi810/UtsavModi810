import { Component } from "react";
import React from 'react';

import Input from '../../component/Input/Input'
import ComponentImage from '../../component/Image/ComponentImage'
import ComponentButton from '../../component/Button/ComponentButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View,Text,StyleSheet } from "react-native";

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
          console.log('auth--',user)
          //debugger
          console.log("parsed-",parsed.email,parsed.password)
          this.setState({ firstname:parsed.firstname,lastname:parsed.lastname,email:parsed.email,mobileno:parsed.mobileno })

         
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
            <View style={styles.container}>
                <ComponentImage/>
                <Text style={styles.text}> User Detail </Text>
                <Input iconName="person-pin-circle" value={this.state.firstname} />
                <Input iconName="person-pin-circle" value={this.state.lastname}/>
                <Input iconName="email" value={this.state.email}/>
                <Input iconName="contact-page" value={this.state.mobileno}/>
                <ComponentButton label="LOGOUT"/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        top:-50,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
       
    },  
});

export default UserProfile;