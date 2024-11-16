import React, { useContext } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/Provider';

const Login = () => {
    const navigate =useNavigate();
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
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <Nav></Nav>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
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
                                    errors.password == "required" && (<p className='font-light text-red-600'>password is required </p>
                                    )}
                                {
                                    errors.password == "minLength" && (<p className='font-light text-red-600'>password mini 6 chr </p>
                                    )}
                                <label className="label">
                                    <span className='label-text-alt'>you have no account ? </span>
                                    <Link to='/Register' className="label-text-alt link link-hover">Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;