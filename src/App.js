import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Details from './Components/Details';
import Homeworld from './Components/Homeworld';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/details/:id' component={Details} />
            <Route path='/homeworld/:name'component={Homeworld}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
