import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#5751e1] border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loading;