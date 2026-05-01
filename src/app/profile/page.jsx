'use client'
import { authClient } from '@/lib/auth-client';
import { ArrowRight, StarFill } from '@gravity-ui/icons';
import { Skeleton } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession()
    console.log(session)
    const updatedAt = session?.updatedAt;
    const name = session?.user?.name;
    const image = session?.user?.image;
    const email = session?.user?.email;
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-50">
                <div className="p-7 h-full mt-15 border border-[#6D6C80] rounded-xl">
                    <Image className='mx-auto mb-4' src={image} alt='card image' height={50} width={100}></Image>
                    <div className="flex items-center justify-between my-2">
                        <h3 className="font-semibold bg-gray-200 rounded-full py-1 px-3">{name}</h3>
                    </div>
                    <h2 className="text-3xl font-semibold">{email}</h2>
                    <p className="text-xl text-[#75757b]">{updatedAt} </p>
                   
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;