import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: 286,
        height: 143,
        borderRadius: 20,
        backgroundColor: '#334FFA',
    },
    shadowProp: {
        shadowColor: '##000000',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    title: {
        marginLeft: 19,
        marginTop: 21,
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 22,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    description: {
        marginLeft: 48,
        marginTop: 7,
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: 32,
        lineHeight: 44,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});