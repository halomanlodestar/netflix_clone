/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDhh3xD-gD_qJ3yxDYSIer_kknOtMp8nwk",
	authDomain: "netflix-clone-5ecb7.firebaseapp.com",
	projectId: "netflix-clone-5ecb7",
	storageBucket: "netflix-clone-5ecb7.appspot.com",
	messagingSenderId: "641555484386",
	appId: "1:641555484386:web:e8e1fa56e3c6e71adb98bb",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
