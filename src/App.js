import React, { Component } from 'react';
import { Home, Login, Register, Feed, About } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

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
              {/* TODO: see if mobile profile picture width is okay */}
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
          < Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/about" component={About} />
          {/* do we need each component as a SINGLE default export in its own file? */}
        </Router>
      </div >
    )
  }
}

export default App;
