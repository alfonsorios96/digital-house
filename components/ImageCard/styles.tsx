import {StyleSheet} from 'react-native';
import constants from '../../constants/Layout';
import colors from "../../constants/Colors";

const {screenRatio} = constants;

export const styles = StyleSheet.create({
    container: {
        width: screenRatio * 353,
        maxHeight: screenRatio * 350,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: screenRatio * 20,
        marginBottom: screenRatio * 10,
    },
    image: {
        width: screenRatio * 200,
        height: screenRatio * 200,
    },
    shadowProp: {
        shadowColor: colors.black,
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: screenRatio * 0.5,
        shadowRadius: screenRatio * 3,
        elevation: screenRatio * 3,
        borderRadius: screenRatio * 10,
        backgroundColor: colors.white,
    },
});