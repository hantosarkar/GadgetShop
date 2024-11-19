import React from 'react';

const Products = ({ products }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    className='h-40 w-full bg-cover'
                        src={products?.image} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{products?.title}</h2>
                    <p>Description : {products?.description.length > 40 ? products?.description.substring(0, 40): products?.description }</p>
                    <p>Price : {products?.price}</p>
                    <p>Brand : {products?.brand}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;