import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-5">
                <h1 className="text-7xl font-bold text-[#5751e1]">404</h1>

                <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mt-2 max-w-md">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>

                <Link href="/">
                    <button className="mt-6 px-6 py-3 bg-[#5751e1] text-white rounded-lg hover:bg-indigo-700 transition">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;