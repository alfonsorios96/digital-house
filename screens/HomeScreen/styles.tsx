import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from '../../constants/Colors';

const {window, screenRatio} = constants;

export const styles = StyleSheet.create({
    container: {
        width: window.width,
        height: window.height,
        marginTop: screenRatio * 50,
    },
    title: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: screenRatio * 22,
        lineHeight: screenRatio * 27,
        marginLeft: screenRatio * 20,
    },
    subtitle: {
        fontFamily: 'Avenir',
        fontSize: screenRatio * 18,
        lineHeight: screenRatio * 27,
        marginLeft: screenRatio * 20,
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
    buttonLarge: {
        marginLeft: screenRatio * 20,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    buttonSmall: {
        maxWidth: screenRatio * 170,
        height: screenRatio * 50,
    },
});