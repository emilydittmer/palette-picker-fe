import { getAllProjects, hasErrored, isLoading, addProject } from '../Actions'
import { getProjects, deleteProject, addNewProject } from '../utils/apiCalls'

export const getProjectsThunk = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const response = await getProjects()
      dispatch(getAllProjects(response))
    }
    catch (error){
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}

export const deleteProjectThunk = id => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      await deleteProject(id)
      const response = await getProjects()
      dispatch(getAllProjects(response))
      dispatch(isLoading(false))
    }
    catch (error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}

export const addProjectThunk = project => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const response = await addNewProject(project)
      console.log(response)
      dispatch(addProject(response))
    }
    catch(error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}