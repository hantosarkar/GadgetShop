import React, { useContext } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/Provider';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/FirebaseInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { split } from 'postcss/lib/list';
import "./Home.css"
const Login = () => {
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const { Login, setLoginSuccess } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();



    const onSubmit = (data) => {
        const email = data?.email;
        const password = data?.password;
        console.log(password, email);
        if (email && password) {
            Login(email, password)
                .then(() => {
                    navigate("/")
                })
                .catch(error => {
                    toast.error(error.message)
                    console.log(error.message);

                }
                )
        }
    }


    const handleGoogleLogging = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                navigate(location?.state ? location.state : '/');
                const user = result.user;
                // console.log(user)
            })
            .catch((error) => {
                console.log(error.message)
                toast.error(error.message)
            })
    }


    return (
        <div className='poppins-regular'>
            <Nav></Nav>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content lg:w-1/2 flex-col">
                    <div className="card bg-base-100 w-full lg:max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className='text-center py-3'>
                                <span className="text-xl font-bold">Login</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register('email', { required: true })} type="email" placeholder="email" className="input input-bordered" />
                                {
                                    errors.email && <p className='font-light text-red-600'>Email is required </p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password', { required: true, minLength: 6 })} type="password" placeholder="password" className="input input-bordered" />
                                {
                                    errors.password?.type == "required" && (<p className='font-light text-red-600'>password is required </p>
                                    )}
                                {
                                    errors.password == "minLength" && (<p className='font-light text-red-600'>password mini 6 chr </p>
                                    )}
                                <label className="label">
                                    <span className='label-text-alt'>Do you not have an account? </span>
                                    <Link to='/Register' className="label-text-alt link link-hover">Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white btn-info">Login</button>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleLogging} className="btn flex gap-4"><FcGoogle />Google</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;