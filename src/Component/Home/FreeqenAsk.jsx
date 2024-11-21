import React from 'react';
import fqa from "./../../../public/Images/fqa.jpg"
const FreeqenAsk = () => {
    return (
        <div className='bg-base-100 rounded-lg mt-10'>
            <div>
                <h1 className='text-2xl py-10 font-bold text-center'>Frequently Ask Question </h1>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-row gap-5 lg:p-5'>
                <div>
                    <img className='rounded-lg' src={fqa} alt="" />
                </div>
                <div className='w-4/5 mx-auto py-10 space-y-5'>
                    <div className="collapse collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">আমি কি পণ্য ফিরিয়ে দিতে পারব?</div>
                        <div className="collapse-content">
                            <p>হ্যাঁ, আপনি যদি কোনও পণ্য না পছন্দ করেন বা পণ্যটি ত্রুটিপূর্ণ হয়, তবে আপনি সেটি ফিরিয়ে দিতে পারেন। আমাদের ফিরতি নীতি অনুযায়ী, আপনি পণ্যটি প্রাপ্তির ৭ দিনের মধ্যে ফিরিয়ে দিতে পারবেন। অনুগ্রহ করে পণ্যের সাথে কোনো ব্যবহারের চিহ্ন না রেখে পণ্যটি ফিরিয়ে দিন। বিস্তারিত জানার জন্য আমাদের ওয়েবসাইটের 'Return Policy' দেখুন।</p>
                        </div>

                    </div>
                    <div className="collapse collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">আমি কি ডেলিভারি ফি পাব ?</div>
                        <div className="collapse-content">
                            <p>ডেলিভারি ফি আমাদের ওয়েবসাইটে নির্ধারিত অঞ্চলের উপর নির্ভর করে। কিছু বিশেষ ক্যাম্পেইন বা অফার চলাকালে আমরা বিনামূল্যে ডেলিভারি অফার করতে পারি। ডেলিভারি ফি সম্পর্কে আরো জানতে, আপনি চেকআউট পেজে গিয়ে আপনার ঠিকানা ও পণ্যের ধরন অনুযায়ী ফি দেখতে পারবেন।</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-300">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">আমি কি বিভিন্ন পেমেন্ট মেথড ব্যবহার করতে পারব?</div>
                        <div className="collapse-content">
                            <p>হ্যাঁ, আমাদের ওয়েবসাইটে আপনি বিভিন্ন পেমেন্ট মেথড ব্যবহার করতে পারবেন যেমন: ক্রেডিট বা ডেবিট কার্ড, মোবাইল পেমেন্ট, বিকাশ, নগদ পেমেন্ট এবং ব্যাংক ট্রান্সফার। আপনি আপনার সুবিধামতো পেমেন্ট মেথড নির্বাচন করতে পারবেন চেকআউট পেজে।</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeqenAsk;