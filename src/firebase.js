import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "comfy-e-store.firebaseapp.com",
  projectId: "comfy-e-store",
  storageBucket: "comfy-e-store.appspot.com",
  messagingSenderId: "1009369301100",
  appId: process.env.REACT_APP_APP_ID
};

export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();

 