import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Product = ({ product }) => {
    console.log(product);
    return (
        <div>
            <div className="card bg-base-100 w-11/12 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={product?.image}
                        className="rounded-xl h-48 w-full object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{product?.brand}</h2>
                    <p>{product?.description.length > 35 ? product?.description.substring(0, 35) : product?.description}</p>
                    <div className="card-actions">
                        <button className="btn btn-sm w-full btn-primary"><CiShoppingCart/>add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;