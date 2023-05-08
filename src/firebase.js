import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDDOIHXTDA3Mokpl32zqGIsXdPVS3A-1gw",
    authDomain: "unichat-3ee71.firebaseapp.com",
    projectId: "unichat-3ee71",
    storageBucket: "unichat-3ee71.appspot.com",
    messagingSenderId: "575256068020",
    appId: "1:575256068020:web:a0518a0ee7bcff33d6bce1",
  })
  .auth();
