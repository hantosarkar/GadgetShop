import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/FirebaseInfo';
import axios from 'axios';

export const AuthContext = createContext();
const Provider = ({ children }) => {


    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const regisTer = (email, password) => {
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
            console.log(currentUser);
            if (currentUser) {
                axios.post("http://localhost:3000/jwt", { email: currentUser.email }).
                    then(res => {
                        if (res.data) {
                            localStorage.setItem('Token', res.data?.token)
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('Token');
                setLoading(false);
            }

            const userinfo = { email: currentUser?.email }
        })

        return () => {
            unsubscribe();
        }
    }, []);


    const authInfo = { regisTer, Login, logOut, user, loading, setLoginSuccess }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;