import firebase from "firebase/app";
import "firebase/database";


if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyA3xBRi2__A2-AmQdbNbCq-SllL-rRMM88",
    authDomain: "chatroom-5b158.firebaseapp.com",
    databaseURL: "https://chatroom-5b158.firebaseio.com",
    projectId: "chatroom-5b158",
    storageBucket: "chatroom-5b158.appspot.com",
    messagingSenderId: "493359265320",
    appId: "1:493359265320:web:77e645f26aefbbf2b1671d"
  });
}

export default firebase.database().ref();