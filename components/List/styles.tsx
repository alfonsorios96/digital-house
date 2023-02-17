import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from '../../constants/Colors';

const {window, screenRatio} = constants;

export const styles = StyleSheet.create({
    container: {
        width: window.width * 0.95,
        maxHeight: window.height * 0.3,
        borderRadius: screenRatio * 10,
        marginLeft: screenRatio * 10,
        marginBottom: screenRatio * 43,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: screenRatio * 7,
        paddingHorizontal: screenRatio * 16,
        borderRadius: screenRatio * 10,
        backgroundColor: colors.white,
    },
    image: {
        width: screenRatio * 55,
        height: screenRatio * 55,
        borderRadius: screenRatio * 10,
        marginRight: screenRatio * 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: screenRatio * 14,
        lineHeight: screenRatio * 19,
        color: colors.black,
    },
    description: {
        fontSize: screenRatio * 12,
    },
    details: {
        width: screenRatio * 144,
        marginRight: screenRatio * 40,
    },
    balance: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: screenRatio * 15,
    },
    points: {
        fontSize: screenRatio * 16,
        lineHeight: screenRatio * 22,
        fontWeight: 'bold',
    },
    positive: {
        color: colors.green,
    },
    negative: {
        color: colors.red,
        fontWeight: 'normal',
    },
    nextIcon: {
        fontWeight: 'bold',
    },
});