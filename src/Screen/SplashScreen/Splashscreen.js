import React, { Component } from 'react';
import styles from './style';
import { StyleSheet, View,Image,} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'

const SplashScreen = ({ navigation }) => {


  return (
    <View style={styles.SplashScreen_RootView}>

      <Image source={require('../../assets/img/truck.gif')} style={styles.logo} />

    </View>
  );
}


export default SplashScreen;