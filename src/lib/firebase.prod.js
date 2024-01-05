// compat packages are API compatible with namespaced code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { seedDatabase } from "../seed";

//we need to somehow seed the database

// we need a config here

const config = {
	apiKey: "AIzaSyBO0fHeHuChE5BknhXqFd8F6HQzF_VHkSM",
	authDomain: "netflix-4ba35.firebaseapp.com",
	projectId: "netflix-4ba35",
	storageBucket: "netflix-4ba35.appspot.com",
	messagingSenderId: "574430396185",
	appId: "1:574430396185:web:3d7ab2330115a067b74f88",
};

firebase.initializeApp(config);
// seedDatabase(firebase);

export { firebase };
