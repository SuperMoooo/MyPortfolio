import React from 'react';

export default function Title({ title }) {
    return (
        <div className="flex gap-6 items-center justify-center mb-10">
            <hr className="w-20 h-1 border-white border-1 hrGradient  md:w-48 lg:w-72" />
            <h1 className="uppercase text-3xl text-center  italic">{title}</h1>
            <hr className="w-20 h-1 border-white border-1 hrGradient2 md:w-48 lg:w-72" />
        </div>
    );
}
