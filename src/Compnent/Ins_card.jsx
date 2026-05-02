import { LogoFacebook, LogoLinkedin, StarFill } from '@gravity-ui/icons';
import Image from 'next/image';
import React from 'react';

const Ins_card = ({ e }) => {
    if (!e) {
        return null;
    }
    console.log(e)
    const { name, image, rating, position } = e;

    return (
        <div>
            <div className="p-5 flex items-center">
                <div className="">
                    <Image src={image} alt='image' height={40} width={200}></Image>
                </div>
                <div className="">
                    <h3 className="text-3xl font-semibold">{name}</h3>
                    <p className='text-[#5751e1]'>{position}</p>
                    <p className='text-[#7F7E97] flex items-center gap-2'><StarFill className='text-amber-500'></StarFill> ({rating} Rating)</p>
                    <div className="flex items-center gap-3"><LogoLinkedin className='text-3xl text-[#7f7e97]' /> <LogoFacebook className='text-3xl text-[#7f7e97]' /></div>
                </div>
            </div>
        </div>
    );
};

export default Ins_card;