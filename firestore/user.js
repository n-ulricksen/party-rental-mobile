import firestore from '@react-native-firebase/firestore';

import { validateUserProfile } from '../validation/user';

export async function createUserProfile(user) {
  let errorMessage = validateUserProfile(user);
  if (errorMessage) {
    throw new Error(errorMessage);
  }

  const { uid, firstName, lastName, phoneNumber } = user;
  const userProfile = { firstName, lastName, phoneNumber };

  return firestore()
    .collection('users')
    .doc(uid)
    .set(userProfile);
}
