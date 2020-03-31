import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet } from 'react-native';

import ProductListItem from '../components/ProductListItem';
import { getAllProducts } from '../firestore/product';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(doc => {
        let _products = [];
        doc.forEach(product => {
          const productData = product.data();
          // getImageData(imageUrl).then(blob => console.log(blob));
          _products.push({ id: product.id, ...productData });
        });
        setProducts(_products);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
    alignItems: 'stretch',
  },
});
