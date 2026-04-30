import { ArrowRight } from '@gravity-ui/icons';
import Image from 'next/image';
import React from 'react';

const Hero_sec = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-16 py-6 md:py-10 lg:py-16">

            {/* Text */}
            <div className="text-center md:text-center lg:text-left max-w-xl">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                    Never Stop <span className="text-[#5751e1]">Learning</span> <br />
                    Life Never Stop Teaching
                </h1>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#545d70] my-2 md:my-3 lg:my-4">
                    Every teaching and learning journey is unique. We'll help guide your way.
                </p>

                <button className="mx-auto md:mx-auto lg:mx-0 flex items-center justify-center gap-2 py-2 md:py-3 px-5 md:px-6 rounded-full font-semibold text-white bg-[#5751e1]">
                    Start Free Trial
                </button>

            </div>

            {/* Image */}
            <div className="flex justify-center">
                <Image
                    src="/hero-photo-2.png"
                    alt="hero"
                    width={500}
                    height={500}
                    className="w-[200px] sm:w-[260px] md:w-[350px] lg:w-[500px] h-auto"
                />
            </div>

        </div>
    );
};

export default Hero_sec;