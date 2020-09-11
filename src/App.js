import React from 'react';
import { Home, Login, Register, Feed, About } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/about" component={About} />
      {/* do we need each component as a SINGLE default export in its own file? */}
    </Router>
  );
}

export default App;
