import firestore from '@react-native-firebase/firestore';

// import { validateProduct } from '../validation/product';

export async function addProduct(product) {
  // let errorMessage = validateProduct(product);
  // if (errorMessage) {
  //   throw new Error(errorMessage);
  // }

  return firestore()
    .collection('products')
    .doc()
    .set(product);
}

export async function getProductById(id) {
  console.log(id);
  const userRef = firestore()
    .collection('products')
    .doc(id);

  return userRef.get();
}
