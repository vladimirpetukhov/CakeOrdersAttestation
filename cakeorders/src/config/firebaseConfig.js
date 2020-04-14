import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBtD73VnlAgxE7JbnDSlmqYWLjkea-J5C4",
    authDomain: "cakestoreorder.firebaseapp.com",
    databaseURL: "https://cakestoreorder.firebaseio.com",
    projectId: "cakestoreorder",
    storageBucket: "cakestoreorder.appspot.com",
    messagingSenderId: "486183241643",
    appId: "1:486183241643:web:226f74c626fefc512334ee",
    measurementId: "G-ZRV1J9KLEH"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;