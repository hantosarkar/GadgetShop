import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import Banner from '../Component/Home/Banner';
import ShowProducts from '../Component/Home/ShowProducts';
import FreeqenAsk from '../Component/Home/FreeqenAsk';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className='min-h-screen'>
                <Banner></Banner>
                <ShowProducts></ShowProducts>
                <FreeqenAsk></FreeqenAsk>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;