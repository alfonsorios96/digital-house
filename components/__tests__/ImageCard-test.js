import * as React from 'react';
import renderer from 'react-test-renderer';

import ImageCard from '../ImageCard';

describe('ImageCard component', () => {
    it('renders correctly with a valid image URL', () => {
        const imageUrl =
            'https://example.com/image.jpg';
        const tree = renderer
            .create(<ImageCard image={imageUrl} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with an invalid image URL', () => {
        const invalidImageUrl =
            'https://example.com/invalid-image.jpg';
        const tree = renderer
            .create(<ImageCard image={invalidImageUrl} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with no image URL provided', () => {
        const tree = renderer.create(<ImageCard image={undefined} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with a custom style', () => {
        const customStyle = { borderColor: 'red' };
        const imageUrl =
            'https://example.com/image.jpg';
        const tree = renderer
            .create(
                <ImageCard image={imageUrl} style={customStyle} />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
