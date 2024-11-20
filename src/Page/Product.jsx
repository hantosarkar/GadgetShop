import React, { useEffect, useState } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import axios from 'axios';
import Products from '../Component/Product/Products';
import { GrPowerReset } from "react-icons/gr";
const Product = () => {

    const [products, setProduct] = useState([]);
    const [Category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    //for Search
    const [sort, setSort] = useState('ASC');
    const [CategorySearch, setCategorySearch] = useState('');
    const [brandSearch, setBrandSearch] = useState('');



    useEffect(() => {
        const fetch = () => {
            axios.get(`http://localhost:3000/Product?Brand=${brandSearch}&Category=${CategorySearch}&Short=${sort}`)
                .then(res => {
                    if (res.data) {
                        setProduct(res.data.Product);
                        setCategory(res.data.allCategory);
                        setBrand(res.data.allBrand);
                    }
                })
        }
        fetch();
    }, [sort, CategorySearch, brandSearch])

    const handleShort = (e) => {
        setSort(e.target.value);

    }


    const handleBrandSearch = (e) => {
        setCategorySearch("");
        setBrandSearch(e.target.value)
    }

    const handleCategorySearch = (e) => {
        setBrandSearch("");
        setCategorySearch(e.target.value)

    }


    const handleReset = () => {
        setSort("ASC");
        setCategorySearch("");
        setBrandSearch("");
        window.location.reload();
    }


    return (
        <div>
            <Nav></Nav>
            <div className='min-h-screen container mx-auto'>
                <div class="flex gap-4 justify-between p-6 mt-10">
                    <div class="bg-base-200 w-52 min-h-screen p-3 rounded-t-md">
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
                                <button  onClick={handleReset} className='btn w-full bg-gray-400'>
                                  <GrPowerReset/>  Reset
                                    </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">

                        <div className='grid gap-2 grid-cols-3'>

                            {
                                products.map((products, i) =>
                                    <Products key={i} products={products} ></Products>
                                )
                            }
                        </div>


                    </div>
                    <div class="w-52">
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