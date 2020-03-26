import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import ErrorContext from '../context/ErrorContext';
import UserContext from '../context/UserContext';
import { createUserProfile } from '../firestore/user';

function RegisterUserInfo() {
  const [errors, setErrors] = useContext(ErrorContext);
  const [user] = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    return setErrors({});
  }, [setErrors]);

  const onSubmit = () => {
    let userProfile = {
      uid: user.uid,
      firstName,
      lastName,
      phoneNumber,
    };
    createUserProfile(userProfile)
      .then(() => console.log('user profile created'))
      .catch(err => setErrors({ input: err.message }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.formInputs}>
        <Text style={styles.header}>Contact Information</Text>
        <Text style={styles.inputLabel}>First Name:</Text>
        <TextInput
          style={styles.textInput}
          textContentType="givenName"
          onChangeText={text => setFirstName(text)}
          value={firstName}
        />
        <Text style={styles.inputLabel}>Last Name:</Text>
        <TextInput
          style={styles.textInput}
          textContentType="familyName"
          onChangeText={text => setLastName(text)}
          value={lastName}
        />
        <Text style={styles.inputLabel}>Phone Number:</Text>
        <TextInput
          style={styles.textInput}
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
        />
        {errors && errors.input && <Text>{errors.input}</Text>}
      </View>
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputLabel: {
    paddingVertical: 3,
  },
  textInput: {
    height: 40,
    borderWidth: 0.5,
    width: '100%',
    marginBottom: 8,
  },
  formInputs: {
    marginBottom: 10,
  },
});

export default RegisterUserInfo;
