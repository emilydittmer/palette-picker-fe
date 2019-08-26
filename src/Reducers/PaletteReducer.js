export const PaletteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD PALETTE':
      return action.palette;
    default:
      return state;
  }
}