import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyACtEczvP-PYA6HUt0UxyYEe-xZ2QdxcGE",
  authDomain: "rfd-firegram.firebaseapp.com",
  databaseURL: "https://rfd-firegram-default-rtdb.firebaseio.com",
  projectId: "rfd-firegram",
  storageBucket: "rfd-firegram.appspot.com",
  messagingSenderId: "654812507496",
  appId: "1:654812507496:web:c965bee5b33df0efca3add",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStore = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStore, timestamp };
