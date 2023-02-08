import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCEQc6DrBCMx9FhBkzMev5okxy92rmW7y8',
  authDomain: 'clone-cb0ab.firebaseapp.com',
  databaseURL:
    'https://clone-cb0ab-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'clone-cb0ab',
  storageBucket: 'clone-cb0ab.appspot.com',
  messagingSenderId: '789557095817',
  appId: '1:789557095817:web:7c158f90b3f9b8d2df8558',
  measurementId: 'G-QS8BK44SHX',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
