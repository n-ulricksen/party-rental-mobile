import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getImageData } from '../storage/image';

export default function ProductListItem({ product }) {
  const [imageData, setImageData] = useState('');

  useEffect(() => {
    // getImageData(product.imageUrl).then(data => {
    //   console.log(data);
    //   setImageData(data);
    // });
  }, [product]);

  console.log(product);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: product && product.imageUrl,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#e3e3e3',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    height: 120,
    width: 120,
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 5,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
  },
});
