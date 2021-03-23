import React from 'react';
import { Text, View } from 'react-native';

function HomeDetail({ navigation }) {
    return (
        <View>
            <Text>{ navigation.getParam('name') }</Text>
        </View>
    )
}

export default HomeDetail;