// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database'
// import 'firebase/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyBtcOLFjzpchkzq6Pgy3MBlvWCvBJ_7XtU",
//     authDomain: "olx-clone-2-34a8d.firebaseapp.com",
//     projectId: "olx-clone-2-34a8d",
//     storageBucket: "olx-clone-2-34a8d.appspot.com",
//     messagingSenderId: "213273254715",
//     appId: "1:213273254715:web:6d75ffa97fdaea282c351e"
//   };
  

// export default firebase.initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBWb472lCWz7UVJIuiqVjc779YIyl4zlMg",
    authDomain: "react-olx-clone-b004a.firebaseapp.com",
    projectId: "react-olx-clone-b004a",
    storageBucket: "react-olx-clone-b004a.appspot.com",
    messagingSenderId: "113164382827",
    appId: "1:113164382827:web:271b17f79b7d757d0c372e"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// export default firebaseApp;
export default app;
export const storage = getStorage(app);