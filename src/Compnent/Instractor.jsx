import React from 'react';
import Ins_card from './Ins_card';

const Instractor = () => {
    const instrctor = [
        {
            id: 1,
            name: "Mark",
            position: "UI/UX Designer",
            rating: 4.6,
            image: "/inst-1.png"
        },
        {
            id: 2,
            name: "Sarah",
            position: "Frontend Developer",
            rating: 4.8,
            image: "/inst-2.png"
        },
        {
            id: 3,
            name: "John",
            position: "Backend Developer",
            rating: 4.7,
            image: "/inst-3.png"
        },
        {
            id: 4,
            name: "Emily",
            position: "Full Stack Developer",
            rating: 4.9,
            image: "/inst-4.png"
        }
    ];
    return (
        <div>
            <div className="flex flex-col lg:flex-row border border-[#6d6c80] rounded-2xl p-5 my-5 mt-15 items-center justify-between w-11/12 mx-auto gap-8">

                <div className="flex items-center lg:items-start text-center lg:text-left flex-col gap-3 w-full lg:w-1/2">

                    <div className="bg-[#efeefe] text-[#5751e7] rounded-full py-2 px-5 text-sm md:text-base">
                        Skilled Introduce
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Our Top Class & Expert Instructors in One Place
                    </h1>

                    <p className="text-[#6D6C80] text-sm md:text-base">
                        when an unknown printer took a galley of type and scrambled makespecimen book has survived not only five centuries
                    </p>

                    <button className="flex items-center justify-center gap-2 py-2 md:py-3 px-5 md:px-6 rounded-full font-semibold text-white bg-[#5751e1]">
                        See All Instructor
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
                    {
                        instrctor.map(e => (
                            <Ins_card key={e.id} e={e}></Ins_card>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Instractor;