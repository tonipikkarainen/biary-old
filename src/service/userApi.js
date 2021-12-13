import { db } from '../firebase-config';
import { collection, doc, setDoc } from 'firebase/firestore';

export const createUser = async (userId, userName) => {
    const usersRef = doc(db, 'users', userId);
    const data = {
        name: userName,
    };
    // Mitä tekee setDoc, jos userId on jo olemassa?
    await setDoc(usersRef, data);
    console.log('created user ' + userId + userName);
};
