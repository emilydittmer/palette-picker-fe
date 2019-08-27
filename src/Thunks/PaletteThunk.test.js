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
            json: () => Promise.resolve(mockResponse),
            ok: true
          })
        })
      })
    it('Should return and call a dispatch function', async () => {
      await deletePaletteThunk(id, projectId)(mockDispatch)
      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should call the isLoading action true', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await deletePaletteThunk(id, projectId)(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('Should call the isLoading dispatch false', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await deletePaletteThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should call isLoading false when catching error', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await deletePaletteThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should dispatch hasErrored action when catching error', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'HAS ERRORED',
        error: TypeError('Promise.catch is not a function')
      }
      await deletePaletteThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('addPaletteThunk', () => {
    let mockDispatch, mockResponse, colors, id
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = [{id: 1}]
      colors = ['red', 'blue']
      id= 1
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse),
          ok: true
        })
      })
    })
    it('Should return and call a dispatch function', async () => {
      await addPaletteThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should call this isLoading action', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await addPaletteThunk()(mockDispatch)
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('Should call the getAllPalettes action', async () => {
      const mockAction = {
        type: 'GET PALETTES',
        palettes: mockResponse
      }
      await addPaletteThunk(colors, id)(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('Should dispatch isLoading action false', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await addPaletteThunk()(mockDispatch)
      
      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should dispatch isLoading action false when catching error', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await addPaletteThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should dispatch hasErrored action when catching error', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'HAS ERRORED',
        error: TypeError('Cannot read property \'0\' of undefined')
      }
      await addPaletteThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })

  describe('getPalettesthunk', () => {
    let mockDispatch, mockResponse
    beforeEach(() => {
      mockDispatch = jest.fn()
      mockResponse = [{id: 1}]
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => Promise.resolve(mockResponse),
          ok: true
        })
      })
    })
    it('Should return an and call a dispatch function', async () => {
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should dispatch isLoading action true', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('Should dispatch the getAllPalettes action', async () => {
      const mockAction = {
        type: 'GET PALETTES',
        palettes: mockResponse
      }
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('Should dispatch the isLoading false', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should dispatch isLoading false when catching error', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('SAD PATH: Should dispatch hasErrored when catching error', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.catch()
      })
      const mockAction = {
        type: 'HAS ERRORED',
        error: TypeError('Promise.catch is not a function')
      }
      await getPalettesThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
  })
})