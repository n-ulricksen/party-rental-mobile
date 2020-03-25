// Reference: https://firebase.google.com/docs/auth/web/password-auth

import React, { useEffect } from 'react';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export function useAuthEffect(onAuthStateChanged) {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });
}

export function registerUser(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode, errorMessage);
      // ...
    });
}

export function signInWithEmailPassword(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode, errorMessage);
      // ...
    });
}

export async function signOut() {
  await firebase.auth().signOut();
  console.log('logged out');
}
