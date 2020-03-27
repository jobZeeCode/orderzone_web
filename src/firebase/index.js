import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBivjFqEE3QU4ONJXsVvCu1ID967LE1htc",
    authDomain: "orderzone-94ecb.firebaseapp.com",
    databaseURL: "https://orderzone-94ecb.firebaseio.com",
    projectId: "orderzone-94ecb",
    storageBucket: "orderzone-94ecb.appspot.com",
    messagingSenderId: "253784795048",
    appId: "1:253784795048:web:457cce72f604924c339f9d",
    measurementId: "G-TD9QSNH7YP"
  };
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}