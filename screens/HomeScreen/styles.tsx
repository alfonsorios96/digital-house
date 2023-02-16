import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from '../../constants/Colors';

const {window, screenRatio} = constants;

export const styles = StyleSheet.create({
    container: {
        width: window.width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: screenRatio * 20,
        lineHeight: screenRatio * 27,
    },
    subtitle: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: screenRatio * 20,
        lineHeight: screenRatio * 27,
    },
    section: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: screenRatio * 14,
        fontWeight: 'bold',
        lineHeight: screenRatio * 19,
        color: colors.grey,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: screenRatio * 12,
        paddingHorizontal: screenRatio * 16,
    },
    image: {
        width: screenRatio * 50,
        height: screenRatio * 50,
        borderRadius: screenRatio * 25,
        marginRight: screenRatio * 16,
    },
    textContainer: {
        flex: 1,
    },
    description: {
        fontSize: screenRatio * 14,
        color: colors.greyLight,
    },
});