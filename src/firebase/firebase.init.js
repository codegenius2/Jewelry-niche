import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const initializAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializAuthentication;