import firebase from "firebase/app"
import "firebase/firestore"
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDsQJ-beW5kws6mRYI2t50X_cT5QzHHGKM",
  authDomain: "fb-crud-react-23d63.firebaseapp.com",
 databaseURL: "https://fb-crud-react-23d63.firebaseio.com",
  projectId: "fb-crud-react-23d63",
  storageBucket: "fb-crud-react-23d63.appspot.com",
  messagingSenderId: "633203548229",
  appId: "1:633203548229:web:9c437940db6de8214b832c",
  measurementId: "G-ZM5HGVHR4Z",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
