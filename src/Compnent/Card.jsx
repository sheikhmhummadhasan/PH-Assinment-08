import { ArrowRight, StarFill } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({ e }) => {
    if (!e) {
        return null
    }
    const { category, image, description, level, rating, duration, instructor, title, id } = e;
    // console.log(e)
    return (
        <div>
            <div className="p-5 mt-2 sm:p-6 md:p-7 border border-[#6D6C80] rounded-xl shadow-md bg-white 
                hover:shadow-lg transition duration-300">

                {/* Image */}
                <Image
                    className="mx-auto mb-4 w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
                    src={image}
                    alt="card image"
                    height={200}
                    width={400}
                />

                {/* Top info */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 my-2">
                    <h3 className="font-semibold bg-gray-200 rounded-full py-1 px-3 w-fit text-sm sm:text-base">
                        {category}
                    </h3>

                    <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <StarFill className="text-orange-300" />
                        {rating} reviews
                    </h3>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">
                    {title}
                </h2>

                {/* Instructor */}
                <p className="text-sm sm:text-base text-[#75757b] mt-1">
                    By <span className="font-semibold text-black">{instructor}</span>
                </p>

                {/* Button */}
                <div className="flex justify-end mt-4">
                    <Link
                        className="flex items-center gap-2 py-2 px-4 text-sm sm:text-base font-semibold 
                       bg-amber-500 border border-black rounded-full hover:bg-amber-600 transition"
                        href={`/${id}`}
                    >
                        See Details <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;