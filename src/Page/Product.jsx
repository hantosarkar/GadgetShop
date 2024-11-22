import React, { useEffect, useState } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import axios from 'axios';
import Products from '../Component/Product/Products';
import { GrPowerReset } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import  "./Home.css"

const Product = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProduct] = useState([]);
    const [Category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    //for Search
    const [sort, setSort] = useState('ASC');
    const [CategorySearch, setCategorySearch] = useState('');
    const [brandSearch, setBrandSearch] = useState('');
    const [search, setSearch] = useState('');


    useEffect(() => {
        setLoading(true);
        const fetch = () => {
            axios.get(`https://gadget-server-six.vercel.app/Product?Brand=${brandSearch}&Category=${CategorySearch}&Short=${sort}&search=${search}`)
                .then(res => {
                    if (res.data) {
                        setProduct(res.data.Product);
                        setCategory(res.data.allCategory);
                        setBrand(res.data.allBrand);
                        setLoading(false);
                    }

                })
        }
        fetch();
    }, [sort, CategorySearch, brandSearch, search])

    const handleShort = (e) => {
        setSort(e.target.value);

    }


    const handleBrandSearch = (e) => {
        setCategorySearch("");
        setSearch("")
        setBrandSearch(e.target.value)
    }

    const handleCategorySearch = (e) => {
        setSearch("")
        setBrandSearch("");
        setCategorySearch(e.target.value)

    }

    const handleSearch = (e) => {
        e.preventDefault();

        setCategorySearch("");
        setBrandSearch("");
        setSearch(e.target.search.value);

    }


    const handleReset = () => {
        setSort("ASC");
        setCategorySearch("");
        setBrandSearch("");
        window.location.reload();
    }


    return (
        <div className='poppins-regular bg-base-300'>
            <Nav></Nav>
            <div className='min-h-screen container mx-auto'>
                <div className="flex flex-col-reverse md:flex-row lg:flex-row gap-5 justify-between p-6 mt-10">
                    <div className="w-full md:w-60 lg:w-60 p-3 rounded-t-md">
                        <div className='pb-2'>
                            <form onSubmit={handleSearch}>
                                <div className='flex gap-1'>
                                    <input type="text" name='search' placeholder='Search' className='border outline-none p-1 px-1  rounded-l-md' />
                                    <button className='border rounded-r-md p-1 bg-slate-300 hover:bg-slate-400 w-full '><IoIosSearch /></button>
                                </div>
                            </form>
                        </div>
                        <div className="bg-base-200 w-full md:w-60 lg:w-60  p-3 rounded-t-md">
                            <h1 className='text-center p-2 text-xl font-bold'>Filter</h1>
                            <div className='space-y-3'>
                                <div>
                                    <h1 className='text-xs font-thin mb-1'>Category</h1>
                                    <select onClick={handleCategorySearch} className="select select-bordered w-full max-w-xs">

                                        {

                                            Category.map((cate, i) =>
                                                <option key={i}>{cate}</option>
                                            )
                                        }

                                    </select>
                                </div>
                                <div>
                                    <h1 className='text-xs font-thin  mb-1'>Brand</h1>
                                    <select onClick={handleBrandSearch} className="select select-bordered w-full max-w-xs">
                                        {

                                            brand.map((brand, i) =>
                                                <option key={i} value={brand}>{brand}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div>
                                    <button onClick={handleReset} className='btn w-full bg-gray-400'>
                                        <GrPowerReset />  Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">

                        {loading && <div className=' text-center p-10'><span className="loading loading-bars loading-sm"></span></div>}

                        {
                            products.length < 1 && <div className='w-full flex justify-center items-center min-h-screen text-center'>
                                <img src="./../../public/Images/noDataFound.png" alt="" />
                            </div>
                        }
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 '>
                            {
                                products.map((products, i) =>
                                    <Products key={i} products={products} ></Products>
                                )
                            }
                        </div>
                    </div>
                    <div className="w-52">
                        <div className='flex gap-3 items-center'>
                            <h1>Prize</h1>
                            <select onClick={handleShort} className="border p-1 rounded outline-none">
                                <option value='ASC'>Low</option>
                                <option value="DESC">Heigh</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Product;