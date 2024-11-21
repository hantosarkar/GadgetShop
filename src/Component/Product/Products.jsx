import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {

    return (
        <div>
            <Link to={`/ProductDetails/${products._id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            className='h-48 w-full object-cover'
                            src={products?.image} />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold">{products?.title}</h2>
                        <p className='text-sm'>Description : {products?.description.length > 35 ? products?.description.substring(0, 35) : products?.description}</p>
                        <p>Brand : {products?.brand}</p>
                        <p className='font-medium text-orange-700'>Price : {products?.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white w-full btn-sm">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Products;