import React from 'react'
import { shallow } from 'enzyme'
import { ProjectsContainer, mapDispatchToProps, mapStateToProps } from './ProjectsContainer'

describe('ProjectsContainer', () => {
  let wrapper, projects, getAllProjects
  beforeEach(() => {
    projects = [{id: 1}]
    getAllProjects = jest.fn()
    wrapper = shallow(<ProjectsContainer 
      projects={projects}
      getAllProjects={getAllProjects}
      />)
  })
  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('Should have a default state', () => {
    const expectedState = {
      projects: [],
      newTitle: "",
      error: null
    }
    expect(wrapper.state()).toEqual(expectedState)
  })
  it('Should be able to handle changes and set them to state', () => {
    const event = {
      target: {
        name: 'newTitle',
        value: 'Example Project'
      }
    }

    wrapper.instance().handleChange(event)
    expect(wrapper.state().newTitle).toEqual(event.target.value)
  })
  it('Should check to see if a title matches any from state', () => {
    const mockProject = {
      title: 'Example Project'
    }
    wrapper.instance().setState({projects: [mockProject]})
    
  })
})