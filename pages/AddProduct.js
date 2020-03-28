import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

import ErrorContext from '../context/ErrorContext';
import UserContext from '../context/UserContext';
import { addProduct } from '../firestore/product';
import { pickImageFromDevice } from '../util/pickImage';
import { uploadImage } from '../storage/image';

function AddProduct({ navigation }) {
  const [errors, setErrors] = useContext(ErrorContext);
  const [user] = useContext(UserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({});
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    return setErrors({});
  }, [setErrors]);

  const onSubmit = () => {
    let product = {
      name,
      description,
      imageUrl,
      uploadedBy: user.uid,
    };
    addProduct(product)
      .then(() => navigation.navigate('Home'))
      .catch(err => setErrors({ input: err.message }));
  };

  const onSelectImage = async () => {
    try {
      const imgSource = await pickImageFromDevice();
      setImage(imgSource);

      const url = await uploadImage(imgSource);
      setImageUrl(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formInputs}>
        <Text style={styles.header}>New Rental Item</Text>
        <Text style={styles.inputLabel}>Name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setName(text)}
          value={name}
        />
        <Text style={styles.inputLabel}>Description:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        {image.uri ? (
          <Image source={image} style={styles.image} />
        ) : (
          <Button onPress={onSelectImage} title="Select Image" />
        )}
        {errors && errors.input && <Text>{errors.input}</Text>}
      </View>
      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
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
  image: {
    minWidth: 200,
    height: 200,
  },
});

export default AddProduct;
