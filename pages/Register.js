import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { registerUser } from '../auth';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formInputs}>
        <Text style={styles.header}>Register</Text>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          style={styles.textInput}
          textContentType="emailAddress"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={styles.inputLabel}>Password:</Text>
        <TextInput
          style={styles.textInput}
          type="password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
        {/* <Text style={styles.inputLabel}>Repeat Password:</Text>
        <TextInput
          style={styles.textInput}
          type="password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        /> */}
      </View>
      <Button title="Register" onPress={() => registerUser(email, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

export default Register;
