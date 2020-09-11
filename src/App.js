import React from 'react';
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/feed" component={Feed} />
    </Router>
  );
}

export default App;
