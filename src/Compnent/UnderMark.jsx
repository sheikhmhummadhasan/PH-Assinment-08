import Image from 'next/image';
import React from 'react';

const UnderMark = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 p-6 sm:p-8 lg:p-10 my-10 border rounded-2xl">

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/under-marq.png"
                        alt="under marq"
                        width={500}
                        height={400}
                        className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto"
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 text-center lg:text-left">

                    <div className="bg-[#efeefe] text-[#5751e1] rounded-full py-2 px-5 text-xs sm:text-sm md:text-base">
                        Trending Categories
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                        Thousand Of Top{" "}
                        <span className="bg-[#ffce2c] px-2 rounded">
                            Courses
                        </span>{" "}
                        Now in One Place
                    </h2>

                    <p className="text-sm sm:text-base text-[#807c7c] w-full lg:w-[90%]">
                        Groove’s intuitive shared inbox makes it easy for team members to organize,
                        prioritize and. In this episode of the Smashing Pod we’re talking about Web Platform Baseline.
                    </p>

                    {/* Points */}
                    <div className="space-y-3">

                        <h1 className="flex items-center gap-3 text-sm sm:text-base">
                            <Image src="/right-arrow.png" alt="arrow" width={20} height={20} />
                            The Most World Class Instructors.
                        </h1>

                        <h1 className="flex items-center gap-3 text-sm sm:text-base">
                            <Image src="/right-arrow.png" alt="arrow" width={20} height={20} />
                            Access Your Class anywhere.
                        </h1>

                        <h1 className="flex items-center gap-3 text-sm sm:text-base">
                            <Image src="/right-arrow.png" alt="arrow" width={20} height={20} />
                            Flexible Course Plan.
                        </h1>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default UnderMark;