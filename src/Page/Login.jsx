import React from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
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