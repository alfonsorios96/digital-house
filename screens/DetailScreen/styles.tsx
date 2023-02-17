import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from '../../constants/Colors';

const {window, screenRatio} = constants;

export const styles = StyleSheet.create({
    container: {
        width: window.width,
        height: window.height,
    },
    header: {
        backgroundColor: '#CFD6FF',
        width: window.width,
        height: screenRatio * 150,
        marginBottom: screenRatio * 19,
    },
    title: {
        fontWeight: 'bold',
        fontSize: screenRatio * 24,
        lineHeight: screenRatio * 24,
        marginLeft: screenRatio * 20,
        paddingTop: screenRatio * 100,
    },
    subtitle: {
        fontSize: screenRatio * 16,
        lineHeight: screenRatio * 22,
        marginLeft: screenRatio * 20,
        fontWeight: 'bold',
    },
    points: {
        fontSize: screenRatio * 24,
        lineHeight: screenRatio * 32,
        marginLeft: screenRatio * 20,
        fontWeight: 'bold',
    },
    section: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: screenRatio * 14,
        fontWeight: 'bold',
        lineHeight: screenRatio * 19,
        color: colors.grey,
        marginLeft: screenRatio * 20,
        marginVertical: screenRatio * 20,
    },
    card: {
        marginLeft: screenRatio * 53,
    },
    buttonLarge: {
        marginVertical: screenRatio * 20,
        marginLeft: screenRatio * 20,
    },
});