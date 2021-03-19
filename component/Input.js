import React from 'react'
import { View, TextInput,Text,StyleSheet} from 'react-native'
import Iconc from 'react-native-vector-icons/dist/MaterialIcons';


const Input = (props) => {
    return (
        <View style={styles.inputview}>
                        <Iconc name={props.iconName} style={styles.ic} />
                        <TextInput style={styles.input} placeholder={props.placeholder} secureTextEntry={Boolean(props.visible)} onChangeText={props.onChangeText}/>
                    </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputview: {
        backgroundColor: "#a4ebf3",
        borderRadius: 30,
        width: "70%",
        height: 50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        paddingLeft: 20,
    },
    ic: {

        fontSize: 20
    },
    input: {
        fontSize: 20,
        height: 50,
        flex: 1,
        marginLeft: 20,
    },
});