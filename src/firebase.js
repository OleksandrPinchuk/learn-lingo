import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SUPER_ID = import.meta.env.VITE_MESSAGING_SUPER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SUPER_ID,
    appId: APP_ID,
};

export const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db)