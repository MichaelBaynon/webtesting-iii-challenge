import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Dashboard from './Dashboard'

afterAll(cleanup)

describe('<Dashboard />', () => {
    it('rendered succesfully', () => {
        render(<Dashboard />)
    })
    it('default state is open and unlocked', () => {
        const {getByText} = render(<Dashboard />)

        getByText(/^open$/i)
        getByText(/^unlocked$/i)

        const lockBtn = getByText(/^lock gate$/i)
        const closeBtn = getByText(/^close gate$/i)
    })
})