import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };



// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyC8t-1swoTiEWCfXV7M4N-JVgKjTK1ajiQ
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=aimock-35675.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=aimock-35675
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=aimock-35675.firebasestorage.app
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=764344970645
// NEXT_PUBLIC_FIREBASE_APP_ID=1:764344970645:web:961895c701dad65db3da9c