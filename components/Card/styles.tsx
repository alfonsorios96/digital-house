import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from '../../constants/Colors';

const {screenRatio} = constants;

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
        fontSize: screenRatio * 16,
        lineHeight: screenRatio * 22,
        color: colors.white,
        fontWeight: 'bold',
    },
    description: {
        textAlign: 'center',
        marginTop: screenRatio * 7,
        fontSize: screenRatio * 32,
        lineHeight: screenRatio * 44,
        color: colors.white,
        fontWeight: 'bold',
    },
});