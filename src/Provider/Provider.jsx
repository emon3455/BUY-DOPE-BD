import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebse.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();


const Provider = ({children}) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser=(email,passwords)=>{
        return createUserWithEmailAndPassword(auth,email,passwords);
    }

    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email ,password);
    }

    const updateUserProfile = (currentUser, name)=>{
        return updateProfile(currentUser,{displayName: name})
    }

    const emailVerify=(user)=>{
        return sendEmailVerification(user)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const logWithGoogle=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        createUser,
        logInUser,
        updateUserProfile,
        emailVerify,
        logOut,
        logWithGoogle,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default Provider;