import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebse.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app)

const Provider = ({children}) => {

    const [user , setUser] = useState(null);

    const createUser=(email,passwords)=>{
        return createUserWithEmailAndPassword(auth,email,passwords);
    }

    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email ,password);
    }

    const updateUserProfile = (currentUser, name)=>{
        return updateProfile(currentUser,{displayName: name})
    }

    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })

        return ()=>{
            unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        createUser,
        logInUser,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default Provider;