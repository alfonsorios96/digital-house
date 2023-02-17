import {ItemProps} from './components/List';
import {CardDashboardParams, FilterParams} from './types';

export function aggregateData(items: ItemProps[]): CardDashboardParams[] {
    const result = items.reduce((acc: { [key: string]: CardDashboardParams }, item) => {
        const date = new Date(item.createdAt);
        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const month = `${date.getFullYear()}-${date.getMonth() + 1}`;

        if (!acc[month]) {
            acc[month] = {month: monthNames[date.getMonth()], points: 0};
        }

        const points = item.is_redemption ? -item.points : item.points;
        acc[month].points += points;

        return acc;
    }, {});

    return Object.values(result);
}

export function formatNumber(number: number): string {
    const formattedNumber = new Intl.NumberFormat('es-ES', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(number);

    return formattedNumber.replace('.', ',') + ' pts';
}

export function formatDate(date: string): string {
    const dateFormatted: Date = new Date(date);
    const day = ('0' + dateFormatted.getDate()).slice(-2);
    const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const monthIndex = dateFormatted.getMonth();
    const year = dateFormatted.getFullYear();
    const monthName = monthNames[monthIndex];
    return `${day} de ${monthName}, ${year}`;
}

export function filterTransactions(filter: FilterParams, items: ItemProps[]): ItemProps[] {
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