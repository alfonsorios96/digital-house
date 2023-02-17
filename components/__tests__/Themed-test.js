import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text, View, Button } from '../Themed';

describe('<Text />', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Text>Some text</Text>);
        expect(getByText('Some text')).toBeDefined();
    });
});


describe('<View />', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<View testID="test-view" />);
        expect(getByTestId('test-view')).toBeDefined();
    });
});

describe('<Button />', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<Button title="Press me" />);
        expect(getByTestId('button')).toBeDefined();
    });

    it('should call onPress function when clicked', () => {
        const onPress = jest.fn();
        const { getByTestId } = render(<Button title="Press me" onPress={onPress} />);
        fireEvent.press(getByTestId('button'));
        expect(onPress).toHaveBeenCalled();
    });
});

