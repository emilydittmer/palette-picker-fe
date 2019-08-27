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
})