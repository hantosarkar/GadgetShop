import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <Link to={`/ProductDetails/${product?._id}`}>
            <div className="card bg-base-100 w-full lg:w-11/12 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={product?.image}
                        className="rounded-xl h-48 w-full object-cover" />
                </figure>
                {/* <hr className='border-2 bg-orange-300' />  */}
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product?.brand}</h2>
                    <p>{product?.description.length > 35 ? product?.description.substring(0, 35) : product?.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-sm w-full bg-gradient-to-r text-white from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"><CiShoppingCart />add to Wishlist</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;