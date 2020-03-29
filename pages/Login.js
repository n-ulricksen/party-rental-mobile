import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import ErrorContext from '../context/ErrorContext';
import { signInWithEmailPassword } from '../auth';

function Login({ navigation }) {
  const [errors, setErrors] = useContext(ErrorContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return setErrors({});
  }, [setErrors]);

  const onSignInClick = async () => {
    const userCreds = { email, password };
    await signInWithEmailPassword(userCreds, setErrors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formInputs}>
        <Text style={styles.header}>Login</Text>
        <Text style={styles.inputLabel}>Email:</Text>
        <TextInput
          style={styles.textInput}
          textContentType="emailAddress"
          keyboardType="email-address"
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
        {errors && errors.auth && <Text>{errors.auth}</Text>}
      </View>
      <Button title="Sign In" onPress={onSignInClick} />
      <View style={{ paddingVertical: 5 }} />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
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

export default Login;
