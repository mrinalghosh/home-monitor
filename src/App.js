import React from 'react';
import Home from "./Home";
import Login from "./Login";
import Feed from "./Feed";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/about" component={About} /> 
      {/* do we need each component as a SINGLE default export? */}
    </Router>
  );
}

export default App;
