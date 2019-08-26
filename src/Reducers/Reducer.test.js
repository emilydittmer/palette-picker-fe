import { ErrorReducer } from './ErrorReducer';
import { LoadingReducer } from './LoadingReducer'


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
})