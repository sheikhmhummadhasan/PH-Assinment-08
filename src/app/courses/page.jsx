import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-red-500">
                        Not Uploaded 
                    </h1>

                    <p className="text-gray-600 text-lg">
                        This content is not uploaded yet.
                    </p>

                    <Link  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" href={'/'}>Go Back</Link>
                </div>
            </div>
        </div>
    );
};

export default page;