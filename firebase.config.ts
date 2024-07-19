import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC7JlcER8VSDCi4-SbKBh0Jd4AMSSe4Xqw",
  authDomain: "mylenotes.firebaseapp.com",
  projectId: "mylenotes",
  storageBucket: "mylenotes.appspot.com",
  messagingSenderId: "130992488087",
  appId: "1:130992488087:web:378f833a829dcfb445f3d2"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getStorage(app);

export { app, auth, analytics }
