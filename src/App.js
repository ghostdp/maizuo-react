import React, { Component , Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Home from './components/Home/Home.js';
import Film from './components/Film/Film.js';
import Detail from './components/Detail/Detail.js';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>	
	    <Fragment>
	        <Header />
	        <Nav />
	        <Switch>
		        <Route path="/home" component={Home} />
		        <Route path="/film" component={Film} />
		        <Route path="/detail/:cid" component={Detail} />
		        <Redirect from="/*" to="/home" />
	        </Switch>
	    </Fragment>
      </Router>
    );
  }
}

export default App;
