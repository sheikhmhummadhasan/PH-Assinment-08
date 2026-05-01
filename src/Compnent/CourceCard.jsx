import Image from 'next/image';
import React from 'react';

const CourceCard = ({ e }) => {
    if (!e) return null;

    const { image, name, que } = e;
    return (
        <div>
            <div className="flex flex-col border border-[#525858cc] rounded-2xl p-5 items-center justify-center gap-2">
                <Image src={image} alt='image' height={150} width={150}></Image>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className='text-[#6d6e70]'>({que})</p>
            </div>
        </div>
    );
};

export default CourceCard;