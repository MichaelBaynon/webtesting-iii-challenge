import React from 'react'
import Display from './Display'
import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

describe('<Display />', () => {
        it('renders without crashing', () => {
            render(<Display />)
    })
        it(' displays as open and unlocked', () => {
            const {getByText, queryByText} = render(<Display closed={false} locked={false} />)
            getByText(/unlocked/i)
            getByText(/open/i)
            expect(queryByText(/closed/i)).toBe(null)
    })
        it('displays as closed and unlocked', () => {
            const {getByText} =render(<Display closed={true} locked={false} />)
            getByText(/unlocked/i)
            getByText(/closed/i)
        })
        it('displays as closed and locked', () => {
            const {getByText} = render(<Display closed={true} locked={true} />)
            getByText(/^locked$/i)
            getByText(/closed/i)
          })
})