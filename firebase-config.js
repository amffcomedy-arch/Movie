import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAICGS4JHLmDtUKI0CnKD8czKNJjjowOuw",
  authDomain: "mymovies1.firebaseapp.com",
  projectId: "mymovies1",
  storageBucket: "mymovies1.firebasestorage.app",
  messagingSenderId: "494528270850",
  appId: "1:494528270850:web:c8fd22fdcf207db8840d1b",
  measurementId: "G-CQ4BEXX3K4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);