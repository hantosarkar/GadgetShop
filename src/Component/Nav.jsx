import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { CiShoppingCart } from 'react-icons/ci';

const Nav = () => {
    const { user , logOut , wishlist } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/Product">Product</NavLink></li>
                            <li><NavLink to="/About">About Us</NavLink></li>
                            <li><NavLink to="/Contact">Contact Us</NavLink></li>
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}

                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-xl">Gadget Shop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Product">Product</NavLink></li>
                        <li><NavLink to="/About">About Us</NavLink></li>
                        <li><NavLink to="/Contact">Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <Link to="/ShowCart"><button className="btn  btn-ghost">
                        <CiShoppingCart className="text-xl font-bold" />
                        <div className="badge text-white badge-secondary">{wishlist.length}</div>
                    </button>
                    </Link>

                    {
                        user
                            ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link to="/Dashboard" className="justify-between">
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li><a onClick={logOut}>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <div className='flex gap-3'>
                                <NavLink to="/Login" className="btn btn-sm bg-info  text-white">Login</NavLink>
                                <NavLink to="/Register" className="btn btn-sm bg-accent  text-white">Register</NavLink>
                            </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Nav;