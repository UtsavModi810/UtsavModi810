import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Input from '../../component/Input/Input'
import ComponentButton from '../../component/Button/ComponentButton'
import AsyncStorage from '@react-native-community/async-storage'


class Login extends Component {
   
    constructor(props) {
        super(props);
        // this.getData();
        this.state = {
            email: '',
            emailError: '',
            isEmailValidate: false,
            password: '',
            isPasswordValidation: false,
        }
    }
   
    allFieldValidation = () => {
        const {  email, password } = this.state
        if (email == "") {
          alert("Plz Enter Email")
          return false;
        } else if (password == "") {
          alert("Plz Fill Password")
          return false;
        }
        return true
      }
    
      making_api_call_all_fields = () => {
        if (this.allFieldValidation()) {
        
          this.props.navigation.navigate('Auth',{email:this.state.email,password:this.state.password });
        }
      }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                   
                 
                    <Text style={styles.text}>Login</Text>    

                    
                    <Input iconName="email" placeholder="Enter email" onChangeText={(text) => { this.validate(text) }}/>
                    {this.state.isEmailvalidate ? (
                        <Text style={{ color: 'green', fontSize:20 }}>
                            {this.state.emailError}
                        </Text>
                    ) : (
                        <Text style={{ color: 'green',fontSize:20 }}>{this.state.emailError}</Text>
                    )}


                    <Input iconName="lock" placeholder="Enter password"  visible='true' onChangeText={(text) => { this.validatePassword(text) }} />
                    {this.state.isPasswordValidation ? (
                        <Text style={{ color: 'green',fontSize:20}}>
                            {this.state.PasswordError}
                        </Text>
                    ) : (
                        <Text style={{ color: 'green',fontSize:20}}>
                            {this.state.PasswordError}
                        </Text>
                        )}


                    <ComponentButton label='Sign In' onPress={() => this.making_api_call_all_fields()}/>

                     <Text style={styles.text1} onPress={()=>this.props.navigation.navigate('Register')}> Need You Have Sign Up Here? Create Account</Text> 
                    
    
                    
                </View>
            </ScrollView>
        )
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log('Email is not Correct');
            this.setState({ email: text, emailError: 'Email is not correct' })
            return false;
        } else {
            this.setState({ email: text, emailError: 'Email is Correct' })
            console.log('Email is correct')
        }
    }
    validatePassword = (text) => {
        console.log(text);
        let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
        if (reg.test(text) == false) {
          this.setState({
            password: text,
            PasswordError: 'Invalid Password',
            isPasswordValidation: false,
          });
          return false;
        } else {
          this.setState({
            password: text,
            PasswordError: 'Valid Password',
            isPasswordValidation: true
          });
          console.log('Password is correct', this.state.password, '---', text)
        }
    }
   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
       
    },
    
    text: {
        marginTop:100,
        marginBottom:50,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        
    },
    textval:{

        color:'red',
    },
    text1:{
        paddingTop:50,
        color:'blue',
        
        
    },
   

});

export default Login;