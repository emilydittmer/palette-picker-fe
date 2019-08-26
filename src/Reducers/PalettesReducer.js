export const PalettesReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET PALETTES':
      return action.palettes;
    case 'ADD TO PALETTES':
      return [...state, action.palette]
    default:
      return state;
  }
}