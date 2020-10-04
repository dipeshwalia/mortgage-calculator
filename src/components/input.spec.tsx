import React from 'react'
import { render } from '@testing-library/react'
import Input from './Input';

describe('Input Component', () => {
    it('should render input correctly', async () => {
        const { getByTestId, container} = render(<Input />)
        expect(getByTestId('input')).toBeInTheDocument()

        let userInput = container.querySelector('input[type="number"]');

        //@ts-ignore, initialState is set to 1.
        expect(userInput?.value).toBe("1");
    })
})