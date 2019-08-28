import React from 'react';
import Color from './Color';
import { shallow } from 'enzyme';

describe('Color', () => {
  let wrapper, props, mockFunction, mockIndex;

  beforeEach(() => {
    props = {
      backgroundColor: 'ff7000',
      index: 0,
      handleLockColor: jest.fn()
    },
    wrapper = shallow(<Color {...props} />),
    mockFunction = jest.fn(),
    mockIndex = 0
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  xit('should call handleLockColor on click', () => {
    // console.log(wrapper.instance())
    wrapper.instance().handleLockColor(mockIndex)
    wrapper.find('.color-box__save-button').simulate('click')
    expect(wrapper.instance().handleLockColor()).toHaveBeenCalled()
  })
})