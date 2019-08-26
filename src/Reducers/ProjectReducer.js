export const ProjectReducer = (state = [], action) => {
  switch( action.type ) {
    case 'GET PROJECTS':
      return action.projects;
    default:
      return state;
  }
}