import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
    apiKey: "AIzaSyDMYhI_pthfVkJjcbFks9yi_-pkB_ywQUw",
    authDomain: "home-monitor-mg-cg.firebaseapp.com"
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavigationBar = (props) => {
    const classes = useStyles();

    const [signedIn, setSignedIn] = React.useState(false);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    };

    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setSignedIn(!!user)
            console.log("user", user)
        });
    }, [signedIn])

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/" >Home Monitor</Button>
                    <Button color="inherit" component={Link} to="/login" >Login</Button>
                    <Button color="inherit" component={Link} to="/weather" >Weather</Button>
                    <Button color="inherit" component={Link} to="/feed" >Feed</Button>
                    <Button color="inherit" component={Link} to="/add" >Add Device</Button>
                    {signedIn ? (
                        <span>
                            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
                        </span>)
                        : (<StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()} />)
                    }
                    {signedIn ? (
                        <Button color="inherit" disabled >Signed in as {firebase.auth().currentUser.displayName}</Button>
                    )
                        : (<div />)
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavigationBar;
