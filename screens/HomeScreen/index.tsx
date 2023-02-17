import React, {useState} from 'react';

import {RootTabScreenProps} from '../../types';
import {Text, View, Button} from '../../components/Themed';
import Card from '../../components/Card';
import List, {ItemProps} from '../../components/List';
import {styles} from './styles';

const data: ItemProps[] = [
    {
        "createdAt": "2022-12-09T06:34:25.607Z",
        "product": "Handmade Metal Shoes",
        "points": 16434,
        "image": "https://loremflickr.com/640/480/transport",
        "is_redemption": false,
        "id": "1",
    }, {
        "createdAt": "2022-12-09T17:02:51.904Z",
        "product": "Recycled Plastic Tuna",
        "points": 92984,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": false,
        "id": "2",
    }, {
        "createdAt": "2022-12-09T10:20:00.909Z",
        "product": "Fantastic Granite Bacon",
        "points": 42416,
        "image": "https://loremflickr.com/640/480/technics",
        "is_redemption": false,
        "id": "3",
    }, {
        "createdAt": "2022-12-09T00:30:23.966Z",
        "product": "Fantastic Fresh Gloves",
        "points": 23913,
        "image": "https://loremflickr.com/640/480/city",
        "is_redemption": true,
        "id": "4",
    }, {
        "createdAt": "2022-12-08T18:54:56.243Z",
        "product": "Rustic Rubber Bacon",
        "points": 69814,
        "image": "https://loremflickr.com/640/480/people",
        "is_redemption": true,
        "id": "5",
    }, {
        "createdAt": "2022-12-09T14:12:11.097Z",
        "product": "Tasty Concrete Cheese",
        "points": 81585,
        "image": "https://loremflickr.com/640/480/business",
        "is_redemption": false,
        "id": "6",
    }, {
        "createdAt": "2022-12-09T12:50:53.209Z",
        "product": "Oriental Cotton Keyboard",
        "points": 88323,
        "image": "https://loremflickr.com/640/480/nightlife",
        "is_redemption": false,
        "id": "7",
    }, {
        "createdAt": "2022-12-08T20:32:14.169Z",
        "product": "Oriental Soft Pants",
        "points": 87794,
        "image": "https://loremflickr.com/640/480/animals",
        "is_redemption": true,
        "id": "8",
    }, {
        "createdAt": "2022-12-09T05:46:47.645Z",
        "product": "Luxurious Rubber Bacon",
        "points": 13063,
        "image": "https://loremflickr.com/640/480/food",
        "is_redemption": true,
        "id": "9",
    }, {
        "createdAt": "2022-12-09T10:56:34.206Z",
        "product": "Elegant Rubber Fish",
        "points": 91311,
        "image": "https://loremflickr.com/640/480/transport",
        "is_redemption": false,
        "id": "10",
    }, {
        "createdAt": "2022-12-09T12:36:43.169Z",
        "product": "Recycled Wooden Salad",
        "points": 44871,
        "image": "https://loremflickr.com/640/480/city",
        "is_redemption": false,
        "id": "11",
    }, {
        "createdAt": "2023-02-04T07:48:16.249Z",
        "product": "Licensed Metal Salad",
        "points": 93367,
        "image": "https://loremflickr.com/640/480/food",
        "is_redemption": false,
        "id": "12",
        "from_account_id": 781,
        "to_account_id": 369,
        "amount": 16,
        "verification_code": "8319",
        "reason": "test16",
    }, {
        "createdAt": "2023-02-04T08:45:26.468Z",
        "product": "Ergonomic Plastic Bacon",
        "points": 33432,
        "image": "https://loremflickr.com/640/480/food",
        "is_redemption": false,
        "id": "13",
        "from_account_id": 781,
        "to_account_id": 369,
        "amount": 16,
        "verification_code": "8319",
        "reason": "test16",
    }];

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
    const [isFiltering, setIsFiltering] = useState(false);

    const renderButtons = () => {
        return isFiltering ? (<Button title="Todos" onPress={() => {
            setIsFiltering(false);
        }}/>) : (<View>
            <Button title="Ganados" onPress={() => {
                setIsFiltering(true);
            }}/>
            <Button title="Canjeados" onPress={() => {
                setIsFiltering(true);
            }}/>
        </View>)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido de vuelta!</Text>
            <Text style={styles.subtitle}>Ruben Rodriguez</Text>
            <Text style={styles.section}>TUS PUNTOS</Text>
            <Card style={styles.card} title="Diciembre" description="10,00.00 pts"/>
            <Text style={styles.section}>TUS MOVIMIENTOS</Text>
            <List items={data}></List>
            {
                !isFiltering ? <Button style={styles.buttonLarge} title="Todos" onPress={() => {
                    setIsFiltering(true);
                }}/> : <View style={styles.buttonGroup}>
                    <Button style={styles.buttonSmall} title="Ganados" onPress={() => {
                        setIsFiltering(false);
                    }}/>
                    <Button style={styles.buttonSmall} title="Canjeados" onPress={() => {
                        setIsFiltering(false);
                    }}/>
                </View>
            }
        </View>
    );
}