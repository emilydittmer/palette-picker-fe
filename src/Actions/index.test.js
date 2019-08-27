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

  describe('isLoading', () => {
    it('should have a type property of IS LOADING', () => {
      const expected = 'IS LOADING';
      const result = action.isLoading().type

      expect(result).toEqual(expected)
    })
    it('Should have a loading property set to the argument', () => {
      const expected = true;
      const result = action.isLoading(true).loading

      expect(result).toEqual(expected)
    })
  })

  describe('getAllPaletttes', () => {
    it('Should have the type property of GET PALETTES', () => {
      const expected = 'GET PALETTES';
      const result = action.getAllPalettes().type

      expect(result).toEqual(expected)
    })
    it('Should have a palettes property set to the argument', () => {
      const mockPalettes = [
        {id: 1},
        {id: 2}
      ]
      const result = action.getAllPalettes(mockPalettes).palettes

      expect(result).toEqual(mockPalettes)
    })
  })

  describe('addToPalettes', () => {
    it('Should have a type property of ADD TO PALETTES', () => {
      const expected = 'ADD TO PALETTES'
      const result = action.addToPalettes().type

      expect(result).toEqual(expected)
    }) 
    it('should have a palette property set to the argument', () => {
      const mockPalette = {
        id: 1
      }
      const result = action.addToPalettes(mockPalette).palette

      expect(result).toEqual(mockPalette)
    })
  })
})