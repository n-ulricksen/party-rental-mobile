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

export async function getAllProducts() {
  return firestore()
    .collection('products')
    .get();
}

export function addTestProducts() {
  const products = [
    {
      imageUrl: 'http://dummyimage.com/139x108.png/ff4444/ffffff',
      name: 'The Amazing Screw-On Head',
      description: 'Compatible responsive help-desk',
    },
    {
      imageUrl: 'http://dummyimage.com/201x143.bmp/dddddd/000000',
      name: 'Strangers on a Train',
      description: 'Devolved disintermediate internet solution',
    },
    {
      imageUrl: 'http://dummyimage.com/172x184.png/5fa2dd/ffffff',
      name: 'Everybody Dies But Me',
      description: 'Stand-alone leading edge access',
    },
    {
      imageUrl: 'http://dummyimage.com/129x101.bmp/5fa2dd/ffffff',
      name: 'Open Road, The',
      description: 'Face to face interactive customer loyalty',
    },
    {
      imageUrl: 'http://dummyimage.com/124x180.jpg/ff4444/ffffff',
      name: 'Caroline?',
      description: 'Reverse-engineered neutral open architecture',
    },
    {
      imageUrl: 'http://dummyimage.com/222x118.bmp/dddddd/000000',
      name: 'Jesus Camp',
      description: 'Diverse clear-thinking time-frame',
    },
    {
      imageUrl: 'http://dummyimage.com/184x166.jpg/cc0000/ffffff',
      name: 'Return from Witch Mountain',
      description: 'Integrated multi-tasking utilisation',
    },
    {
      imageUrl: 'http://dummyimage.com/146x122.jpg/ff4444/ffffff',
      name: 'Les invincibles',
      description: 'User-friendly incremental portal',
    },
  ];

  const productsRef = firestore().collection('products');

  products.forEach(product => {
    const productPromise = productsRef.doc().set(product);
  });
}
