import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user, setUser] = useState({})

    return (    
        <AuthContext.Provider value={{user}} >
            { children }
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}