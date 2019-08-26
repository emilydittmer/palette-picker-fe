export const addPalette = colors => ({
  type: 'ADD PALETTE',
  palette: colors
})

export const getAllProjects = projects => ({
  type: 'GET PROJECTS',
  projects
})