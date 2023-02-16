import {RootTabScreenProps} from '../../types';
import {Text, View} from '../Themed';
import {styles} from './styles';

interface CardProps {
    title: string;
    description: string;
}

export default function Card({ title, description }: CardProps) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
}