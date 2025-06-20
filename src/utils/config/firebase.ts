import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBw6dy3BHwoh82VTF5fSRVw3lRRRM9J8N0",
	authDomain: "task-management-de239.firebaseapp.com",
	projectId: "task-management-de239",
	storageBucket: "task-management-de239.firebasestorage.app",
	messagingSenderId: "1089455531751",
	appId: "1:1089455531751:web:2c947eeeb45f6ca8002442",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
