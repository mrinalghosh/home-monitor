import React, { Component } from 'react';
import {
  Home,
  Login,
  Register,
  Feed,
  About,
  AddDevice,
  FourZeroFour,
  Weather,
  NavigationBar
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App" >
        < Router >
          <NavigationBar></NavigationBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/about" component={About} />
            <Route exact path="/add" component={AddDevice} />
            <Route exact path="/weather" component={Weather} />
            <Route component={FourZeroFour} />
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;
