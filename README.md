# Palette Picker

## Description

Palette Picker is a paired project, built in ten days, focusing on RESTful API design skills. This app randomly generates a palette and displays any of the users saved projects and palettes. The user can also lock a color and randomize the palette again. Once the user has a palette they would like to save, they can then add the palette to an existing project or create a new project. Once a project or palette is saved, the user will also be able to remove the project or palette. 

## Technologies Used
### Front-End
- SCSS
- Flex-box
- React
- Redux
- API fetches
- Thunks
- Enzyme & Jest testing
- Webpack
- NPM
- JavaScript
- HTML
### Back-end
- Node.js/Express
- Knex
- SQL
- Postgres

## Installation

```git clone https://github.com/emilydittmer/palette-picker-fe.git```

In the same folder you cloned the repository also clone the back-end repository with

```git clone https://github.com/emilydittmer/palette-picker-be.git```

Once you have cloned the repo, to install the library dependencies cd into the folders just created and run:

```npm install```

Once everything is installed in both folders, in the back-end folder, run npm start in your terminal, you should see "Listening on http://localhost:3000/". Now opening a separate tab in the terminal cd into the front-end repository and run npm start you're default browser should open a tab to http://localhost:3000/ if not simply go to http://localhost:3001/ in your preferred browser.


## Screenshots
### Home Page
![Home Page](https://github.com/emilydittmer/palette-picker-fe/blob/master/src/demo/homepage.png)
### Generate Palette
![Generate Palette](https://github.com/emilydittmer/palette-picker-fe/blob/master/src/demo/generate-colors.gif)
### Delete Palette and Project
![Delete Palette](https://github.com/emilydittmer/palette-picker-fe/blob/master/src/demo/delete-palette.gif)
![Delete Project](https://github.com/emilydittmer/palette-picker-fe/blob/master/src/demo/delete-project.gif)
### Wireframing
![Wireframe Homepage](https://github.com/emilydittmer/palette-picker-fe/blob/master/src/demo/Wireframing.png)

## Learning Goals
- Server-Side Testing
- Further understanding of complete CRUD endpoints
- Connecting BE & FE repositories using CORS
- Multiple environments:
  - Testing
  - Making use of automatic continuous integration with TravisCI
  - Deployment with Heroku

## Contributors
[Emily Dittmer](https://github.com/emilydittmer)

[Ryan Flachman](https://github.com/flachman03)
