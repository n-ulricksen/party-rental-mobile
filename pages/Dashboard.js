import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import UserContext from '../context/UserContext';
import { signOut } from '../auth';

export default function Dashboard() {
  const [user] = useContext(UserContext);

  const addData = () => {
    // firestore()
    //   .collection('users')
    //   .add({
    //     first: 'Ada',
    //     last: 'Lovelace',
    //     born: 1815,
    //   })
    //   .then(function(docRef) {
    //     console.log('Document written with ID: ', docRef.id);
    //     console.log(docRef);
    //   })
    //   .catch(function(error) {
    //     console.error('Error adding document: ', error);
    //   });
    const { uid } = user;
    console.log(uid, user);
  };

  return (
    <View>
      <Text style={styles.welcome}>Welcome, {user.email}</Text>
      <Button title="Print user profile" onPress={addData} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
