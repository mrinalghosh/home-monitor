import React, { Component } from 'react';
import { Home, Login, Register, Feed, About, AddDevice, FourZeroFour, Graph, Weather } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// import { SwipeableDrawer } from '@material-ui/core';

firebase.initializeApp({
  apiKey: "AIzaSyDMYhI_pthfVkJjcbFks9yi_-pkB_ywQUw",
  authDomain: "home-monitor-mg-cg.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App" >
        {
          this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile" src={firebase.auth().currentUser.photoURL} width="5%" />
            </span>)
            : (
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            )
        }

        < Router >
          {/* TODO: 404 popup, email login authentication, graphing in Feed */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/about" component={About} />
            <Route exact path="/add" component={AddDevice} />
            <Route exact path="/graph" component={Graph} />
            <Route exact path="/weather" component={Weather} />
            <Route component={FourZeroFour} />
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;
