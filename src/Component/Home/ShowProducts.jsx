import React, { useEffect, useState } from 'react';
import Product from '../Product';
import axios from 'axios';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://gadget-server-six.vercel.app/Product`)
            .then(res => {
                if (res.data) {
                    setProducts(res.data.Product);
                    setLoading(false);
                }
            })
    }, [])
    return (
        <>
            <div>
                <h1 className='text-2xl py-10 font-bold text-center'>Featured Products</h1>
            </div>
            <div className='bg-base-200'>
                {loading && <div className=' text-center p-10'><span className="loading loading-bars loading-sm"></span></div>}
                <div className='grid bg-base-200 p-4 rounded-lg lg:p-4 grid-cols-1 lg:grid-cols-4 py-10 gap-4 items-center justify-center'>

                    {
                        products.map((product, i) =>
                            <Product key={i} product={product} ></Product>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ShowProducts;