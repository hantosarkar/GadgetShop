import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

const Dashboard = () => {

    const { role } = useContext(AuthContext)


    const adminRoute = [
        { name: 'Dashboard Overview', path: '/admin/dashboard', icon: '<MdOutlineProductionQuantityLimits/>' },
        { name: 'User Management', path: '/admin/users' },
        { name: 'Analytics', path: '/admin/analytics' },
        { name: 'Settings', path: '/admin/settings' }
    ];

    const seller = [
        { name: 'My Product', path: '/seller/products' , icon: <FaClipboardList />  },
        { name: 'Add Product', path: '/seller/orders' , icon: <FaAddressBook /> },
        { name: 'Profile', path: '/seller/settings' , icon: <FaUser /> }
    ];

    const buyer = [
        { name: 'My WishList', path: '/buyer/products', icon: <MdOutlineProductionQuantityLimits /> },
        { name: 'My Orders', path: '/buyer/orders', icon: <TbReorder /> },
        { name: 'Profile', path: '/buyer/profile', icon: <FaUser /> }
    ];


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
                            <ul className="my-drawer-2 menu text-center p-4 w-80 min-h-full bg-gray-600 text-base-content" >
                                {/* Sidebar content here */}

                                {
                                    role === "Buyer"
                                    &&
                                    <>
                                        <li className='text-center font-bold text-3xl text-white'>Dashboard</li>
                                        <div className='my-7 space-y-2'>
                                            {
                                                buyer.map(b =>
                                                    <li className='text-center text-white'><Link className='btn btn-outline text-white' to="">{b.icon}{b.name}</Link></li>
                                                )
                                            }
                                        </div>
                                        <li className='text-center text-white'><Link className='btn btn-info btn-sm' to="/">Home</Link></li>
                                    </>
                                }
                                {
                                    role === "Seller"
                                    &&
                                    <>
                                        <li className='text-center font-bold text-3xl text-white'>Dashboard</li>
                                        <div className='my-7 space-y-2'>
                                            {
                                                seller.map(b =>
                                                    <li className='text-center text-white'><Link className='btn btn-outline text-white' to="">{b.icon}{b.name}</Link></li>
                                                )
                                            }
                                        </div>
                                        <li className='text-center text-white'><Link className='btn btn-info btn-sm' to="/">Home</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;