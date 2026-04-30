import { ArrowRight } from '@gravity-ui/icons';
import Image from 'next/image';
import React from 'react';

const Hero_sec = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto flex items-center justify-between">
                <div className="mb-30">
                    <h1 className="text-8xl">Never Stop Learning <br />
                        Life Never Stop Teaching</h1>
                    <p className='text-[#545d70] my-2'>Every teaching and learning journey is unique Following
                        We'll help guide your way.</p>
                    <button className='flex items-center justify-center gap-2 py-2 px-5 rounded-full font-semibold text-white bg-[#5751e1]'> Start Free Trial <ArrowRight></ArrowRight></button>
                </div>
                <div className="bg-[url('/hero-bg.png')] bg-no-repeat h-screen bg-center">
                    <Image src={'/hero-student.png'} alt='hero student' height={500} width={500}></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero_sec;