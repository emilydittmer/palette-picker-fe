export const getProjects = () => {
  return fetch('https://palettepicker-api.herokuapp.com/api/v1/projects')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching projects');
      } else {
        return response.json();
      }
    })
    .then(projects => {
      return projects.map(project => {
        return {
          id: project.id,
          title: project.title
        }
      })
    })
    .catch(error => console.log(error.message))
}

export const getPalettes = () => {
  return fetch('https://palettepicker-api.herokuapp.com/api/v1/palettes')
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching palettes');
      } else {
        return response.json();
      }
    })
    .then(palettes => {
      return palettes.map(palette => {
        return {
          id: palette.id,
          project_id: palette.project_id,
          color_1: palette.color_1,
          color_2: palette.color_2,
          color_3: palette.color_3,
          color_4: palette.color_4,
          color_5: palette.color_5
        }
      })
    })
    .catch(error => error.message)
}

export const fetchPalettesInProject = (id) => {
  return fetch(`https://palettepicker-api.herokuapp.com/api/v1/projects/${id}/palettes`)
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching palette');
      } else {
        return response.json();
      }
    })
    .then(palettes => {
      return palettes.map(palette => {
        return {
          id: palette.id,
          project_id: palette.project_id,
          color_1: palette.color_1,
          color_2: palette.color_2,
          color_3: palette.color_3,
          color_4: palette.color_4,
          color_5: palette.color_5
        }
      })
    })
    .catch(error => error.message)
}

export const addNewProject = (project) => {
  return fetch('https://palettepicker-api.herokuapp.com/api/v1/projects', {
    method: 'POST',
    body: JSON.stringify(project),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if(!response.ok){
      return error => console.log(error);
    } else {
      return response.json();
    }
  })
  .then(newProject => {
      return {
        id: newProject.id,
        title: project.title
      }
  })
  .catch(error => console.log(error.message))
}

export const addNewPalette = (colors, id) => {
  const newPalette = {
    project_id: id,
    color_1: `#${colors[0]}`,
    color_2: `#${colors[1]}`,
    color_3: `#${colors[2]}`,
    color_4: `#${colors[3]}`,
    color_5: `#${colors[4]}`
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPalette)
  }
  console.log(newPalette)
  return fetch('https://palettepicker-api.herokuapp.com/api/v1/palettes', options)
    .then( response => {
        if(!response.ok){
          return error => console.log(error);
        } else {
          return response.json();
        }
      })
      .then(palette => console.log(palette))
      .catch(error => console.log(error.message))
}

export const deletePalette = async (id) => {
  await fetch(`https://palettepicker-api.herokuapp.com/api/v1/palettes/${id}`, {
    method:'DELETE',
    headers: {
      'Content-Type':"application/json"
    }
  })
    .then(response => response.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => Error('Error deleting palette'));
}

export const deleteProject = async (id) => {
  await fetch(`https://palettepicker-api.herokuapp.com/api/v1/projects/${id}`, {
    method:'DELETE',
    headers: {
      'Content-Type':"application/json"
    }
  })
    .then(response => response.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => Error('Error deleting project'));
}