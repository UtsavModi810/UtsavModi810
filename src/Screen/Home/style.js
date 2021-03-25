import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    img: {
        height: 100,
        width: 100,
        resizeMode: 'center',
        borderRadius: 100 / 2,
    },
    show: {
        height: 100,
        flex: 1,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: '#046582',
        flexDirection: 'row',
    },
    item: {
        color: 'white',
        fontSize: 20,
    },
    email: {
        color: 'white',

        fontSize: 20,
    },
    text: {

        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: 20,
        marginLeft: 20,
    },

});

export default styles;