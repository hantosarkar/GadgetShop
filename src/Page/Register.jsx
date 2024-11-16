import React from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {

    const {
        register,
        handleSubmit,
        watch,
        type
        ,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

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
                                <input {...register('email',{required:true})} type="email" placeholder="email" className="input input-bordered"  />
                                {
                                    errors.email && <p className='font-light text-red-600'>Email is required </p>
                                }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password' ,{required:true , minLength: 6})} type="password" placeholder="password" className="input input-bordered"  />
                                {
                                    errors.password == "required" && ( <p className='font-light text-red-600'>password is required </p>
                                )}
                                {
                                    errors.password == "minLength" && (<p className='font-light text-red-600'>password mini 6 chr </p>
                               ) }
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select {...register('Role')} className="select select-bordered w-full max-w-xs">
                                    <option>Seller</option>
                                    <option>Buyer</option>
                                </select>
                                <label className="label">
                                    <span className='label-text-alt'>Do you have an account ? </span>
                                    <Link to='/Login' className="label-text-alt link link-hover">Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-accent text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;