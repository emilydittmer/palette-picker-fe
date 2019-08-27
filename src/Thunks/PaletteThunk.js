import { deletePalette, fetchPalettesInProject, addNewPalette, getPalettes } from '../utils/apiCalls'
import {hasErrored, isLoading, getAllPalettes } from '../Actions'

export const deletePaletteThunk = (id, projectId) => {
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      await deletePalette(id)
      const response = await fetchPalettesInProject(projectId)
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
  return async dispatch => {
    try {
      dispatch(isLoading(true))
      await addNewPalette(colors, id)
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

