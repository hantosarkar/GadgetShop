import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>

                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex p-10 flex-col">
                        <label htmlFor="my-drawer-2" className="drawer-button ml-80 lg:hidden"></label>
                        {/* Page content here */}
                        <Outlet></Outlet>
                    </div>
                    <>
                        <div className="my-drawer-2 drawer-side text-white font-bold">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="my-drawer-2 menu text-center p-4 w-80 min-h-full bg-orange-400 text-base-content" >
                                {/* Sidebar content here */}
                                <li className='text-center font-bold text-3xl text-white'>Dashboard</li>
                                <div className='my-7 space-y-2'>
                                    <li className='text-center text-white'><Link className='btn btn-outline' to="">My Seals</Link></li>
                                    <li className=' text-center text-white '><Link className='btn btn-outline' to="">payment</Link></li>
                                </div>
                                <li className='text-center text-white'><Link className='btn btn-error btn-sm' to="/">Home</Link></li>
                            </ul>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;