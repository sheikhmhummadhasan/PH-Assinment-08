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

    if (!card) {
        return null
    }
    const { category, price, image, description, level, rating, duration, instructor, title, id } = card;
    return (
        <div>
            <div className="w-11/12 mx-auto mt-10 md:mt-20">
                <div className="p-5 md:p-7 flex flex-col lg:flex-row 
                    items-center gap-6 border border-[#6D6C80] rounded-xl shadow-md">

                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            className="mx-auto rounded-lg w-full h-auto object-cover"
                            src={image}
                            alt="card image"
                            height={300}
                            width={500}
                        />
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-2 md:space-y-3">

                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                            {title}
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-[#75757b]">
                            {description}
                        </p>

                        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                            Level: {level}
                        </h2>

                        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                            Duration: {duration}
                        </h2>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <h3 className="font-semibold bg-gray-200 rounded-full py-1 px-3 w-fit">
                                {category}
                            </h3>

                            <h3 className="font-semibold flex items-center gap-2">
                                <StarFill className="text-orange-300" />
                                {rating} reviews
                            </h3>
                        </div>

                        <p className="text-sm sm:text-base text-[#75757b]">
                            By <span className="font-semibold text-black">{instructor}</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">

                            <button className="flex items-center gap-2 py-2 px-5 text-sm sm:text-base md:text-lg font-semibold bg-[#5751e1] text-white rounded-full hover:bg-[#4640c9] transition">
                                Enroll Now <ArrowRight />
                            </button>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#5751e1] font-semibold">
                                ${price}
                            </h2>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CArdDetail;