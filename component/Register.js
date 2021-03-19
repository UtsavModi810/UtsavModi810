import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Input from './Input'
import ComponentImage from './ComponentImage';
import ComponentButton from './ComponentButton';
import Pickers from './Picker';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            isFirstvalidate: false,
            firstnamerror: '',
            lastname: '',
            isLastvalidate: false,
            lastnamerror: '',
            email: '',
            emailError: '',
            isEmailValidate: false,
            phone: '',
            isPhoneValidate: false,
            phoneErrorValidation: '',
            password: '',
            isPasswordValidation: false,
        }
    }

    allFieldValidation = () => {
      const { firstname, lastname, email, phone, password, ConfirmPassword } = this.state
      if (firstname == "") {
        alert("Plz Enter UserName")
        return false;
      } else if (lastname == "") {
        alert("Plz Fill LastName")
        return false;
      } else if (email == "") {
        alert("Plz Fill Email")
        return false;
      } else if (phone == "") {
        alert("Plz Fill Phone")
        return false;
      } else if (password == "") {
        alert("Plz Fill Password")
        return false;
      } else if (ConfirmPassword == "") {
        alert("Plz Fill ConfirmPassword")
        return false;
      }
      return true
    }
  
    making_api_call_all_fields = () => {
      if (this.allFieldValidation()) {
        alert("SuccessFully Registration")
        this.props.navigation.navigate('Login');
      }
    }
  


    render() {

    return (
        <ScrollView>
        
            <View style={styles.container}>

                <ComponentImage/>
                <Text style={styles.text}>Sign Up</Text>

                <Input iconName="person-pin-circle" placeholder="Enter First name" 
                onChangeText={(text) => { this.validateFirstName(text) }}/>
                {this.state.isFirstvalidate ? (
                    <Text style={{ color: 'red'}}>
                      {this.state.firstnamerror}
                    </Text>
                  ) : (
                    <Text style={{ color: 'red'}}>{this.state.firstnamerror}</Text>
                  )}

                <Input iconName="person-pin-circle" placeholder="Enter Last name" 
                onChangeText={(text) => { this.validateLastName(text) }}/>

                {this.state.isLastvalidate ? (
                    <Text style={{ color: 'red'}}>
                      {this.state.lastnamerror}
                    </Text>
                  ) : (
                    <Text style={{ color: 'red'}}>{this.state.lastnamerror}</Text>
                  )}


                <Input iconName="email" placeholder="Enter email" 
                onChangeText={(text) => { this.validate(text) }}/>
                {this.state.isEmailvalidate ? (
                    <Text style={{ color: 'red' }}>
                        {this.state.emailError}
                    </Text>
                ) : (
                    <Text style={{ color: 'red' }}>{this.state.emailError}</Text>
                )}



                <Pickers iconName="flag" />
                <Input iconName="contact-page" placeholder="Enter Mobile No" 
                onChangeText={(text) => { this.validatePhone(text) }}/>

                {this.state.isPhoneValidate ? (
                    <Text style={{ color: 'red' }}>
                      {this.state.phoneErrorValidation}
                    </Text>
                  ) : (
                    <Text style={{ color: 'red' }}>{this.state.phoneErrorValidation}</Text>
                  )}

                <Input iconName="lock" placeholder="Enter password" visible='true' 
                onChangeText={(text) => { this.validatePassword(text) }}/>

                {this.state.isPasswordValidation ? (
                    <Text style={{ color: 'red'}}>
                        {this.state.PasswordError}
                    </Text>
                ) : (
                    <Text style={{ color: 'red'}}>
                        {this.state.PasswordError}
                    </Text>
                    )}

                <Input iconName="lock-open" placeholder="Enter confirm password" visible='true' 
                value={this.state.ConfirmPassword} onChangeText={(value) => { this.checked_Password(value) }}/>

                {this.state.isConPassword ? (
                  <Text style={{ color: 'red'}}>
                    {this.state.ConPassword}
                </Text>
                ) : (
                  <Text style={{ color: 'red'}}>
                    {this.state.ConPassword}
                  </Text>)}

                <ComponentButton label='Sign Up' onPress={() => this.making_api_call_all_fields()} />
                
            </View>
        </ScrollView>
        )
    }
    validateFirstName = (text) => {
        console.log(text);
        let reg = /^[a-zA-Z]*$/;
        if (reg.test(text) === false) {
          this.setState({
            firstname: text,
            firstnamerror: 'Invalid FirstName',
            isFirstvalidate: true
          })
        } else {
          this.setState({
            firstname: text,
            firstnamerror: 'Valid FirstName',
            isFirstvalidate: true
          })
        }
      }
     
    
    validateLastName = (text) => {
        console.log(text);
        let reg = /^[a-zA-Z]*$/;
        if (reg.test(text) === false) {
          this.setState({
            lastname: text,
            lastnamerror: 'Invalid LastName',
            isLastvalidate: true
          })
        } else {
          this.setState({
            lastname: text,
            lastnamerror: 'Valid LastName',
            isLastvalidate: true
          })
        }
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
    validatePhone = (text) => {
        const reg = /^[0]?[789]\d{9}$/;
        if (reg.test(text) === false) {
          this.setState({
            phone: text,
            phoneErrorValidation: 'Invalid number',
            isPhoneValidate: false
          });
          return false;
        } else {
          this.setState({
            phone: text,
            phoneErrorValidation: 'Valid number',
            isPhoneValidate: true
          });
          return true;
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
    checked_Password = (value) => {
      if ((this.state.password) == (value)) {
        this.setState({
          ConfirmPassword: value,
          ConPassword: 'matched',
          isConPassword: true
        })
      } else {
        this.setState({
         
          ConfirmPassword: value,
          ConPassword: 'not matched',
          isConPassword: true
        })
      }
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

export default Register;