import * as firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDv-p2E2n40OZPU-S3LgPxbxUMoJ4UOCPE",
    authDomain: "signazar-726b0.firebaseapp.com",
    projectId: "signazar-726b0",
    storageBucket: "signazar-726b0.appspot.com",
    messagingSenderId: "597622099670",
    appId: "1:597622099670:web:df55c9361308cc53270377"
  };

  let app;

  if(firebase.apps.length ===0){
    app = firebase.initializeApp(firebaseConfig);
  }
  else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth}