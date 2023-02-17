import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {Text, View} from '../Themed';
import {styles} from './styles';
import {FilterParams} from '../../types';
import {formatDate, filterTransactions} from '../../utils';

export interface ItemProps {
    createdAt: string;
    product: string;
    points: number;
    image: string;
    is_redemption: boolean;
    id: string;
    onPress?: () => void;
    from_account_id?: number;
    to_account_id?: number;
    amount?: number;
    verification_code?: string;
    reason?: string;
}

interface ListProps {
    items: ItemProps[];
    filteredBy: FilterParams;
    onClick: () => void;
}

const Item: React.FC<ItemProps> = ({id, product, createdAt, image, points, is_redemption, onPress}) => {
    return (
        <TouchableOpacity onPress={() => onPress({id, product, createdAt, image, points, is_redemption})}>
            <View style={styles.item} testID={`list-item-${id}`}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.details}>
                    <Text style={styles.title}>{product}</Text>
                    <Text style={styles.description}>{formatDate(createdAt)}</Text>
                </View>
                <View style={styles.balance}>
                    {is_redemption ? <Text style={[styles.points, styles.negative]}>-</Text> :
                        <Text style={[styles.points, styles.positive]}>+</Text>}
                    <Text style={styles.points}>{points}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.nextIcon}> {'>'} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function List({items, filteredBy, onClick}: ListProps) {
    return (
        <FlatList
            style={styles.container}
            data={filterTransactions(filteredBy, items)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <Item id={item.id} image={item.image} product={item.product} createdAt={item.createdAt}
                      onPress={onClick} is_redemption={item.is_redemption} points={item.points}/>
            )}
            testID="list"
        />
    );
}