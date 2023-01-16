import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializAuthentication;