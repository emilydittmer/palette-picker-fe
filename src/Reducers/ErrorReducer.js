export const ErrorReducer = (state = '', action) => {
  switch(action.type) {
    case 'HAS ERRORED':
      return action.error;
    default:
      return state
  }
}