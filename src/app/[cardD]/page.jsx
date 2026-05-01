'use client'
import { ArrowRight, StarFill } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react';

const CArdDetail = ({ params }) => {

    const { cardD } = use(params);
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:5000/courses/${cardD}`);
            const data = await res.json();
            setCard(data)
            setLoading(false)
        };
        fetchData();
    }, [cardD]);

    if (loading) {
        <h1 className="text-3xl">Loading...</h1>
    }

    console.log(card)
    if (!card) {
        return null
    }
    const { category, price, image, description, level, rating, duration, instructor, title, id } = card;
    return (
        <div>
            <div className="w-11/12  mx-auto mt-20">
                <div className="p-7 h-full flex items-center justify-between mt-15 border border-[#6D6C80] rounded-xl">
                    <div className="">
                        <Image className='mx-auto mb-4' src={image} alt='card image' height={50} width={500}></Image>
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-semibold">{title}</h2>
                        <p className='text-[#75757b] text-xl my-2'>{description}</p>
                        <h2 className="text-2xl font-semibold">Level: {level}!</h2>
                        <h2 className="text-2xl font-semibold">Duration: {duration}.</h2>
                        <div className="flex items-center justify-between my-2">
                            <h3 className="font-semibold bg-gray-200 rounded-full py-1 px-3">{category}</h3>
                            <h3 className="font-semibold flex items-center justify-center gap-2"> <StarFill className='text-orange-300' />{rating} reviews </h3>
                        </div>
                        <p className="text-xl text-[#75757b]">By <span className='font-semibold text-black'>{instructor}</span> </p>
                        <div className="flex items-center justify-between mt-5">
                            <button className=' flex items-center justify-center gap-2 py-1 px-5 text-xl font-semibold bg-[#5751e1] text-white rounded-full' >Enroll Now <ArrowRight /></button>
                            <h2 className="text-4xl text-[#5751e1] font-semibold">${price}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CArdDetail;