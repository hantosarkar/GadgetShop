import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SiBrandfolder } from "react-icons/si";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const ProductDetails = () => {
    const { _id: id } = useParams();
    const [loading, setLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:3000/Product/${id}`).
            then(res => {
                setSingleProduct(res.data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <Nav></Nav>
            <div className='lg:p-10 min-h-screen container mx-auto'>
                {/* <div className='card shadow-lg min-h-96 flex flex-col md:flex-row justify-center gap-5  lg:flex-row p-4'>
                    <div className='bg-red-400 w-full'> Product Image</div>
                    <div className='bg-red-500 w-full'> Product Details</div>
                </div> */}
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    {loading ?
                        <div className='text-center p-10'><span className="loading loading-bars loading-sm"></span></div>
                        :
                        <div className='card lg:card-side bg-base-100 shadow-xl'>
                            <figure className='p-4'>
                                <img
                                    className='rounded'
                                    src={singleProduct?.image}
                                    alt="Album" />
                            </figure>
                            <div className="card-body">
                                <div className='lg:px-14 pb-8'>
                                    <h2 className="card-title mb-6 font-bold">{singleProduct?.title}</h2>
                                    <h3 className='mb-2 flex gap-3 items-center'><SiBrandfolder className='text-red-500' />{singleProduct?.brand}</h3>
                                    <h3 className='mb-4 flex gap-3 items-center'><FaBangladeshiTakaSign className='text-green-400' />{singleProduct?.price}</h3>
                                    <div className='lg:pr-96'>
                                        <span>{singleProduct?.description}</span>
                                    </div>
                                    <div className='flex gap-5 py-10'>
                                        <label >Quantity</label>
                                        <div>
                                            <button className='px-5 p-2 bg-slate-300'><AiOutlineMinus /></button>
                                        </div>
                                        <div>1</div>
                                        <div>
                                            <button className='px-5 p-2 bg-slate-300'><GoPlus /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex px-14 flex-col md:flex-row lg:flex-row gap-5'>
                                    {/* <button className="btn btn-accent text-white ">Buy Now </button> */}
                                    <button className="btn btn-info text-white lg:w-1/2"><CiShoppingCart />Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;