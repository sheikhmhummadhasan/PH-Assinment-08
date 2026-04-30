import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Marquery = () => {
    return (
        <div className=''>
            <h1 className="text-4xl text-center font-bold mb-4 text-[#5751e1]">Our Sponsor</h1>
            <div className="bg-[#06042E]">
                <Marquee>
                <Image src={'/marque.png'} alt='marque' height={100} width={900}></Image>
                <Image src={'/marque.png'} alt='marque' height={100} width={900}></Image>
                <Image src={'/marque.png'} alt='marque' height={100} width={900}></Image>
                <Image src={'/marque.png'} alt='marque' height={100} width={900}></Image>
            </Marquee>
            </div>
        </div>
    );
};

export default Marquery;