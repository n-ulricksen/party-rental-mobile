import firestore from '@react-native-firebase/firestore';

import { validateUserProfile } from '../validation/user';

export async function editUserProfile(uid, profile) {
  let errorMessage = validateUserProfile(profile);
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  return firestore()
    .collection('users')
    .doc(uid)
    .set(profile);
}

export async function getUserProfile(uid) {
  console.log(uid);
  const userRef = firestore()
    .collection('users')
    .doc(uid);

  return userRef.get();
}
