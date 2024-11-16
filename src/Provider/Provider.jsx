import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/FirebaseInfo';

export const AuthContext = createContext() ;
const Provider = ({children}) => {


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const Login = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const userinfo = { email: currentUser?.email }
        })

        return () => {
            unsubscribe();
        }
    }, []);




    const AuthInfo = {}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;