import React from 'react';
import { Text, View,Image, ImageComponent } from 'react-native';

function HomeDetail({ navigation,route }) {
    const {  photo,name,email  } = route.params;
 
    return (
        <View>
            <Image source ={ photo }></Image>
            <Text>{ name }</Text>
            <Text>{ email }</Text>
        </View>
    )
}

export default HomeDetail;