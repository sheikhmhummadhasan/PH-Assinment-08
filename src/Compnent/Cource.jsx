import React from 'react';
import CourceCard from './CourceCard';

const Cource = () => {
    const cource = [
        {
            id: 1,
            image: "/c1.png",
            name: "Graphic Design",
            que: 22
        },
        {
            id: 2,
            image: "/c2.png",
            name: "Finance",
            que: 4
        },
        {
            id: 3,
            image: "/c3.png",
            name: "Development",
            que: 29
        },
        {
            id: 4,
            image: "/c4.png",
            name: "Digital Marketing",
            que: 23
        },
        {
            id: 5,
            image: "/c5.png",
            name: "Life Style",
            que: 34
        },
        {
            id: 6,
            image: "/c6.png",
            name: "Management",
            que: 19
        },
    ]
    return (
        <div>
            <div className="w-11/12 mx-auto flex flex-col items-center justify-center gap-6 py-6 md:py-10 lg:py-14">

                {/* Header */}
                <div className="flex flex-col justify-center items-center gap-2 text-center max-w-xl">
                    <div className="bg-[#efeefe] text-[#5751e7] rounded-full py-2 px-5 text-xs sm:text-sm">
                        Trending Categories
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        Top Category We Have
                    </h2>

                    <p className="text-[#6d6e70] text-sm sm:text-base">
                        when known printer took a galley of type scrambled make
                    </p>
                </div>

                {/* Cards */}
                <div className="bg-[#f1f7f9] rounded-2xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">

                    {cource.map((e) => (
                        <CourceCard key={e.id} e={e} />
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Cource;