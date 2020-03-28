/**
 * Sample React Native App with Firebase
 * https://github.com/invertase/react-native-firebase
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

import { useAuthEffect } from './auth';
import UserContext from './context/UserContext';
import ErrorContext from './context/ErrorContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RegisterUserInfo from './pages/RegisterUserInfo';
import AddProduct from './pages/AddProduct';

// Navigation
const Stack = createStackNavigator();

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
    <UserContext.Provider value={userState}>
      <ErrorContext.Provider value={errorState}>
        <NavigationContainer>
          <Stack.Navigator>
            {user ? (
              <>
                <Stack.Screen name="Home" component={Dashboard} />
                <Stack.Screen name="Update Info" component={RegisterUserInfo} />
                <Stack.Screen name="Add Product" component={AddProduct} />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ErrorContext.Provider>
    </UserContext.Provider>
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
