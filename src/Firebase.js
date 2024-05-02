// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyD6ERmZaZ6JTVVxSSJaptStpzSjiNtHliA",
  authDomain: "facebook-clone-a2a61.firebaseapp.com",
  projectId: "facebook-clone-a2a61",
  storageBucket: "facebook-clone-a2a61.appspot.com",
  messagingSenderId: "75090073360",
  appId: "1:75090073360:web:326d3cf5476aa4bccbb795",
  measurementId: "G-MT6KF5FBLF"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore()
export const auth = getAuth()
export default app

// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyD6ERmZaZ6JTVVxSSJaptStpzSjiNtHliA",
//   authDomain: "facebook-clone-a2a61.firebaseapp.com",
//   projectId: "facebook-clone-a2a61",
//   storageBucket: "facebook-clone-a2a61.appspot.com",
//   messagingSenderId: "75090073360",
//   appId: "1:75090073360:web:326d3cf5476aa4bccbb795",
//   measurementId: "G-MT6KF5FBLF"
// })


//const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
// const storage = firebase.storage();

// export { auth,storage}