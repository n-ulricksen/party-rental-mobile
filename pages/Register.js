import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import ErrorContext from '../context/ErrorContext';
import { registerUser } from '../auth';

function Register() {
  const [errors, setErrors] = useContext(ErrorContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  useEffect(() => {
    return setErrors({});
  }, [setErrors]);

  const onRegisterClick = () => {
    let newUser = { email, password, password2 };
    registerUser(newUser, setErrors);
  };

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
        <Text style={styles.inputLabel}>Repeat Password:</Text>
        <TextInput
          style={styles.textInput}
          type="password"
          secureTextEntry
          onChangeText={text => setPassword2(text)}
          value={password2}
        />
        {errors && errors.auth && <Text>{errors.auth}</Text>}
      </View>
      <Button title="Register" onPress={onRegisterClick} />
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

export default Register;
