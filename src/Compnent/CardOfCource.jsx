
import React from 'react';
import Card from './Card';

const CardOfCource = async () => {
    const res = await fetch('http://localhost:5000/courses',{cache: "no-store"});
    const prom = await res.json()
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-11/12 mx-auto">
                <div className="text-center flex flex-col items-center justify-center gap-2">
                    <div className="bg-[#efeefe] text-[#5751e7] rounded-full py-2 px-5 text-xl sm:text-sm">
                        Top Class Courses
                    </div>
                    <h1 className="text-5xl font-bold">Explore Our Worlds Best Courses</h1>
                    <p className='text-[#6D6C80] '>When known printer took a galley of type scrambl edmake</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {
                        prom.map(e => {
                            return(

                                <Card key={e.id} e={e}></Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CardOfCource;