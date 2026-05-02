import Image from 'next/image';
import React from 'react';

const Stay = () => {
    return (
        <div>
            <div className="bg-[#5751e1] flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-5 md:px-10 py-10">

                {/* IMAGE */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src={'/stay-hero.png'}
                        alt='stay hero image'
                        height={300}
                        width={400}
                        className=" max-w-sm md:max-w-md"
                    />
                </div>

                {/* TEXT + INPUT */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
                        Want to stay informed about <br className="hidden md:block" />
                        new courses & study?
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center lg:items-start mt-5 gap-3">

                        <input
                            className="w-full sm:w-auto flex-1 bg-[#4A44D1] py-2 px-5 rounded-full text-white placeholder:text-gray-300 outline-none"
                            type="text"
                            placeholder="Type your Email"
                        />

                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 px-5 text-sm md:text-base font-semibold 
            bg-amber-500 border border-black rounded-full hover:bg-amber-600 transition">
                            Subscribe Now
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stay;