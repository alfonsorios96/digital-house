/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
    Text as DefaultText,
    View as DefaultView,
    TouchableOpacity,
} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
    const theme = useColorScheme();
    const colorFromProps = props[theme];

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function Text(props: TextProps) {
    const {style, lightColor, darkColor, ...otherProps} = props;
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return <DefaultText style={[{color}, style]} {...otherProps} />;
}

interface ButtonInterface {
    title: string;
    onPress?: () => void;
}

export function View(props: ViewProps) {
    const {style, lightColor, darkColor, ...otherProps} = props;
    const backgroundColor = useThemeColor({light: lightColor, dark: darkColor}, 'background');

    return <DefaultView style={[{backgroundColor}, style]} {...otherProps} />;
}

export function Button(props: ButtonInterface) {
    const {title, onPress, ...otherProps} = props;

    const buttonStyles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        maxHeight: 50,
        backgroundColor: '#334FFA',
        borderRadius: 10,
    };

    const buttonTextStyles = {
        color: '#FFFFFF',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: 'bold'
    };

    return (
        <View style={buttonStyles}>
            <TouchableOpacity onPress={onPress}>
                <Text style={buttonTextStyles}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}