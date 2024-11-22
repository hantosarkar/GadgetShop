import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdOutlineCategory } from "react-icons/md";
export const Category = () => {
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get(`https://gadget-server-six.vercel.app/Product`)
            .then(res => {
                if (res.data) {
                    setCategory(res.data.allCategory);
                    setLoading(false);
                }
            })

    }, [])
    return (
        <div>
            <div>
                <h1 className='text-2xl py-20 font-bold text-center'>Featured Category </h1>
            </div>

            <div className=' bg-base-200'>
                {loading && <div className=' text-center p-10'><span className="loading loading-bars loading-sm"></span></div>}
                <div className='grid bg-base-200 rounded-lg p-10 grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5'>
                    {
                        category.map((cate, i) =>
                            <div key={i} className="card bg-base-300 text-white  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-zinc-500 hover:cursor-pointer hover:text-white w-full">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title"><MdOutlineCategory />{cate}</h2>
                                </div>
                            </div>)
                    }

                </div>
            </div>


        </div>

    )
}
