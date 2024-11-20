import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen w-full"
                style={{
                    backgroundImage: "url(Images/Gadet.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Gadget Shop</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-outline text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;