import React from 'react';
import Jobs from './Jobs';
import dualinfor from '../assets/companyImg/dualinfor.webp';
import algoritmo from '../assets/companyImg/algoritmo.webp';
import mafraTv from '../assets/companyImg/mafraTv.webp';
import pontinhos from '../assets/companyImg/pontinhos.webp';
import Title from './Title';

export default function WorkExperience() {
    const jobs = [
        {
            company: 'Dualinfor',
            position: 'Full-Stack Developer (Trainee)',
            date: '2024',
            img: dualinfor,
        },
        {
            company: 'Algoritmo',
            position: 'Front-end Stuff (Trainee)',
            date: '2022',
            img: algoritmo,
        },
        {
            company: 'Lacinhos & Pontinhos',
            position: 'Front-end Developer (Trainee)',
            date: '2021',
            img: pontinhos,
        },
        {
            company: 'Mafra TV',
            position: 'Trainee',
            date: '2021',
            img: mafraTv,
        },
    ];
    return (
        <section className="mt-20 flex flex-col items-center ">
            <Title title="Work Experience" />
            <div
                style={{
                    gridTemplateRows: `repeat(${jobs.length}, minmax(0, 1fr))`,
                }}
                className={`grid sm:grid-cols-2 grid-cols-1 w-full sm:px-0 px-6  h-full place-items-center sm:container sm:mx-auto`}
            >
                {jobs.map((job, index) => (
                    <Jobs
                        key={`${job}-${index}`}
                        company={job.company}
                        position={job.position}
                        date={job.date}
                        img={job.img}
                        side={index % 2 === 0 ? 0 : 1}
                        rowStart={index + 1}
                    />
                ))}
            </div>
        </section>
    );
}
