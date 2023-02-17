import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {Text, View} from '../Themed';
import {styles} from './styles';

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

type FilterParams = 'all' | 'earned' | 'redeemed';

interface ListProps {
    items: ItemProps[];
    filteredBy: FilterParams;
}

function _formatDate(date: string): string {
    const dateFormatted: Date = new Date(date);
    const day = ('0' + dateFormatted.getDate()).slice(-2);
    const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const monthIndex = dateFormatted.getMonth();
    const year = dateFormatted.getFullYear();
    const monthName = monthNames[monthIndex];
    return `${day} de ${monthName}, ${year}`;
}

function _filter(filter: FilterParams, items: ItemProps[]): ItemProps[] {
    let filteredData: ItemProps[] = [];
    switch (filter) {
        case 'redeemed':
            filteredData = items.filter(item => item.is_redemption);
            break;
        case 'earned':
            filteredData = items.filter(item => !item.is_redemption);
            break;
        case 'all':
        default:
            filteredData = [...items];
            break;
    }
    return filteredData;
}

const Item: React.FC<ItemProps> = ({id, product, createdAt, image, points, is_redemption, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.details}>
                    <Text style={styles.title}>{product}</Text>
                    <Text style={styles.description}>{_formatDate(createdAt)}</Text>
                </View>
                <View style={styles.balance}>
                    {is_redemption ? <Text style={[styles.points, styles.negative]}>-</Text> : <Text style={[styles.points, styles.positive]}>+</Text>}
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

export default function List({items, filteredBy}: ListProps) {
    return (
        <FlatList
            style={styles.container}
            data={_filter(filteredBy, items)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
                <Item id={item.id} image={item.image} product={item.product} createdAt={item.createdAt}
                      onPress={item.onPress} is_redemption={item.is_redemption} points={item.points}/>
            )}
        />
    );
}