import React from 'react'
import {render,cleanup, fireEvent} from '@testing-library/react'
import Controls from './Controls'

afterEach(cleanup)
describe('<Controls />', () => {
it('renders without crashing', () => {
  render(<Controls />)
})
it('open and unlocked', () => {
  const closeSpy = jest.fn()
  const lockSpy = jest.fn()

  const {getByText} =render(<Controls closed={false} locked={false} toggleClosed={closeSpy}  toggleLocked={lockSpy}  />)
  const closeBtn = getByText(/close gate/i)
  const lockBtn = getByText(/lock gate/i)

//checking if button is disabled
  expect(closeBtn.disabled).toBeFalsy()
  expect(lockBtn.disabled).toBeTruthy()

  //checking button status

  // fireEvent.click(closeBtn)
  // expect(closeSpy).not.toBeCalled()

  // fireEvent.click(lockBtn)
  // expect(lockSpy).toBeCalled()
})
})