import React, {Component} from 'react';
import { Platform,StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Auth extends Component {
  state = {
    email: '',
    password: '',
  };

  checkAuth = async () => {
    // debugger
    try {
      let user = await AsyncStorage.getItem('Register');
      let parsed = JSON.parse(user);
      console.log('auth--',user)
      //debugger
      console.log("state",this.state.email,this.state.password)
      if (
        
        parsed.email === this.state.email &&
        parsed.password === this.state.password
      )
        this.props.navigation.replace('Home');
      else {
        alert('Email or password is invalid');
        this.props.navigation.navigate('Login');
      }
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    const {email, password} = this.props.route.params;

    this.setState({email: email, password: password});

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
    // const {email, password} = this.props.route.params;
    // console.log(email + ' ' + password);

    //const u = JSON.stringify(email)

    //const email1 = JSON.stringify(email)
    return <View></View>;
  }
}



export default Auth;
