import Image from 'next/image';
import React from 'react';

const UnderMark = () => {
    return (
        <div>
            <div className="flex item-center p-10 my-10 border rounded-2xl justify-between w-11/12 gap-5 mx-auto">
                <div className="w-[50%]">
                    <Image src={'/under-marq.png'} alt='under marq' height={40} width={500}></Image>
                </div>
                <div className="flex w-[50%] flex-col items-start space-y-3 ">
                    <div className="bg-[#efeefe] text-[#5751e7] rounded-full py-2 px-5 text-xl">
                        Trending Categories
                    </div>
                    <h2 className="text-2xl">Thousand Of Top <span className='text-[]#fff bg-[#ffce2c]'>Cources</span>
                        Now in One Place</h2>
                    <p className='w-5/12 text-[#807c7c]'>Groove’s intuitive shared inbox makes it easy for team members to
                        organize, prioritize and.In this episode of the Smashing Pod we’re
                        talking about Web Platform Baseline.</p>
                        <div className="text-left">
                            <h1 className='flex items-center  gap-3'> <Image src={'/right-arrow.png'} alt={'right arrow'} height={40} width={50}></Image>The Most World Class Instructors.</h1>
                            <h1 className='flex items-center  gap-3'> <Image src={'/right-arrow.png'} alt={'right arrow'} height={40} width={50}></Image>Access Your Class anywhere.</h1>
                            <h1 className='flex items-center  gap-3'> <Image src={'/right-arrow.png'} alt={'right arrow'} height={40} width={50}></Image>Flexible Course Plan. </h1>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default UnderMark;