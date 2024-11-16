import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import Banner from '../Component/Home/Banner';
import ShowProducts from '../Component/Home/ShowProducts';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <div className='min-h-screen'>
             <ShowProducts></ShowProducts>
            </div>

            <div>
                 <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;