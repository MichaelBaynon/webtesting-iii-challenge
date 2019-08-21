import React from 'react'
import { render, cleanup} from '@testing-library/react'
import Dashboard from './Dashboard'

afterAll(cleanup)

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    })
    it('default state open and unlocked', () => {
        const {getByText} = render(<Dashboard />)

        //verify open and unlocked
        getByText(/^open$/i)
        getByText(/^unlocked$/i)


        const lockBtn = getByText(/^lock gate$/i)
        const closeBtn = getByText(/^close gate$/i)
    })
})