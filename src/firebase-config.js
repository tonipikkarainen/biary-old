import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

export const firebaseConfig = {
    apiKey: 'AIzaSyBjF71Gr6tj29AXytKgCXg5xhffXIQLH98',
    authDomain: 'biary-2d90c.firebaseapp.com',
    projectId: 'biary-2d90c',
    storageBucket: 'biary-2d90c.appspot.com',
    messagingSenderId: '760420116628',
    appId: '1:760420116628:web:b3e160af0fb6f7cd362c81',
    measurementId: 'G-HGX7E221DM',
};

export const firebaseapp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseapp);
