import React from 'react';
import {styles} from './styles';
import {Image} from 'react-native';
import {View} from '../Themed';

interface ImageCardProps {
    image: string;
}

export default function ImageCard({image}: ImageCardProps) {
    return (
        <View style={[styles.shadowProp, styles.container]}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
    );
}