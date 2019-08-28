import {
  getProjects,
  getPalettes,
  fetchPalettesInProject,
  addNewProject,
  addNewPalette
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
  it("should throw an error if the response is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getProjects()).resolves.toEqual({
      Error: "Error fetching projects"
    });
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
  it("should throw an error if the response is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getPalettes()).resolves.toEqual({
      Error: "Error fetching palettes"
    });
  });
});

describe("fetchPalettesInProject", () => {
  let mockPalettes, mockProjectId;
  beforeEach(() => {
    (mockProjectId = 1),
      (mockPalettes = [
        {
          id: 1,
          project_id: 1,
          color1: "#1234fe",
          color2: "#ffffff",
          color3: "#00ff22",
          color4: "#444444",
          color5: "#ffll88"
        }
      ]);
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

  it("should throw an error if the response is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(fetchPalettesInProject(mockProjectId)).resolves.toEqual({
      Error: "Error fetching palette"
    });
  });
});

describe("addNewProject", () => {
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

  it("should throw an error if the response is not ok", () => {
    const mockProject = { title: "Example 1" };
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(addNewProject(mockProject)).resolves.toEqual(
      Error("Error adding new project")
    );
  });
});

describe('addNewPalette', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  })
  xit('should be called with all params', () => {
    const mockColors = ["1234fe", "ffffff", "00ff22", "444444", "ffll88"]
    const mockProjectId = 1;
    const expected = [
      "https://palettepicker-api.herokuapp.com/api/v1/palettes",
      {
        method: "POST",
        body: JSON.stringify(mockColors, mockProjectId),
        headers: {
          "Content-Type": "application/json"
        }
      }
    ];
    addNewPalette(mockColors, mockProjectId)
    expect(window.fetch).toHaveBeenCalledWith(...expected)
  })
  it("should throw an error if the response is not ok", () => {
    const mockColors = ["1234fe", "ffffff", "00ff22", "444444", "ffll88"]
    const mockProjectId = 1;
    window.fetch = jest.fn().mockImplementationOnce(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(addNewProject(mockColors, mockProjectId)).resolves.toEqual(
      Error("Error adding new palette")
    );
  });
})
