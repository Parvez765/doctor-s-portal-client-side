import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

export const AuthContext = createContext() 

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // CreateA New User
    const createUser = (email, password) => {
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signup Current User
    const userLogin = (email, password) => {
        console.log(email, password)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User LogOut
    const userLogOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {user, createUser, userLogin, userLogOut, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;