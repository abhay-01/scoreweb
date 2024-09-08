import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeMCGdeKeOjLUApN72vl8ktAxMSNdoSOg",
    authDomain: "socialscore-49bfb.firebaseapp.com",
    projectId: "socialscore-49bfb",
    storageBucket: "socialscore-49bfb.appspot.com",
    messagingSenderId: "815740085565",
    appId: "1:815740085565:web:2153977e9c257b4fd95154",
    measurementId: "G-EF6LWXD94Z"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
