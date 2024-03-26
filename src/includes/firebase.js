import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBqtWLev0DxNVJHFqITw_irZ3Q4tlVSCVg",
  authDomain: "music-5cf43.firebaseapp.com",
  projectId: "music-5cf43",
  storageBucket: "music-5cf43.appspot.com",
  messagingSenderId: "454332456250",
  appId: "1:454332456250:web:c71d064b89dff92c504403",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
