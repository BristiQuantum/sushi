/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase_config";
import { GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";



const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    // password sign up
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // password login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }

    /// get current user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // update user info
    const getName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
          })
    }
    
    // foget password
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // email verification
    const verify = () => {
        return sendEmailVerification(auth.currentUser)

    }
    




    // logout
    const logOut = () => {
        return signOut(auth)
    }




    const info = {
        user,
        signUp,
        getName,
        verify,
        login,
        googleLogin,
        githubLogin,
        logOut,
        forgetPassword,
        loading,
        setLoading,
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;