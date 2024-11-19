import React, { useEffect, useState } from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import axios from 'axios';
import Products from '../Component/Product/Products';

const Product = () => {

    const [products, setProduct] = useState([]);
    const [Category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [sort, setSort] = useState();

    useEffect(() => {
        const fetch = () => {
            axios.get(`http://localhost:3000/Product?Short=${sort}`)
                .then(res => {
                    if (res.data) {

                        setProduct(res.data.Product);
                        setCategory(res.data.allCategory);
                        setBrand(res.data.allBrand);
                    }
                })
        }
        fetch();
    }, [sort])

    const handleShort = (e) => {
        setSort(e.target.value);
    }


    const handleBrandSearch = (e) => {


    }


    return (
        <div>
            <Nav></Nav>
            <div className='min-h-screen container mx-auto'>
                <div class="flex gap-4 justify-between p-6">
                    <div class="bg-base-200 w-52 min-h-screen p-3 rounded-t-md">
                        <h1 className='text-center p-2 text-xl font-bold'>Filter</h1>
                        <div className='space-y-3'>
                            <div>
                                <h1 className='text-xs font-thin mb-1'>Category</h1>
                                <select className="select select-bordered w-full max-w-xs">

                                    {

                                        Category.map((cate, i) =>
                                            <option key={i}>{cate}</option>
                                        )
                                    }

                                </select>
                            </div>
                            <div>
                                <h1 className='text-xs font-thin  mb-1'>Brand</h1>
                                <select className="select select-bordered w-full max-w-xs">
                                    {

                                        brand.map((brand, i) =>
                                            <option key={i}>{brand}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div>
                                <button className='btn w-full bg-gray-400'>Reset</button>
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