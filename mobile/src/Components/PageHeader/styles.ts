import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#8257e5'
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 150,
        marginVertical: 40
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default styles;