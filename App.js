import Login from "./src/Screen/Login/Login";
import Register from "./src/Screen/Register/Register";
import React,{useState,useEffect} from 'react';
import Home from "./src/Screen/Home/Home";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './src/Screen/SplashScreen/Splashscreen';
import HomeDetail from './src/Screen/HomeDetail/HomeDetail';
import Auth from './src/Authentication/Auth';
import UserProfile from "./src/Screen/UserProfile/UserProfile";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { TouchableOpacity } from 'react-native';




const Stack = createStackNavigator();
const App = () => {
  const [Splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      setSplash(false);
    }, 8000);
  }, []); 
  if (Splash) {
    return (<Splashscreen />)
  }
  return (
    // <SplashScreen/>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false

        }} />

        <Stack.Screen name="Register" component={Register} options={{}} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShow:false }} />
        <Stack.Screen name="HomeDetail" component={HomeDetail} options={{}} />
        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
          title: 'Home',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',headerTitleAlign:'center',
            headerRight:()=>(<TouchableOpacity onPress={()=>navigation.navigate('UserProfile')}>
          <Icon
            name='person' //"person-outline"
            color="#000"
            size={35}
            s
            style={{ marginRight: 20}}
          />
        </TouchableOpacity>)
        }) } />
        <Stack.Screen name="UserProfile" component={UserProfile} options={{ }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
