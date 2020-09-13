import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBteHdawARqW0tsUcDS-jhI5h6-CgRH0J0",
  authDomain: "firegram-1f642.firebaseapp.com",
  databaseURL: "https://firegram-1f642.firebaseio.com",
  projectId: "firegram-1f642",
  storageBucket: "firegram-1f642.appspot.com",
  messagingSenderId: "192482653175",
  appId: "1:192482653175:web:3bcf8fcaf711cae106f4f2",
  measurementId: "G-TLKX2QCQXW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/* firebase.analytics(); */

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
