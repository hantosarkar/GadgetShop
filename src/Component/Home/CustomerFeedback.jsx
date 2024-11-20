import React from 'react';

const CustomerFeedback = () => {
    return (
        <div>
            <div className='w-full'>
                <div>
                    <h1 className='text-2xl py-20 font-bold text-center'>Customer Feedback </h1>
                </div>
                <div className="carousel w-full rounded-lg bg-base-300">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='w-full flex flex-col lg:flex-row items-center  gap-4 p-20'>
                            <div className='w-[600px] rounded-full flex gap-4 justify-center items-center'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img className='rounded-full mb-10 w-1/2 object-cover' src="https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4OTA1NjQyNjg0MDAwMDA3/how-to-be-a-gentleman-a-begginers-guide.png" alt="" />
                                    <span className='text-xl font-bold'>Mr Laris</span>
                                    <span>Founder and CEO
                                        Williams Fitness
                                    </span>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center font-bold'>
                                <h2>“I recently bought a smart speaker from this shop, and I'm very impressed! The website is user-friendly, and the product arrived on time, well-packaged. The gadget works perfectly, and I'm already considering purchasing more accessories for it”</h2>
                            </div>

                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='w-full flex flex-col lg:flex-row items-center  gap-4 p-20'>
                            <div className='w-[600px] rounded-full flex gap-4 justify-center items-center'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img className='rounded-full mb-10 w-1/2 object-cover' src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="" />
                                    <span className='text-xl font-bold'>Mr Salam</span>
                                    <span>Founder and CEO
                                        KALA Fitness
                                    </span>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center font-bold'>
                                <h2>“I ordered a set of wireless earbuds, and while the product is amazing, my experience with delivery wasn't the best. It took longer than expected for the order to arrive. The gadget itself works perfectly and the quality is top-notch, but I was hoping for a quicker delivery."</h2>
                            </div>

                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='w-full flex flex-col lg:flex-row items-center  gap-4 p-20'>
                            <div className='w-[600px] rounded-full flex gap-4 justify-center items-center'>
                                <div className='flex flex-col justify-center items-center'>
                                    <img className='rounded-full mb-10 w-1/2 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexJlj-u11e9jqIjAGTuRO8Uqx8QOUaazGjw&s" alt="" />
                                    <span className='text-xl font-bold'>Mr Kalam</span>
                                    <span>Founder and CEO
                                        ALA Fitness
                                    </span>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500"  />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center font-bold'>
                                <h2>“I bought a new gaming laptop from this store, and I couldn't be happier with my purchase. The gadget is exactly as described, and it works flawlessly. I had a small issue setting it up, so I contacted customer service, and they responded quickly with helpful instructions”</h2>
                            </div>

                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;