import React from 'react'
import { render } from '@testing-library/react'
import App from './App';


describe('App Spec', () => {
    it('should render App correctly', async () => {
        const { getByTestId} = render(<App />)
        expect(getByTestId('prepayment')).toBeInTheDocument()
        expect(getByTestId('payment')).toBeInTheDocument()
        expect(getByTestId('table')).toBeInTheDocument()
    })
})