// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTin5scj8oV4VDNKBw314BBZ06iz2Lfy4",
  authDomain: "kubeburner-10.firebaseapp.com",
  databaseURL: "https://kubeburner-10-default-rtdb.firebaseio.com",
  projectId: "kubeburner-10",
  storageBucket: "kubeburner-10.firebasestorage.app",
  messagingSenderId: "1038208936308",
  appId: "1:1038208936308:web:1a44ac704fe0d5fe636421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Realtime Database service
// You'll use this `db` object in your components to interact with the database
const db = getDatabase(app);

// You can export other services too if needed, e.g.,
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// Export the initialized database instance so you can import it elsewhere
export { db };