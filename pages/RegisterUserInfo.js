import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import ErrorContext from '../context/ErrorContext';

function RegisterUserInfo() {
  const [errors, setErrors] = useContext(ErrorContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // exists in user auth state:
  // - phoneNumber
  // - displayName: set to (firstName + lastName)

  useEffect(() => {
    return setErrors({});
  }, [setErrors]);

  const onSubmit = () => {
    RegisterUserInfo(firstName, lastName, phoneNumber);
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
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
        />
        {/* test phone number entry (number keypad?) */}
        {errors && errors.auth && <Text>{errors.auth}</Text>}
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
