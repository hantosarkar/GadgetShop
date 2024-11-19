import React from 'react';

const Products = ({ products }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    className='h-40 w-full object-cover'
                        src={products?.image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{products?.title}</h2>
                    <p className='text-sm'>Description : {products?.description.length > 35 ? products?.description.substring(0, 35): products?.description }</p>
                    <p>Brand : {products?.brand}</p>
                    <p className='font-bold'>Price : {products?.price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full btn-sm">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;