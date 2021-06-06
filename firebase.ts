import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Constants from 'expo-constants';

const extras =Constants.manifest.extra;
const firebaseConfig = {
    apiKey: extras?.apiKey,
    authDomain: extras?.authDomain,
    projectId: extras?.projectId,
    storageBucket: extras?.storageBucket,
    messagingSenderId: extras?.messagingSenderId,
    appId: extras?.appId,
    measurementId: extras?.measurementId
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };