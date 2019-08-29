import React from 'react'
import { shallow } from 'enzyme'
import { IndividualProject, mapStateToProps } from './IndividualProject'

describe('IndividualProject', () => {
  let wrapper, props, mockResponse;
  beforeEach(() => {
    props = {
      id: 1,
      deletePalette: jest.fn(() => ([{id: 1}])),
    }
    mockResponse = [
    { id: 1,
      project_id: 1,
      color_1: 'red',
      color_2: 'red',
      color_3: 'red',
      color_4: 'red',
      color_5: 'red' }]
    wrapper = shallow(<IndividualProject {...props} />)
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
        ok: true
      })
    })
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
    expect(wrapper.state().palettes).toEqual(mockResponse)
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
  it('HAPPY PATH: Should fetch palettes in project when mounting', async () => {
    await wrapper.instance().componentDidMount()
    expect(wrapper.state().palettes).toEqual(mockResponse)
  })
  it('SAD PATH: Should set an error if there are no projects when mounting', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve([]),
        ok: true
      })
    })
    await wrapper.instance().componentDidMount()
    expect(wrapper.state().error).toEqual('Error fetching palettes')
  })
  it('HAPPY PATH: Should filter palettes when recieving props', async () => {
    const mockProps = {
      palettes: [
        {project_id: 1, id: 1}
      ]
    }
    await wrapper.instance().componentWillReceiveProps(mockProps)
    expect(wrapper.state().palettes).toEqual(mockProps.palettes)
  })
  it('SAD PATH: Should set an error when no palettes while recieving props', async () => {
    const mockProps = {
      palettes: [
        {id: 1}
      ]
    }
    await wrapper.instance().componentWillReceiveProps(mockProps)
    expect(wrapper.state().error).toEqual('Error fetching palettes')
  })
})

describe('mapStateToProps', () => {
  it('Should return the store', () => { 
    const expected = {id: 1}
    const result = mapStateToProps({id: 1})

    expect(result).toEqual(expected)
  })
})
