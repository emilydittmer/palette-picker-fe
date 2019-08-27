import React from 'react'
import { shallow } from 'enzyme'
import { ProjectsContainer, mapDispatchToProps, mapStateToProps } from './ProjectsContainer'

describe('ProjectsContainer', () => {
  let wrapper, projects, getAllProjects, addProject
  beforeEach(() => {
    projects = [{title: 'Example Project', id: 1}]
    getAllProjects = jest.fn()
    addProject = jest.fn()
    wrapper = shallow(<ProjectsContainer 
      projects={projects}
      getAllProjects={getAllProjects}
      addProject={addProject}
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
    wrapper.instance().setState({newTitle: 'Example Project'})
    const result = wrapper.instance().handleCheckTitle()

    expect(result).toEqual(projects)
  })
  it('Should be able set an error if the title matches a previous title when adding a new project', () => {
    const event = {
      preventDefault: jest.fn()
    }
    wrapper.instance().setState({newTitle: 'Example Project'})
    wrapper.instance().addNewProject(event)
    expect(wrapper.state().error).toEqual('Project name taken')
  })
})