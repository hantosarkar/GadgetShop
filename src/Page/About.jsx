import React from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import AboutContact from '../Component/About/aboutContact';
import  "./Home.css"
const About = () => {
    return (
        <div className='poppins-regular'>
            <Nav></Nav>
            <div className='min-h-screen'>
              <AboutContact></AboutContact>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;