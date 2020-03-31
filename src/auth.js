// Reference: https://firebase.google.com/docs/auth/web/password-auth

import { useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { validateRegistration, validateLogin } from './validation/auth';

export function useAuthEffect(onAuthStateChanged) {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });
}

export function registerUser(user, setErrors) {
  let errorMessage = validateRegistration(user);
  if (errorMessage) {
    setErrors({ auth: errorMessage });
    return;
  }

  const { email, password } = user;

  auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      const errorCode = error.code;

      switch (errorCode) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use.';
          break;

        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;

        case 'auth/weak-password':
          errorMessage = 'Password must be at least 6 characters.';
          break;

        default:
          errorMessage = 'Something went wrong...';
      }

      setErrors({ auth: errorMessage });
    });
}

export async function signInWithEmailPassword(user, setErrors) {
  let errorMessage = validateLogin(user);
  if (errorMessage) {
    setErrors({ auth: errorMessage });
    return;
  }

  const { email, password } = user;

  return auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      const errorCode = error.code;

      switch (errorCode) {
        case 'auth/user-not-found':
          errorMessage = 'This email has not yet been registered.';
          break;

        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          break;

        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Account has been deactivated.';
          break;

        default:
          errorMessage = 'Something went wrong...';
      }

      setErrors({ auth: errorMessage });
    });
}

export async function signOut() {
  return auth().signOut();
}
