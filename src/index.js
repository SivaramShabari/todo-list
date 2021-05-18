import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAa03-kz5CSzACE_Zm8ZfxxejHRYiVpa3E",
  authDomain: "presidio-todo-app.firebaseapp.com",
  projectId: "presidio-todo-app",
  storageBucket: "presidio-todo-app.appspot.com",
  messagingSenderId: "801594998461",
  appId: "1:801594998461:web:502af09f3f0e21226f81d4",
  measurementId: "G-J24BXM250M"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);


