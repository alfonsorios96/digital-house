import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import List, {ItemProps} from '../List';

const mockOnClick = jest.fn();

const mockItems: ItemProps[] = [
    {
        id: '1',
        product: 'Product 1',
        createdAt: '2022-01-01T12:00:00Z',
        image: 'https://placeimg.com/640/480/any',
        points: 10,
        is_redemption: false
    },
    {
        id: '2',
        product: 'Product 2',
        createdAt: '2022-01-02T12:00:00Z',
        image: 'https://placeimg.com/640/480/any',
        points: -10,
        is_redemption: true
    }
];

describe('List', () => {
    it('should render list correctly', () => {
        const {getByTestId} = render(<List items={mockItems} filteredBy={{}} onClick={mockOnClick}/>);
        const list = getByTestId('list');
        expect(list).not.toBeNull();
    });

    it('should render items correctly', () => {
        const {getByTestId, getByText} = render(<List items={mockItems} filteredBy={{}} onClick={mockOnClick}/>);
        const listItem1 = getByTestId('list-item-1');
        const listItem2 = getByTestId('list-item-2');
        expect(listItem1).not.toBeNull();
        expect(listItem2).not.toBeNull();
        expect(getByText('Product 1')).not.toBeNull();
        expect(getByText('Product 2')).not.toBeNull();
    });

    it('should call onClick when an item is clicked', () => {
        const {getByTestId} = render(<List items={mockItems} filteredBy={{}} onClick={mockOnClick}/>);
        const listItem1 = getByTestId('list-item-1');
        fireEvent.press(listItem1);
        expect(mockOnClick).toHaveBeenCalledWith({
            id: '1',
            product: 'Product 1',
            createdAt: '2022-01-01T12:00:00Z',
            image: 'https://placeimg.com/640/480/any',
            points: 10,
            is_redemption: false
        });
    });

    it('should filter items correctly', () => {
        const {getByText, queryByText} = render(
            <List
                items={mockItems}
                filteredBy={{
                    startDate: new Date('2022-01-02T12:00:00Z'),
                    endDate: new Date('2022-01-03T12:00:00Z'),
                    type: 'redemption'
                }}
                onClick={mockOnClick}
            />
        );
        expect(getByText('Product 2')).not.toBeNull();
    });
});
