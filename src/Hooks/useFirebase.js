import {
    getAuth, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializAuthentication from "../firebase/firebase.init";




initializAuthentication();

const UseFirebase = () => {
    // Create state for update data
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Create GoogleAuthProvider and auth 
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // create SignInWithGoogle function
    const SignInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    // Create Sing up with password

    const signUpWithPassword = (name, email, password, location, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Update user name
                user["displayName"] = name;
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                // Signed in 

                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    // Login with email , password
    const loginWithEmailPassword = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Create onAuth Change function
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    // Create Logout function
    const LogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoading(false);
            })
    };

    // Return Value from here
    return {
        SignInWithGoogle,
        isLoading,
        signUpWithPassword,
        setIsLoading,
        user,
        LogOut,
        error,
        loginWithEmailPassword
    };
};

export default UseFirebase;