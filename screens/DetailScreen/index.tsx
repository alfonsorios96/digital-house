import React from 'react';

import {ScreenProps} from '../../types';
import {formatDate} from '../../utils';
import {Text, View, Button} from '../../components/Themed';
import ImageCard from '../../components/ImageCard';
import {styles} from './styles';

export default function DetailScreen({navigation, route}: ScreenProps<'Detail'>) {
    const currentTransaction = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{currentTransaction.product}</Text>
            </View>
            <ImageCard image={currentTransaction.image}/>
            <Text style={styles.section}>Detalles del producto:</Text>
            <Text style={styles.subtitle}>Comprado el {formatDate(currentTransaction.createdAt)}</Text>
            <Text style={styles.section}>Con esta compra acumulaste:</Text>
            <Text style={styles.points}>{currentTransaction.points} puntos</Text>

            <Button style={styles.buttonLarge} title="Aceptar" onPress={() => {
                navigation.navigate('Home');
            }}/>
        </View>
    );
}