import React from 'react'
import { render } from '@testing-library/react'
import Dropdown from './Dropdown';

describe('Input Component', () => {
    it('should render input correctly', async () => {
        const { getByTestId} = render(<Dropdown />)
        expect(getByTestId('dropdown')).toBeInTheDocument()
    })
})