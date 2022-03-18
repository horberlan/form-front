import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";
//import 'firebase/compat/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const fire = firebase.initializeApp({
    apiKey: "AIzaSyCWWTeqOZmJ8H-dRUiLQoU0pArdNUeeS6c",
    authDomain: "teste-bem-pago.firebaseapp.com",
    projectId: "teste-bem-pago",
    storageBucket: "teste-bem-pago.appspot.com",
    messagingSenderId: "751428255632",
    appId: "1:751428255632:web:80001b1be8d2a75feffd15"
});

// Initialize Firebase

// const auth = getAuth(fire);

export default fire;
export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth()