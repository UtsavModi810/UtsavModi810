import React from 'react';
import { Text, View,Image, StyleSheet ,ImageComponent } from 'react-native';
import { Component } from 'react';

function HomeDetail({ navigation,route }) {
    const {  photo,name,email  } = route.params;
 
    // checkAuth = async () => {
    //     // debugger
    //     try {
    //       let user = await AsyncStorage.getItem('Register');
    //       let parsed = JSON.parse(user);
    //       console.log('parsedemail',parsed.email)
    //       //debugger
    //     //   console.log("state",this.state.email,this.state.password)
    //     //   if (
            
    //     //     parsed.email === this.state.email &&
    //     //     parsed.password === this.state.password
    //     //   )
    //     //     this.props.navigation.replace('Home');
    //     //   else {
    //     //     alert('Email or password is invalid');
    //     //     this.props.navigation.navigate('Login');
          
    //     } 
    //     catch (error) {
    //       alert(error);
    //     }
    //   }
    
    //   componentDidMount() 
    //     // const {email, password} = this.props.route.params;
    
    //     // this.setState({email: email, password: password});
    
    //     // let obj = {
    //     //   name: 'utsav',
    //     //   email: 'utsav@gmail.com',
    //     //   password: 'Ut$av1234',
    //     // };
    //     /*AsyncStorage.setItem('user',user);*/
    //     // AsyncStorage.setItem('user', JSON.stringify(obj));
    //     this.checkAuth();
      
        
    
 


    return (
        <View style={styles.container}>
            <Image style={styles.img} source ={ photo }></Image>
            <Text>{ name }</Text>
            <Text>{ email }</Text>
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
        borderStyle:"solid",
    },
})

export default HomeDetail;