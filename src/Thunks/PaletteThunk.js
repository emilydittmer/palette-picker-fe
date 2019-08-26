import { deletePalette, fetchPalettesInProject, addNewPalette, getPalettes } from '../utils/apiCalls'
import {hasErrored, isLoading, addToPalettes, getAllPalettes } from '../Actions'

export const deletePaletteThunk = (id, projectId) => {
  console.log(id, projectId)
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      await deletePalette(id)
      const response = await fetchPalettesInProject(projectId)
      console.log(response)
      dispatch(isLoading(false))
      return response    
    }
    catch (error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}

export const addPaletteThunk = (colors, id) => {
  console.log(colors, id)
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const response = await addNewPalette(colors, id)
      dispatch(addToPalettes(response))
      dispatch(isLoading(false))
    }
    catch(error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}

export const getPalettesThunk = () => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      const response = await getPalettes()
      dispatch(getAllPalettes(response))
      dispatch(isLoading(false))
    }
    catch(error) {
      dispatch(isLoading(false))
      dispatch(hasErrored(error))
    }
  }
}

