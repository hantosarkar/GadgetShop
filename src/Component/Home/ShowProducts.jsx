import React, { useEffect, useState } from 'react';
import Product from '../Product';
import axios from 'axios';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/Product`)
            .then(res => {
                if (res.data) {
                    setProducts(res.data.Product);
                }
            })

    }, [])
    return (
        <>
            <div>
                <h1 className='text-2xl py-10 font-bold text-center'>Products</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 py-10 gap-4 items-center justify-center'>
                
                {
                    products.map((product,i)=>
                        <Product key={i} product={product} ></Product>
                        )
                }
            </div>
        </>
    );
};

export default ShowProducts;