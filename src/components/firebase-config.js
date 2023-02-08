// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAagOrkHUbkASxFxZGdBGBQeTCSjzyactA",
  authDomain: "airbnb-clone-6e4ce.firebaseapp.com",
  projectId: "airbnb-clone-6e4ce",
  storageBucket: "airbnb-clone-6e4ce.appspot.com",
  messagingSenderId: "848118011343",
  appId: "1:848118011343:web:324970a18086a81edeeeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
