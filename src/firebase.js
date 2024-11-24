import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANivvtDJWlN1ATpyeY3bAtvyK_W7vF5Hk",
    authDomain: "feet-3ad91.firebaseapp.com",
    projectId: "feet-3ad91",
    storageBucket: "feet-3ad91.firebasestorage.app",
    messagingSenderId: "20563934805",
    appId: "1:20563934805:web:513aeeeecacd6be2e8dedc",
    measurementId: "G-JJ7W4BNFHX"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

