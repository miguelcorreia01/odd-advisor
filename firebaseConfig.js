// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { env } from "process";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

require('dotenv').config();
const apiKey = process.env.API_KEY


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "oddadvisor-5450c.firebaseapp.com",
  projectId: "oddadvisor-5450c",
  storageBucket: "oddadvisor-5450c.appspot.com",
  messagingSenderId: "980806243490",
  appId: "1:980806243490:web:a7d3c584388829feb9b3fb"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);