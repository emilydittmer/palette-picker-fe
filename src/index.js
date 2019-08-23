import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import { setGlobal } from 'reactn'


setGlobal({
  currentPalette: ['aaaaaa']
})

ReactDOM.render(<App />, document.getElementById('root'));

