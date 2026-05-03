
import React from 'react';
import Card from './Card';
export const dynamic = 'force-dynamic'
const CardOfCource = async () => {
    const res = await fetch(`${process.env.BETTER_AUTH_URL}/db.json`, { cache: "no-store" });
    const prom = await res.json()
    console.log(prom)
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        prom.courses.map(e => (
                            <Card key={e.id} e={e} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CardOfCource;