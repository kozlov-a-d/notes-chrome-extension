import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = firebase.initializeApp({ projectId: 'beontop-chrome-extention', }).firestore();
