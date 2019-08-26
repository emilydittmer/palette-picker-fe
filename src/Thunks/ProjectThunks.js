import { getAllProjects, hasErrored, isLoading } from '../Actions'
import { getProjects, deleteProject } from '../utils/apiCalls'

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

    }
    catch (error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}