export const addPalette = colors => ({
  type: 'ADD PALETTE',
  palette: colors
})

export const getAllProjects = projects => ({
  type: 'GET PROJECTS',
  projects
})

export const hasErrored = error => ({
  type: 'HAS ERRORED',
  error
})

export const isLoading = loading => ({
  type: 'IS LOADING',
  loading
})

export const getAllPalettes = palettes => ({
  type: 'GET PALETTES',
  palettes
})

export const addToPalettes = palette => ({
  type: 'ADD TO PALETTES',
  palette
})

export const addProject = project => ({
  type: 'ADD PROJECT',
  project
})