import React from 'react';
import Jobs from './Jobs';
import dualinfor from '../assets/companyImg/dualinfor.webp';
import algoritmo from '../assets/companyImg/algoritmo.webp';
import mafraTv from '../assets/companyImg/mafraTv.webp';

export default function WorkExperience() {
    return (
        <section className="mt-20 flex flex-col items-center ">
            <div className="flex gap-6 items-center justify-center">
                <hr className="w-16 h-1 border-white border-1 hrGradient  md:w-48 lg:w-72" />
                <h1 className="uppercase md:text-3xl text-xl italic">
                    Work Experience
                </h1>
                <hr className="w-16 h-1 border-white border-1 hrGradient2 md:w-48 lg:w-72" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-12 w-full m-20">
                <Jobs
                    jobTitle={'Trainee'}
                    date={'Jan 2024 - May 2024'}
                    company={'Dualinfor Hito Innovation'}
                    img={dualinfor}
                />
                <Jobs
                    jobTitle={'Trainee'}
                    date={'Fev 2022 - Apr 2022'}
                    company={'Algoritmo, Soluções Informáticas'}
                    img={algoritmo}
                />
                <Jobs
                    jobTitle={'Trainee'}
                    date={'Apr 2021 - May 2021'}
                    company={'MAFRA TV'}
                    img={mafraTv}
                />
            </div>
        </section>
    );
}
