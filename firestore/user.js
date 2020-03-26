import firestore from '@react-native-firebase/firestore';

import { validateUserProfile } from '../validation/user';

export async function editUserProfile(uid, profile) {
  let errorMessage = validateUserProfile(profile);
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  const { firstName, lastName, phoneNumber } = profile;
  const userProfile = { firstName, lastName, phoneNumber };

  return firestore()
    .collection('users')
    .doc(uid)
    .set(userProfile);
}

export async function getUserProfile(uid) {
  console.log(uid);
  const userRef = firestore()
    .collection('users')
    .doc(uid);

  return userRef.get();
}
