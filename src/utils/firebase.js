import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const config = {
	apiKey: process.env.REACT_APP_FB_APIKEY,
	authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
	databaseURL: process.env.REACT_APP_FB_DBURL,
	projectId: process.env.REACT_APP_FB_PID,
	storageBucket: process.env.REACT_APP_FB_SB,
	messagingSenderId: process.env.REACT_APP_FB_MSGID,
	appId: process.env.REACT_APP_FB_APPID,
	measurementId: process.env.REACT_APP_FB_MID,
};
firebase.initializeApp(config);
// export const analytics = () => firebase.analytics();
const GoogleSigninProvider = new firebase.auth.GoogleAuthProvider();
export const GoogleSignin = () => firebase.auth().signInWithPopup(GoogleSigninProvider);
export const SignOut = () => firebase.auth().signOut();

export const fs = firebase.firestore();
export const fsBatch = fs.batch();
export const formCollection = fs.collection("forms");
