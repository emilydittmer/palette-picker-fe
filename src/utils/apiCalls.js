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
  console.log(id)
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
  // return fetch('https://palettepicker-api.herokuapp.com/api/v1/projects', {
  //   method: 'POST',
  //   body: JSON.stringify(project),
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // })
  // .then(response => {
  //   if(!response.ok){
  //     return error => console.log(error);
  //   } else {
  //     return response.json();
  //   }
  // })
  // .then(project => {
  //   return project.map(project => {
  //     return {
  //       id: project.id,
  //       title: project.title
  //     }
  //   })
  // })
  // .catch(error => console.log(error.message))
}