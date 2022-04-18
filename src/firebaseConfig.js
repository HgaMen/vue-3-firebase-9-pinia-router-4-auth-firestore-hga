import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDkmP6uQ-vlD0wagXIGiW0sOia7EY-CRbs',
  authDomain: 'vue-3-2022-f7b4b.firebaseapp.com',
  projectId: 'vue-3-2022-f7b4b',
  storageBucket: 'vue-3-2022-f7b4b.appspot.com',
  messagingSenderId: '546449908387',
  appId: '1:546449908387:web:d8f948f74a35bb8a489516',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { auth, db, storage };
