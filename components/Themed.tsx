import {
    Text as DefaultText,
    View as DefaultView,
    TouchableOpacity,
    ViewStyle
} from 'react-native';

import colors from '../constants/Colors';
import layout from '../constants/Layout';

export type TextProps = DefaultText['props'];
export type ViewProps = DefaultView['props'];

export function Text(props: TextProps) {
    const {style, ...otherProps} = props;

    return <DefaultText style={style} {...otherProps} />;
}

interface ButtonInterface {
    title: string;
    onPress?: () => void;
    style?: ViewStyle;
}

export function View(props: ViewProps) {
    const {style, ...otherProps} = props;

    return <DefaultView style={style} {...otherProps} />;
}

export function Button(props: ButtonInterface) {
    const {title, onPress, style} = props;

    const buttonStyles = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: layout.window.width * 0.9,
        maxHeight: layout.screenRatio * 50,
        backgroundColor: colors.blue,
        borderRadius: layout.screenRatio * 10,
    };

    const buttonTextStyles = {
        color: colors.white,
        fontSize: layout.screenRatio * 16,
        lineHeight: layout.screenRatio * 22,
        fontWeight: 'bold'
    };

    return (
        <View style={[buttonStyles, style]}>
            <TouchableOpacity onPress={onPress}>
                <Text style={buttonTextStyles}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}