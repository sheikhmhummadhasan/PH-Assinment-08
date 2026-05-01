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
            <div className="flex items-center justify-center bg-gray-50 px-4 py-10">
                <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] 
                    p-5 sm:p-7 border border-[#6D6C80] rounded-xl shadow-md bg-white">

                    <Image
                        className="mx-auto mb-4 w-16 sm:w-20 md:w-24"
                        src={image}
                        alt="card image"
                        height={100}
                        width={100}
                    />

                    <div className="flex items-center justify-between my-2">
                        <h3 className="font-semibold bg-gray-200 rounded-full py-1 px-3 text-sm sm:text-base">
                            {name}
                        </h3>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold break-words">
                        {email}
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-[#75757b]">
                        {updatedAt}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;