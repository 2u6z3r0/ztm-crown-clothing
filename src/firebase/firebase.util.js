import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCnCoXWVuscwaT02xtj9as07fOIj78G1l4',
  authDomain: 'react-ztm-crown-db.firebaseapp.com',
  projectId: 'react-ztm-crown-db',
  storageBucket: 'react-ztm-crown-db.appspot.com',
  messagingSenderId: '738779344986',
  appId: '1:738779344986:web:a8491bb813f334ce652863',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error in user creation , ', error);
    }
  }
  return userRef;
};

export default firebase;
