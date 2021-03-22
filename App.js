import React,{useState,useEffect} from 'react';
import Register from "./component/Register";
import Login  from "./component/Login";
import Home from "./component/Home";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './Screen/Splashscreen';




const Stack = createStackNavigator();
const App = () => {
  const [Splash,setSplash]=useState(true);
  useEffect(() => {
    setTimeout(async()=>{
      setSplash(false);
    },8000);
  },[]);
    if (Splash){
      return (<Splashscreen/>)
    }
  return (
    // <SplashScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}   options={{ headerShown:false
        
        }} />
        <Stack.Screen name="Register" component={Register} options={{}}/>
        <Stack.Screen name="Home" component={Home} options={{}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
