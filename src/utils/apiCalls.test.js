import {
  getProjects,
  getPalettes,
  fetchPalettesInProject,
  addNewProject,
  addNewPalette,
  deletePalette,
  deleteProject
} from "./apiCalls.js";

describe("getProjects", () => {
  let mockProjects;
  beforeEach(() => {
    mockProjects = [
      {
        id: 1,
        title: "Example 1"
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockProjects)
      });
    });
  });

  it("should be called with all params", () => {
    const expected = "https://palettepicker-api.herokuapp.com/api/v1/projects";
    getProjects();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });
  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const result = await getProjects()
    const expected = 'Error fetching projects'
    expect(result).toEqual(expected);
  });
});

describe("getPalettes", () => {
  let mockPalettes;
  beforeEach(() => {
    mockPalettes = [
      {
        id: 1,
        project_id: 1,
        color1: "#1234fe",
        color2: "#ffffff",
        color3: "#00ff22",
        color4: "#444444",
        color5: "#ffll88"
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPalettes)
      });
    });
  });
  it("should be called with all params", () => {
    const expected = "https://palettepicker-api.herokuapp.com/api/v1/palettes";
    getPalettes();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });
  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const response = await getPalettes()
    const expected = "Error fetching palettes"

    expect(response).toEqual(expected);
  });
});

describe("fetchPalettesInProject", () => {
  let mockPalettes, mockProjectId;
  beforeEach(() => {
    mockProjectId = 1
    mockPalettes = [
      {
        id: 1,
        project_id: 1,
        color1: "#1234fe",
        color2: "#ffffff",
        color3: "#00ff22",
        color4: "#444444",
        color5: "#ffll88"
      }
      ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPalettes)
      });
    });
  });
  it("should be called with all params", () => {
    const expected = `https://palettepicker-api.herokuapp.com/api/v1/projects/${mockProjectId}/palettes`;
    fetchPalettesInProject(mockProjectId);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it("should throw an error if the response is not ok", async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const result = await fetchPalettesInProject(mockProjectId)
    const expected = 'Error fetching palette'
    expect(result).toEqual(expected);
  });
});

describe("addNewProject", () => {
  let mockResponse
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });
  it("should be called with all params", () => {
    const mockProject = { title: "Example 1" };
    const expected = [
      "https://palettepicker-api.herokuapp.com/api/v1/projects",
      {
        method: "POST",
        body: JSON.stringify(mockProject),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ];
    addNewProject(mockProject);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("should throw an error if the response is not ok", async () => {
    const mockProject = { title: "Example 1" };
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const result = await addNewProject(mockProject)
    const expected = 'Error adding new project'
    expect(result).toEqual(expected);
  });
});

describe('addNewPalette', () => {
  let mockResponse
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  })
  xit('should be called with all params', async () => {
    const mockColors = ["1234fe", "ffffff", "00ff22", "444444", "ffll88"]
    const mockProjectId = 1;
    const expected = {
      project_id: mockProjectId,
      color_1: "#" + mockColors[0],
      color_2: "#" + mockColors[1],
      color_3: "#" + mockColors[2],
      color_4: "#" + mockColors[3],
      color_5: "#" + mockColors[4]
    }
    const stringifiedExpected = JSON.stringify(expected)
    await addNewPalette(mockColors, mockProjectId)
    expect().toHaveBeenCalledWith(stringifiedExpected)
  })
  it("should throw an error if the response is not ok", async () => {
    const mockColors = ["1234fe", "ffffff", "00ff22", "444444", "ffll88"]
    const mockProjectId = 1;
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    const result = await addNewProject(mockColors, mockProjectId)
    const expected = 'Error adding new project'
    expect(result).toEqual(expected);
  });
})

describe('deletePalette', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      });
    });
  })
  it('should be called with correct arguments', () => {
    const expected = ['https://palettepicker-api.herokuapp.com/api/v1/palettes/1', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }];
    deletePalette(1)
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  })
  it('should throw an error', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    const response = await deletePalette(1)
    const expected = 'Error deleting palette'
    expect(response).toEqual(expected);
  })
})

describe('deleteProject', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve()
      });
    });
  })
  it('should be called with correct arguments', () => {
    const expected = ['https://palettepicker-api.herokuapp.com/api/v1/projects/1', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }];
    deleteProject(1)
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  })
  it('should throw an error', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    const response = await deleteProject(1)
    const expected = 'Error deleting project'
    expect(response).toEqual(expected);
  })
})
