import * as React from 'react';
import renderer from 'react-test-renderer';

import Card from '../Card';

describe('Card component', () => {
    it('renders correctly with title and description', () => {
        const tree = renderer
            .create(<Card title="Title" description="Description" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with custom style', () => {
        const customStyle = { backgroundColor: 'red' };
        const tree = renderer
            .create(
                <Card
                    title="Title"
                    description="Description"
                    style={customStyle}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly without description', () => {
        const tree = renderer
            .create(<Card title="Title" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with a long title', () => {
        const longTitle =
            'This is a really long title that should wrap to the next line';
        const tree = renderer
            .create(<Card title={longTitle} description="Description" />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with a long description', () => {
        const longDescription =
            'This is a really long description that should wrap to the next line. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
        const tree = renderer
            .create(<Card title="Title" description={longDescription} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});