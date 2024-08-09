import React from 'react';

export default function Title({ title }) {
    return (
        <div className="grid w-full items-center lg:place-items-center ">
            <h1 className="uppercase lg:absolute text-3xl sm:text-5xl md:text-7xl lg:text-[18rem] text-left outlineText lg:left-1/2  lg:top-[-8rem] lg:-translate-x-1/2">
                {title}
            </h1>
        </div>
    );
}
