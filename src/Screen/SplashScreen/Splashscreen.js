import React, { Component } from 'react';
import { StyleSheet, View,Image,} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const SplashScreen = ({ navigation }) => {


  return (
    <View style={styles.SplashScreen_RootView}>

      <Image source={require('../../assets/img/truck.gif')} style={styles.logo} />

    </View>
  );
}

const styles = StyleSheet.create(
  {
    SplashScreen_RootView:
    {
      justifyContent: 'center',

      // marginTop: 60,  
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',

    },
    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00BCD4',
      flex: 1,
    },
    logo: {
      height: '50%',
      width: '100%',
      alignItems: 'center'

    },


  });
export default SplashScreen;