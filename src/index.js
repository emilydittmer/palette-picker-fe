import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import { setGlobal } from 'reactn'

setGlobal({
  projects: [],
  palettes: [],
  currentPalette: []
});

ReactDOM.render(<App />, document.getElementById('root'));

