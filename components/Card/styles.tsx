import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from '../../constants/Colors';

const {window, screenRatio} = constants;

export const styles = StyleSheet.create({
    container: {
        width: screenRatio * 286,
        height: screenRatio * 143,
        borderRadius: screenRatio * 20,
        backgroundColor: colors.blue,
    },
    shadowProp: {
        shadowColor: colors.black,
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    title: {
        marginLeft: screenRatio * 19,
        marginTop: screenRatio * 21,
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: screenRatio * 16,
        lineHeight: screenRatio * 22,
        color: colors.white,
        fontWeight: 'bold',
    },
    description: {
        marginLeft: screenRatio * 48,
        marginTop: screenRatio * 7,
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: screenRatio * 32,
        lineHeight: screenRatio * 44,
        color: colors.white,
        fontWeight: 'bold',
    },
});