import React from 'react';
import { render } from '@testing-library/react';
import Layout from "./Layout";

describe('Layout Component', () => {
    test('Renders children text', () => {
        const { getByText } = render(<Layout>hello</Layout>);

        getByText('hello');
    })
});
