import { getProjectsThunk, deleteProjectThunk, addProjectThunk } from './ProjectThunks'

describe('Project Thunks', () => {
  describe('getProjectsThunk', () => {
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
      await getProjectsThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should dispatch the IS LOADING action set to true', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await getProjectsThunk()(mockDispatch)
      expect(mockDispatch).toBeCalledWith(mockAction)
    })
    it('should call the getAllProjects action', async () => {
      const mockAction = {
        type: 'GET PROJECTS',
        projects: undefined
      }
      await getProjectsThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalledWith(mockAction)
    })
    it('should call the isLoading action set to false', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await getProjectsThunk()(mockDispatch)
      expect(mockDispatch).toBeCalledWith(mockAction)
    })
  })

  describe('deleteProjectThunk', () => {
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
    it('Should return and call dispatch', async () => {
      await deleteProjectThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Should call the isLoading action with arguement of true', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await deleteProjectThunk()(mockDispatch)
      expect(mockDispatch).toBeCalledWith(mockAction)
    })
    it('Should call the getAllProjects action', async () => {
      const mockAction = {
        type: 'GET PROJECTS',
        projects: undefined
      }
      await deleteProjectThunk()(mockDispatch)

      expect(mockDispatch).toBeCalledWith(mockAction)
    })
    it('Should call the isLoading action with false argument', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await deleteProjectThunk()(mockDispatch)
      expect(mockDispatch).toBeCalledWith(mockAction)
    })
  })

  describe('addProjectThunk', () => {
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
    it('Should return and call dispatch', async () => {
      await addProjectThunk()(mockDispatch)

      expect(mockDispatch).toHaveBeenCalled()
    })
    it('Shopuld call the isLoading action with true argument', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: true
      }
      await addProjectThunk()(mockDispatch)

      expect(mockDispatch).toBeCalledWith(mockAction)
    })
    it('Should dispatch addProject action', async () => {
      const mockAction = {
        type: 'ADD PROJECT',
        project: undefined
      }
      await addProjectThunk()(mockDispatch)

      expect(mockDispatch).toBeCalledWith(mockAction)
    })
    it('Should dispatch isLoading with false argument', async () => {
      const mockAction = {
        type: 'IS LOADING',
        loading: false
      }
      await addProjectThunk()(mockDispatch)

      expect(mockDispatch).toBeCalledWith(mockAction)
    })
  })
})