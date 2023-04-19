import React, { createContext, useState } from 'react';
import { app } from '../firebase/firebse.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

    const authInfo = {
        user,
        createUser,
        logInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default Provider;