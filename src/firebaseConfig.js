// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAUlj6DYX9Dzv5Sy-txNRY62r6i_7m1NJA",
  authDomain: "fund-flow-jan.firebaseapp.com",
  projectId: "fund-flow-jan",
  storageBucket: "fund-flow-jan.appspot.com",
  messagingSenderId: "966597384924",
  appId: "1:966597384924:web:f34918c7b0bc602bf43219",
  measurementId: "G-JGYKQW5YNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);