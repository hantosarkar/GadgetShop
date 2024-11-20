import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3000/Product`)
            .then(res => {
                if (res.data) {
                    setCategory(res.data.allCategory);
                }
            })

    }, [])
    return (
        <div>
            <div>
                <h1 className='text-2xl py-20 font-bold text-center'>Product Category </h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

                {
                    category.map((cate , i) => 
                    <div key={i} className="card bg-base-300 hover:bg-zinc-500 hover:cursor-pointer hover:text-white w-96">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{cate}</h2>
                        </div>
                    </div>)
                }

            </div>
        </div>

    )
}
