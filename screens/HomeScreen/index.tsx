import React, {useEffect, useState} from 'react';

import {RootTabScreenProps, CardDashboardParams, FilterParams} from '../../types';
import {formatNumber, aggregateData} from '../../utils';
import {Text, View, Button} from '../../components/Themed';
import Card from '../../components/Card';
import List, {ItemProps} from '../../components/List';
import {styles} from './styles';

import axios from 'axios';

export default function HomeScreen({navigation}: RootTabScreenProps<'Home'>) {
    const [transactions, setTransactions] = useState<ItemProps[]>([]);
    const [cardDashboard, setCardDashboard] = useState<CardDashboardParams>({
        month: '',
        points: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
                setTransactions(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData()
            .then(() => {
                const cardDashboardParsed: CardDashboardParams[] = aggregateData(transactions);
                setCardDashboard(cardDashboardParsed[cardDashboardParsed.length - 1]);
            }).catch(error => {
            console.error(error);
        });
    }, []);
    const [filter, setFilter]: FilterParams = useState<FilterParams>('all');

    const handleFilterChange = (newFilter: FilterParams) => {
        setFilter(newFilter);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido de vuelta!</Text>
            <Text style={styles.subtitle}>Ruben Rodriguez</Text>
            <Text style={styles.section}>TUS PUNTOS</Text>
            <Card style={styles.card} title={cardDashboard.month} description={formatNumber(cardDashboard.points)}/>
            <Text style={styles.section}>TUS MOVIMIENTOS</Text>
            <List items={transactions} filteredBy={filter}></List>
            {
                filter !== 'all' ? <Button style={styles.buttonLarge} title="Todos" onPress={() => {
                    handleFilterChange('all');
                }}/> : <View style={styles.buttonGroup}>
                    <Button style={styles.buttonSmall} title="Ganados" onPress={() => {
                        handleFilterChange('earned');
                    }}/>
                    <Button style={styles.buttonSmall} title="Canjeados" onPress={() => {
                        handleFilterChange('redeemed');
                    }}/>
                </View>
            }
        </View>
    );
}