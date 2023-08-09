import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmWRY1QbENj6kKlcXxvjKwZCLY4eqrGO8",
  authDomain: "chat-app-377a4.firebaseapp.com",
  projectId: "chat-app-377a4",
  storageBucket: "chat-app-377a4.appspot.com",
  messagingSenderId: "937558510805",
  appId: "1:937558510805:web:032b5ec404ef2b474a265c"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

