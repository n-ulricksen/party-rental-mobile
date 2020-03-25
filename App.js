/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import UserContext from './context/UserContext';
import ErrorContext from './context/ErrorContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useAuthEffect } from './auth';

// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const userState = useState(null);
  const [user, setUser] = userState;
  const errorState = useState({});

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  useAuthEffect(onAuthStateChanged);

  if (initializing) {
    return null;
  }

  return (
    <View style={styles.container}>
      <UserContext.Provider value={userState}>
        <ErrorContext.Provider value={errorState}>
          {user ? (
            <>
              <Dashboard />
            </>
          ) : (
            <Login />
          )}
        </ErrorContext.Provider>
      </UserContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
