import React from 'react';

export default function Jobs({ date, jobTitle, company, img }) {
    return (
        <li className="bg-zinc-900 p-0 border  border-zinc-900 rounded-lg shadow space-y-2 flex items-center justify-center flex-row w-[20rem] md:w-[36rem] lg:w-[40rem] h-48">
            <div className="flex flex-row md:w-60 w-full items-start justify-start ">
                <img
                    src={img}
                    alt={img}
                    className="md:w-48 md:h-48 w-60 object-fill h-48  rounded-s-lg"
                    rel="preload"
                />
            </div>
            <div className="flex flex-col w-full  justify-between items-center p-6">
                <p className="lg:text-2xl text-lg italic text-center mb-4">
                    {company}
                </p>
                <p className=" italic md:text-1xl text-[14px] text-[#fed7aa] text-center mb-1">
                    {jobTitle}
                </p>
                <p className=" italic md:text-1xl text-[14px] text-[#fed7aa] text-center">
                    {date}
                </p>
            </div>
        </li>
    );
}
