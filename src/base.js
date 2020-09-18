import * as firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyDMYhI_pthfVkJjcbFks9yi_-pkB_ywQUw",
    authDomain: "home-monitor-mg-cg.firebaseapp.com",
    databaseURL: "https://home-monitor-mg-cg.firebaseio.com",
    projectId: "home-monitor-mg-cg",
    storageBucket: "home-monitor-mg-cg.appspot.com",
    messagingSenderId: "168529580135",
    appId: "1:168529580135:web:3f20c6ceabdc01dc0a04c2",
    measurementId: "G-3LJP017V9W"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
export default firebaseConfig;