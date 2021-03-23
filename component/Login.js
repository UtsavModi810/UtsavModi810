import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Input from './Input'
import ComponentButton from './ComponentButton'
import ComponentImage from './ComponentImage'
// import AsyncStorage from '@react-native-community/async-storage'



class Login extends Component {
    // state = {
    //     email:"",
    //     password:"",
    //     token:"",
    // }
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
    // onLogout = async () => {
    //     try{
    //         this.setState({token:""})
    //         //await AsyncStorage.removeItem('token')
    //         await AsyncStorage.clear()
    //     }
    //     catch(error){
    //         console.log(error)
    //     }

    // }
    // onSubmit = async () => { 
    //     try{

    //         await this.setState({token:'abc12@gmail.com'}) 
    //         // await AsyncStorage.setItem('email',this.state.email)
    //         // await AsyncStorage.setItem('token','abc12@gmail.com')
    //         // await AsyncStorage.multiSet([['email',this.state.email],
    //         // ['token','abc12@gmail.com']])


    //         await AsyncStorage.setItem('userprofile',JSON.stringify({ email: this.state.email, token: this.state.token}))
            

    //     }catch(error){
    //         console.log(error)
    //     }
        
    // }
    // getData = async () => {
    //     try{
    //         // const value = await AsyncStorage,getItem('token')
    //         // const email = await AsyncStorage,getItem('email')
    //         const userprofile =await AsyncStorage.getItem('userprofile')
    //         const userprofile =JSON.parse(userprofile)
            
    //         if(userprofile!==null){
    //             this.setState({ ...userprofile })

    //         }
    //         if(email!==null){
    //             this.setState({ email })

    //         }
    //     }
    //     catch(e){
         
                 
    //     }
    // }
    

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


                    <Input iconName="lock" placeholder="Enter password"  visible='true' onChangeText={(text) => { this.validatePassword(text) }} />
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
   
};

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