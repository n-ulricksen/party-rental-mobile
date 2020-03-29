import storage from '@react-native-firebase/storage';

export async function uploadProductImage(image) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', image.uri, true);
    xhr.send(null);
  });

  var ref = storage()
    .ref()
    .child('images/' + image.name);

  await ref.put(blob);

  blob.close();

  return ref.getDownloadURL();
}
