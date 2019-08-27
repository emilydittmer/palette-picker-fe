import { deletePaletteThunk, addPaletteThunk, getPalettesThunk } from './PaletteThunk'

describe('Palette Thunks', () => {
  
  describe('deletePaletteThunk', () => {
    let id, projectId, mockDispatch, mockResponse
      beforeEach(() => {
        id = 1;
        projectId = 1
        mockDispatch = jest.fn()
        mockResponse = {id: 1}
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.resolve({
            json: () => Promise.resolve(mockResponse)
          })
        })
      })
    it('Should return and call a dispatch function', async () => {
      await deletePaletteThunk(id, projectId)(mockDispatch)
      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should call the isLoading dispatch', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await deletePaletteThunk(id, projectId)(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('addPaletteThunk', () => {
    let mockDispatch, mockResponse
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = {id: 1}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
    it('Should return and call a dispatch function', async () => {
      await addPaletteThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should call this is loading action', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await addPaletteThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    xit('Should cavll the getAllPalettes action', async () => {
      const mockAction = {
        type: 'HAS ERRORED',
        "error": `[TypeError: Cannot read property '0' of undefined]`
      }
      await addPaletteThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('getPalettesthunk', () => {
    let mockDispatch, mockResponse
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = {id: 1}
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse)
        })
      })
    })
    it('Should return an and call a dispatch function', async () => {
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should call the IS LOADING action', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })
})