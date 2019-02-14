import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { InfoApp } from './components/InfoApp';
import { About } from './components/About';
import { Default } from './components/Default';

import 'normalize.css/normalize.css'
import './styles/styles.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
        <Route path="/" component={InfoApp}  exact={true}></Route>
        <Route path="/about" component={About}></Route>
        <Route component={Default} />
        </Switch>
      </div>
    );
  }
}

export default App;