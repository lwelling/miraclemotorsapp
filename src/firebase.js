import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvzmXRls4a7zDUYzVcSDrpfcdSUvsLpNQ",
  authDomain: "miracle-motors.firebaseapp.com",
  databaseURL: "https://miracle-motors.firebaseio.com",
  projectId: "miracle-motors",
  storageBucket: "miracle-motors.appspot.com",
  messagingSenderId: "628999281147",
  appId: "1:628999281147:web:5acae5b920cd9f5c10935e",
  measurementId: "G-JJ1NWHFN25"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
