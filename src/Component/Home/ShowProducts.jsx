import React from 'react';
import Product from '../Product';

const ShowProducts = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl py-10 font-bold text-center'>Products</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 py-10 lg:gap-4'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </>
    );
};

export default ShowProducts;