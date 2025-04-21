// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://finalcpe495-default-rtdb.asia-southeast1.firebasedatabase.app",
//   apiKey: "YOUR_API_KEY",
  projectId: "finalcpe495",
  messagingSenderId: "18438365264",
  appId: "1:18438365264:web:db3ad810ac97845bcbf155"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };
