import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { TbReorder } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
const Dashboard = () => {

    const { role } = useContext(AuthContext)


    const admin = [
        { name: 'User Management', path: '/admin/dashboard', icon: <FaUserCog /> },
        { name: 'Analytics', path: '/admin/analytics', icon: <TbReorder /> },
        { name: 'Settings', path: '/admin/settings', icon: <IoIosSettings /> }
    ];

    const seller = [
        { name: 'My Product', path: '/seller/products', icon: <FaClipboardList /> },
        { name: 'Add Product', path: '/seller/orders', icon: <FaAddressBook /> },
        { name: 'Profile', path: '/seller/settings', icon: <FaUser /> }
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
                        <label htmlFor="my-drawer-2" className="drawer-button font-bold text-xl lg:hidden"><IoMdMenu /></label>
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
                                                    <li className='text-center text-white'><Link className='btn btn-outline flex gap-5 text-white' to="">{b.icon}{b.name}</Link></li>
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
                                                    <li className='text-center text-white'><Link className='btn flex gap-5 btn-outline text-white' to="">{b.icon}{b.name}</Link></li>
                                                )
                                            }
                                        </div>
                                        <li className='text-center text-white'><Link className='btn btn-info btn-sm' to="/">Home</Link></li>
                                    </>
                                }
                                {
                                    role === "Admin"
                                    &&
                                    <>
                                        <li className='text-center font-bold text-3xl text-white'>Dashboard</li>
                                        <div className='my-7 space-y-2'>
                                            {
                                                admin.map(b =>
                                                    <li className='text-center text-white'><Link className='btn flex gap-5 btn-outline text-white' to="">{b.icon}{b.name}</Link></li>
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