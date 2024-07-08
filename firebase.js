import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0HUriNlVvxhZm7hVje8njkhY4EBpvyGQ",
    authDomain: "react-auth-40ab6.firebaseapp.com",
    projectId: "react-auth-40ab6",
    storageBucket: "react-auth-40ab6.appspot.com",
    messagingSenderId: "659957086870",
    appId: "1:659957086870:web:705a298c57c3ba1c38a0b7",
    measurementId: "G-CE72XCL2Z3"
};

// Initialize Firebase

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
