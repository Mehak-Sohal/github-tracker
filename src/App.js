import React from 'react';
import { BrowserRouter as Router, Switch, Route } 
from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/layout/Navbar'
import Alert from './components/layout/Alert'
import User from './components/users/User';
import './App.css';
import NotExist from './components/pages/NotExist';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <Alert />
          <div className='container'>
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' component={User} />
            <Route component={NotExist} />
          </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
