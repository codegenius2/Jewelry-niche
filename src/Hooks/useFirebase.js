import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializAuthentication from "../firebase/firebase.init";




initializAuthentication();

const UseFirebase = () => {
    // Create state for update data
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
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
                const user = result.user;
                // save user data to database
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/dashboard';
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
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // Update user name
                user["displayName"] = name;
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                // Signed in 

                const destination = location?.state?.from || '/dashboard';
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
                const destination = location?.state?.from || '/dashboard';
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

    // Cheack user admin
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // Create Logout function
    const LogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => {
                setIsLoading(false);
            })
    };

    // User save function
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    // Return Value from here
    return {
        SignInWithGoogle,
        isLoading,
        signUpWithPassword,
        setIsLoading,
        user,
        LogOut,
        admin,
        error,
        loginWithEmailPassword
    };
};

export default UseFirebase;