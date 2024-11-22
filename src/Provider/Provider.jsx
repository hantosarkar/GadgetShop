import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/FirebaseInfo';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';


export const AuthContext = createContext();
const Provider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [role, setRole] = useState(null);
    const [wishlist, setWishlist] = useState([]);
    const [changeId, setChangeId] = useState();
    console.log(changeId);

    const addToWishlist = async (id) => {
        setChangeId(id);
        if (!user) {
            toast.error('Login First');
            window.location.href = "/Login"
        } else {
            const data = { id, user }
            const res = await axios.patch('http://localhost:3000/wishlist', data);
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                toast.success("add to WishList Success")
            }
        }
    }

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

        const authUser = () => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
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
        }

        const userRole = async () => {
            setLoading(true);
            const res = await axios.get(`http://localhost:3000/user${user?.email}`);
            if (res.data?.role) {
                setRole(res.data.role);
                setWishlist(res.data.wishlist);
                setLoading(false);
            }
        }

        userRole();
        authUser();
    }, [auth, user?.email, changeId]);


    const authInfo = { regisTer, Login, logOut, user, role, addToWishlist, wishlist, loading, setLoginSuccess }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer></ToastContainer>
        </AuthContext.Provider>
    );
};

export default Provider;