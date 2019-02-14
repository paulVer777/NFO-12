import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';
// import 'normalize.css/normalize.css'
// import './styles/styles.scss'

ReactDOM.render( 
  <Router>
    <App/>
  </Router>
  , document.querySelector('#app')
)

// app js is in charge of only bootstrap things that live else where

// launcher