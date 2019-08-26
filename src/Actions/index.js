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