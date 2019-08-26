import { combineReducers } from 'redux'
import { ProjectReducer } from './ProjectReducer'
import { PaletteReducer } from './PaletteReducer'
import { LoadingReducer } from './LoadingReducer'
import { ErrorReducer } from './ErrorReducer'
import { PalettesReducer } from './PalettesReducer'

const rootReducer = combineReducers({
  projects: ProjectReducer,
  palettes: PalettesReducer,
  currentPalette: PaletteReducer,
  error: ErrorReducer,
  isLoading: LoadingReducer,
})

export default rootReducer;