import React from 'react';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
import getinTuch from './../../public/Images/getinTuch.png'
import "./Home.css"
const ContactUs = () => {
    return (
        <div className='poppins-regular'>
            <Nav></Nav>
            <div className='min-h-screen container mx-auto'>
                <div className='flex flex-col md:flex-row lg:flex-row  justify-center items-center gap-5  bg-gradient-to-r  from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg '>
                    <div className='flex-1 lg:p-10 '>
                        <img className='rounded-lg' src={getinTuch}></img>
                    </div>
                    <div className='flex-1 p-10'>
                        <form className="card-body lg:w-10/12 border-2 rounded-lg">
                            <div className='text-center py-3 '>
                                <span className="text-xl font-bold text-white">Get in Touch</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea placeholder='Message' className='border rounded-lg p-5 outline-none' id="" cols="30" rows="3"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white btn-accent">Send</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='lg:py-10 py-8'>
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.059423060864!2d90.34525527432585!3d23.745260288975576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6de1df75f5%3A0x905ed0f247567968!2sBosila%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1732182124966!5m2!1sen!2sbd" className='w-full h-[300px] rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;