import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import UserContext from '../context/UserContext';
import { signOut } from '../auth';
import { addTestProducts } from '../firestore/product';

export default function Dashboard({ navigation }) {
  const [user] = useContext(UserContext);

  const printUserProfile = () => {
    const { uid } = user;
    console.log(uid, user);
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.welcome}>Welcome, {user.email}</Text>
          <Button title="Print user profile" onPress={printUserProfile} />
          <View style={{ paddingVertical: 5 }} />
          <Button
            title="Edit profile"
            onPress={() => navigation.navigate('Update Info')}
          />
          <View style={{ paddingVertical: 5 }} />
          <Button
            title="Add Product"
            onPress={() => navigation.navigate('Add Product')}
          />
          <View style={{ paddingVertical: 5 }} />
          <Button
            title="View Products"
            onPress={() => navigation.navigate('View Products')}
          />
          <View style={{ paddingVertical: 5 }} />
          <Button title="Add Test Products" onPress={addTestProducts} />
          <View style={{ paddingVertical: 5 }} />
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
