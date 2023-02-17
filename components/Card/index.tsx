import {Text, View} from '../Themed';
import {styles as defaultStyles} from './styles';
import {ViewStyle} from "react-native";

interface CardProps {
    title: string;
    description: string;
    style?: ViewStyle;
}

export default function Card({ title, description, style }: CardProps) {
    return (
        <View style={[style, defaultStyles.container, defaultStyles.shadowProp]}>
            <Text style={defaultStyles.title}>{title}</Text>
            <Text style={defaultStyles.description}>{description}</Text>
        </View>
    );
}