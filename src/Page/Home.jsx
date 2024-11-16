import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='min-h-screen'>

            </div>

            <div>
                 <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;