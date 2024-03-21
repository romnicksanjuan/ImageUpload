// firebase.js
import firebase from "firebase/compat/app"; // Import the compat version
import "firebase/compat/storage"; // Import the compat version

const firebaseConfig = {
    apiKey: "AIzaSyCLTBeG9PrdR8MsOjDJqU2KqblxVE8D5OE",
    authDomain: "imageup-508c1.firebaseapp.com",
    projectId: "imageup-508c1",
    storageBucket: "imageup-508c1.appspot.com",
    messagingSenderId: "1033267263998",
    appId: "1:1033267263998:web:8b9262a748e2acac8328af"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
