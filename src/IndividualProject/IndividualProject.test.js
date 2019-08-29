import React from 'react'
import { shallow } from 'enzyme'
import { IndividualProject, mapDispatchToProps, mapStateToProps } from './IndividualProject'

describe('IndividualProject', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      id: 1,
      deletePalette: jest.fn(() => ([{id: 1}])),
    }
    wrapper = shallow(<IndividualProject {...props} />)
  })
  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Should have state', () => {
    const expected = {
      palettes: [],
      error: ""
    }
    expect(wrapper.state()).toEqual(expected)
  })
  it('HAPPY PATH: Should call a deletePalette function', async () => {
    await wrapper.instance().deletePalette(1)
    const expected = [{id: 1}]
    expect(wrapper.state().palettes).toEqual(expected)
  })
  it('SAD PATH: Should call a deletePalette function', async () => {
    const props = {
      id: 1,
      deletePalette: jest.fn(() => undefined)
    }
    wrapper = shallow(<IndividualProject {...props}/>)
    await wrapper.instance().deletePalette()
    const expected = 'Error: No palettes in project'
    expect(wrapper.state().error).toEqual(expected)
  })
})

describe('mapStateToProps', () => {
  it('Should return the store', () => { 
    const expected = {id: 1}
    const result = mapStateToProps({id: 1})

    expect(result).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  
})