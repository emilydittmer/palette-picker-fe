import * as action from './index'

describe('Actions', () => {

  describe('addPalette', () => {
    it('Should have the type of ADD PALETTE', () => {
      const expected = 'ADD PALETTE'
      const result = action.addPalette().type

      expect(result).toEqual(expected)
    })
    it('Should have a palette property set to the argument', () => {
      const mockColors = ['red', 'blue']
      const result = action.addPalette(mockColors).palette

      expect(result).toEqual(mockColors)
    })
  })

  describe('getAllProjects', () => {
    it('Should have the type property of GET PROJECTS', () => {
      const expected = 'GET PROJECTS';
      const result = action.getAllProjects().type

      expect(result).toEqual(expected)
    })
    it('Should have a projects property set to the argument', () => {
      const mockProjects = [
        {id: 1},
        {id: 2}
      ]
      const result = action.getAllProjects(mockProjects).projects

      expect(result).toEqual(mockProjects)
    })
  })

  describe('hasErrored', () => {
    it('Should have the type property of HAS ERRORED', () => {
      const expected = 'HAS ERRORED';
      const result = action.hasErrored().type

      expect(result).toEqual(expected)
    })
    it('Should have an error property set to the argument', () => {
      const mockError = 'Error: mock error'
      const result = action.hasErrored(mockError).error

      expect(result).toEqual(mockError)
    })
  })
})