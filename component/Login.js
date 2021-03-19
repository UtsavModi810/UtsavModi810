import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Input from './Input'
import ComponentButton from './ComponentButton'
import ComponentImage from './ComponentImage'



class Login extends Component {
    constructor(props) {
        super(props);
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
          alert("SuccessFully login")
          this.props.navigation.navigate('Home');
        }
      }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                   
                    <ComponentImage/>
                    <Text style={styles.text}>Login</Text>    

                    
                    <Input iconName="email" placeholder="Enter email" onChangeText={(text) => { this.validate(text) }}/>
                    {this.state.isEmailvalidate ? (
                        <Text style={{ color: 'red'}}>
                            {this.state.emailError}
                        </Text>
                    ) : (
                        <Text style={{ color: 'red' }}>{this.state.emailError}</Text>
                    )}


                    <Input iconName="lock" placeholder="Enter password" visible='true' onChangeText={(text) => { this.validatePassword(text) }} />
                    {this.state.isPasswordValidation ? (
                        <Text style={{ color: 'red'}}>
                            {this.state.PasswordError}
                        </Text>
                    ) : (
                        <Text style={{ color: 'red'}}>
                            {this.state.PasswordError}
                        </Text>
                        )}


                    <ComponentButton label='Sign In' onPress={() => this.making_api_call_all_fields()}/>

                     <Text style={styles.text1} onPress={()=>this.props.navigation.navigate('Register')}> Need You Have ? Create Account</Text> 
                    
    
                    
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
   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
       
    },
    
    text: {
        top:-50,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 40,
        
    },
    textval:{

        color:'red',
    },
    text1:{
        paddingTop:40,
        color:'blue',
        
        
    },
   

});

export default Login;