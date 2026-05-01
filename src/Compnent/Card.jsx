import { ArrowRight, StarFill } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({e}) => {
    if(!e){
        return null
    }
    const {category, image, description, level, rating, duration, instructor, title, id} = e;
    // console.log(e)
    return (
        <div>
            <div className="p-7 h-full mt-15 border border-[#6D6C80] rounded-xl">
                <Image className='mx-auto mb-4' src={image} alt='card image' height={50} width={400}></Image>
                <div className="flex items-center justify-between my-2">
                    <h3 className="font-semibold bg-gray-200 rounded-full py-1 px-3">{category}</h3>
                    <h3 className="font-semibold flex items-center justify-center gap-2"> <StarFill className='text-orange-300'/>{rating} reviews </h3>
                </div>
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="text-xl text-[#75757b]">By <span className='font-semibold text-black'>{instructor}</span> </p>
                <div className="flex items-center justify-end mt-5">
                    <Link className=' flex items-center justify-center gap-2 py-1 px-5 text-xl font-semibold bg-amber-500 border border-black rounded-full' href={`/${id}`}>See Details <ArrowRight /></Link>

                </div>
            </div>
        </div>
    );
};

export default Card;