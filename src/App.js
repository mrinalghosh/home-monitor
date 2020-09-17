import React, { Component } from 'react';
import {
  Home,
  Login,
  Register,
  Feed,
  About,
  AddDevice,
  FourZeroFour,
  Weather 
  // NavigationBar
} from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from './base';
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//import firebaseConfig from "base";

class App extends Component {

  constructor(props){
    super(props);
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    this.state = {
      developers: []
    }
  }

  writeUserData = () => {
    firebase.database().ref('/').set(this.state);
    console.log('DATA SAVED');
  }
  
  getUserData = () => {
    let ref = firebase.database().ref('all_notes');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log('DATA RETRIEVED');
  }
  


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
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  render() {
    const { developers } = this.state;
  return(
    <div className="container">
      <div className="row">
        <div className='col-xl-12'>
          <h1>Firebase Development Team</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-12'>
        { 
          developers
          .map(developer => 
            <div key={developer.uid} className="card float-left" style={{width: '18rem', marginRight: '1rem'}}>
              <div className="card-body">
                <h5 className="card-title">{ developer.name }</h5>
                <p className="card-text">{ developer.role }</p>
                <button onClick={ () => this.removeData(developer) } className="btn btn-link">Delete</button>
                <button onClick={ () => this.updateData(developer) } className="btn btn-link">Edit</button>
              </div>
            </div>
            )
        } 
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-12'>
          <h1>Add new team member here</h1>
          <form onSubmit={ this.handleSubmit }>
            <div className="form-row">
              <input type='hidden' ref='uid' />
              <div className="form-group col-md-6">
                <label>Name</label>
                <input type="text" ref='name' className="form-control" placeholder="Name" />
              </div>
              <div className="form-group col-md-6">
                <label>Role</label>
                <input type="text" ref='role' className="form-control" placeholder="Role" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
      < Router >
          {/* TODO: 404 popup, email login authentication, graphing in Feed */}
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

    </div>
  )
}

handleSubmit = (event) => {
  event.preventDefault();
  let name = this.refs.name.value;
  let role = this.refs.role.value;
  let uid = this.refs.uid.value;

  if (uid && name && role){
    const { developers } = this.state;
    const devIndex = developers.findIndex(data => {
      return data.uid === uid 
    });
    developers[devIndex].name = name;
    developers[devIndex].role = role;
    this.setState({ developers });
  }
  else if (name && role ) {
    const uid = new Date().getTime().toString();
    const { developers } = this.state;
    developers.push({ uid, name, role })
    this.setState({ developers });
  }

  this.refs.name.value = '';
  this.refs.role.value = '';
  this.refs.uid.value = '';
}

removeData = (developer) => {
  const { developers } = this.state;
  const newState = developers.filter(data => {
    return data.uid !== developer.uid;
  });
  this.setState({ developers: newState });
}

updateData = (developer) => {
  this.refs.uid.value = developer.uid;
  this.refs.name.value = developer.name;
  this.refs.role.value = developer.role;
}
}

export default App;
    // return (
    //   <div className="App" >
    //     {
    //       this.state.isSignedIn ? (
    //         <span>
    //           <div>Signed In!</div>
    //           <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
    //           <h2>Signed in as {firebase.auth().currentUser.displayName}</h2>
    //           <img alt="profile" src={firebase.auth().currentUser.photoURL} width="5%" />
    //         </span>)
    //         : (
    //           <StyledFirebaseAuth
    //             uiConfig={this.uiConfig}
    //             firebaseAuth={firebase.auth()}
    //           />
    //         )
    //     }

    //     <div>
    //       <NavigationBar></NavigationBar>
    //     </div>

        // < Router >
        //   {/* TODO: 404 popup, email login authentication, graphing in Feed */}
        //   <Switch>
        //     <Route exact path="/" component={Home} />
        //     <Route exact path="/login" component={Login} />
        //     <Route exact path="/register" component={Register} />
        //     <Route exact path="/feed" component={Feed} />
        //     <Route exact path="/about" component={About} />
        //     <Route exact path="/add" component={AddDevice} />
        //     <Route exact path="/weather" component={Weather} />
        //     <Route component={FourZeroFour} />
        //   </Switch>
        // </Router>
    //   </div >
    // )