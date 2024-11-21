import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const id = useParams();
    console.log(id);
    return (
        <div>
            <Nav></Nav>
            <div className='p-10 min-h-screen'>
                <div className='card shadow-lg flex flex-col md:flex-row  lg:flex-row p-4'>
                    <div>Product Image </div>
                    <div> Product Details</div>
                    <div> Product Details</div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;