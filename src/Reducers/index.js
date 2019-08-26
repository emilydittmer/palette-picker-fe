import { combineReducers } from 'redux'
import { ProjectReducer } from './ProjectReducer'
import { PaletteReducer } from './PaletteReducer'
import { LoadingReducer } from './LoadingReducer'
import { ErrorReducer } from './ErrorReducer'

const rootReducer = combineReducers({
  projects: ProjectReducer,
  currentPalette: PaletteReducer,
  error: ErrorReducer,
  isLoading: LoadingReducer
})

export default rootReducer;