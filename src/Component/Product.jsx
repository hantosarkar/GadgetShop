import React, { useContext } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';

const Product = ({ product }) => {
    const { addToWishlist, role } = useContext(AuthContext)
    return (
        <div className="card bg-base-100 w-full lg:w-11/12 shadow-xl">
            <Link to={`/ProductDetails/${product?._id}`}>
                <div>
                    <figure className="px-10 pt-10">
                        <img
                            src={product?.image}
                            className="rounded-xl h-48 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{product?.brand}</h2>
                        <p>{product?.description.length > 35 ? product?.description.substring(0, 35) : product?.description}</p>
                    </div>
                </div>
            </Link>

            {
                (!(role === "admin" || role === "Seller"))
                &&

                <div className="card-actions py-3 px-3">
                    <button onClick={() => { addToWishlist(product?._id) }} className="btn btn-sm w-full bg-gradient-to-r text-white from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"><CiShoppingCart />add to Wishlist</button>
                </div>
            }

        </div>
    );
};

export default Product;