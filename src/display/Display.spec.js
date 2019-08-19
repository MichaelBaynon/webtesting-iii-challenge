// Test away!

import React from 'react'

import Display from './Display'

import renderer from 'react-test-renderer'

describe('<Display />', () => {
    it('matches snapshot', () => {

        const tree = renderer.create(<Display />)
        
        const locked = "green-led"
        const closed = "green-led"

        const {getByText, queryByText} = render(<Display 
        closedClass={closed}
        lockedClass={locked}
        />)

        expect(tree.toJSON()).toMatchSnapshot()

    })
    
})