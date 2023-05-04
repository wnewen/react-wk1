import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";
import places from "../json/images.json";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DPMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

//Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

//REFERENCE COLLECTION
const placesCollection = collection(db, "places");

export const feedPlaces = async () => {
    console.log("feeding places ...");
    //DELETE ALL EXISTING DOCS
    const querySnapshot = await getDocs(placesCollection);
    querySnapshot.forEach(async (place) => {
        await deleteDoc(doc(db, "places", place.id));
    });
    //ADD NEW DOCS
    places.forEach(async (place) => {
        const docRef = await doc(placesCollection);
        await setDoc(docRef, {...place, id: docRef.id});
    });
};

export const getPlaceByTitle = async (title) => {
    const docRef = await doc(db, "places", title);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
};

export const getPlacesByCategory = async (category) => {
    // Create a query against the collection.
    const q = await query(placesCollection, where("category", "==", category.toUpperCase()));
    const querySnapshot = await getDocs(q);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (place) => {
       await result.push(place.data());
    });
    return result;
 };
 
 export const getPlaces = async () => {
    const querySnapshot = await getDocs(placesCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (place) => {
       await result.push(place.data());
    });
    return result;
 };