import { ErrorReducer } from './ErrorReducer';
import { LoadingReducer } from './LoadingReducer'
import { PaletteReducer } from './PaletteReducer'
import { PalettesReducer } from './PalettesReducer'
import { ProjectReducer } from './ProjectReducer'


describe('Reducers', () => {

  describe('ErrorReducer', () => {
    it('Should return default state', () => {
      const mockState = undefined;
      const expected = '';
      const result = ErrorReducer(mockState, {})

      expect(result).toEqual(expected)
    })
    it('Should return error message when action type is HAS ERRORED', () => {
      const mockAction = {
        type: 'HAS ERRORED',
        error: 'Mock error message'
      }
      const expected = 'Mock error message'
      const result = ErrorReducer('', mockAction)
      
      expect(result).toEqual(expected)
    })
  })

  describe('LoadingReducer', () => {
    it('should return default state', () => {
      const mockState = undefined;
      const expected = false;
      const result = LoadingReducer(mockState, {})

      expect(result).toEqual(expected)
    })
    it('Should return loading state based on type IS LOADING', () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      const expected = true;
      const result = LoadingReducer(false, mockAction)

      expect(result).toEqual(expected)
    })
  })

  describe('PaletteReducer', () => {
    it('Should return default state', () => {
      const expected = []
      const mockState = undefined;
      const result = PaletteReducer(mockState, {})

      expect(result).toEqual(expected)
    })
    it('Should return a palette object when action type ADD PALETTE', () => {
      const mockAction = {
        type: 'ADD PALETTE',
        palette: {
          id: 1,
          color: 'red'
        }
      }
      const expected = {
        id: 1,
        color: 'red'
      }
      const result = PaletteReducer([], mockAction)

      expect(result).toEqual(expected)
    })
  })

  describe('PalettesReducer', () => {
    it('should return default state', () => {
      const mockState = undefined;
      const expected = [];
      const result = PalettesReducer(mockState, {})

      expect(result).toEqual(expected)
    })
    it('should return all palettes in state when action type GET PALETTES', () => {
      const mockAction = {
        type: 'GET PALETTES',
        palettes: [
          {id: 1},
          {id: 2},
          {id: 3}
        ]
      }
      const expected = [
        {id: 1},
        {id: 2},
        {id: 3}
      ]
      const result = PalettesReducer([], mockAction)

      expect(result).toEqual(expected)
    })
    it('should add a palette object to state array when action type ADD TO PALETTES', () => {
      const mockAction = {
        type: 'ADD TO PALETTES',
        palette: {
          id: 4
        }
      }
      const mockState = [
        {id: 1},
        {id: 2},
        {id: 3}
      ]
      const expected = [...mockState, {id: 4}]
      const result = PalettesReducer(mockState, mockAction)

      expect(result).toEqual(expected)
    })
  })

  describe('ProjectReducer', () => {
    it('Should return default state', () => {
      const mockState = undefined;
      const expected = [];
      const result = ProjectReducer(mockState, {})

      expect(result).toEqual(expected)
    })
    it('Should return an array of projects when action type GET PROJECTS', () => {
      const mockAction = {
        type: 'GET PROJECTS',
        projects: [
          {id: 1},
          {id: 2}
        ]
      }
      const expected = [
        {id: 1},
        {id: 2}
      ]
      const result = ProjectReducer([], mockAction)

      expect(result).toEqual(expected)
    })
    it('shoud add a project object to the projects array when action type ADD PROJECT', () => {
      const mockAction = {
        type: 'ADD PROJECT',
        project: {
          id: 3
        }
      }
      const mockState = [
        {id: 1},
        {id: 2}
      ]
      const expected = [...mockState, {id: 3}]
      const result = ProjectReducer(mockState, mockAction)

      expect(result).toEqual(expected)
    })
  })
})