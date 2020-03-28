import storage from '@react-native-firebase/storage';

export async function uploadImage(image) {
  return new Promise((resolve, reject) => {
    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storage()
      .ref()
      .child('images/' + image.name)
      .putString(image.uri, 'base64');

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      snapshot => {
        switch (snapshot.state) {
          case storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      error => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;

          default:
            reject(error);
        }
      },
      snapshot => {
        snapshot.ref.getDownloadURL().then(url => resolve(url));
      }
    );
  });
}
