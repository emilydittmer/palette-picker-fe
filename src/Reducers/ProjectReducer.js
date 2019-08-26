export const ProjectReducer = (state = [], action) => {
  switch( action.type ) {
    case 'GET PROJECTS':
      return action.projects;
    case 'ADD PROJECT':
      return [...state, action.project]
    default:
      return state;
  }
}