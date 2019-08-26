import { combineReducers } from 'redux'
import { ProjectReducer } from './ProjectReducer'
import { PaletteReducer } from './PaletteReducer'

const rootReducer = combineReducers({
  projects: ProjectReducer,
  currentPalette: PaletteReducer
})

export default rootReducer;