import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDkmP6uQ-vlD0wagXIGiW0sOia7EY-CRbs',
  authDomain: 'vue-3-2022-f7b4b.firebaseapp.com',
  projectId: 'vue-3-2022-f7b4b',
  storageBucket: 'vue-3-2022-f7b4b.appspot.com',
  messagingSenderId: '546449908387',
  appId: '1:546449908387:web:d8f948f74a35bb8a489516',
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
