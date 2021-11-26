import { getAuth,signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import initalizeAuthentication from "../pages/Login/Login/Firebase/firebase.init";

initalizeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();



    const registerWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               
            })
            .catch((error) => {
               
            });
   }
    
   const registerUser = (email, password, name, history) => {
    setIsLoading(true);
       createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
               setAuthError('');
               const newUser = { email, displayName: name };
               setUser(newUser);
               updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                
              }).catch((error) => {
                
              });
               history.replace('/');
           })
           .catch((error) => {
               setAuthError(error.message);
           })
        .finally(() => setIsLoading(false));
}


    
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setAuthError('');
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));       
    }



    const logInUser = (email, password, location, history) => {
        setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
        .finally(() => setIsLoading(false));
}

    //observe user state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    } , [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }



    return {
        user,
        logOut,
        authError,
        isLoading,
        registerUser,
        logInUser,
        registerWithEmail,
       signInUsingGoogle
   }
};

export default useFirebase;