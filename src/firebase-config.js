import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCKfw3eOkKBf5p4OV_HdSs0euOOasFZvJY",
    authDomain: "menusn.firebaseapp.com",
    projectId: "menusn",
    storageBucket: "menusn.appspot.com",
    messagingSenderId: "1086942795192",
    appId: "1:1086942795192:web:39a9b2e95a2e322a56eb4d"
  };


  firebase.initializeApp(firebaseConfig);

//  var db = app.collection("elements").doc();

 // export const db = getFirestore(app)
 // const db = firebase.firestore();
 firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();
  export default db;