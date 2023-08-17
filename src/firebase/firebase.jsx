// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaKZWkj6kmBcLV-q9G4JO21uG-f4sHH5Y",
  authDomain: "e-comm-9bd59.firebaseapp.com",
  projectId: "e-comm-9bd59",
  storageBucket: "e-comm-9bd59.appspot.com",
  messagingSenderId: "898684982698",
  appId: "1:898684982698:web:0a52a7242b83af7d7107d3",
  measurementId: "G-0Q55XEG52R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  if (userAuth) {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);
    // Now you can use this reference to interact with the document
  }
};
