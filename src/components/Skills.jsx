import SkillCard from './SkillCard';
import htmlImg from '../assets/techsImg/html.webp';
import cssImg from '../assets/techsImg/css.webp';
import jsImg from '../assets/techsImg/js.webp';
import reactImg from '../assets/techsImg/react.webp';
import tailwindImg from '../assets/techsImg/tailwind.webp';
import pythonImg from '../assets/techsImg/python.webp';
import cSharpImg from '../assets/techsImg/cSharp.webp';
import nodeImg from '../assets/techsImg/node.webp';
import sqlImg from '../assets/techsImg/sql.webp';
import vsCodeImg from '../assets/techsImg/vsCode.webp';
import vsImg from '../assets/techsImg/vs.webp';
import aiImg from '../assets/techsImg/ai.webp';
import prImg from '../assets/techsImg/pr.webp';
import psImg from '../assets/techsImg/ps.webp';
import gitImg from '../assets/techsImg/git.webp';
import mui from '../assets/techsImg/mui.webp';
import redux from '../assets/techsImg/redux.webp';
import nextjs from '../assets/techsImg/nextjs.webp';
import typeScript from '../assets/techsImg/typeScript.webp';
import Title from './Title';
export default function Skills() {
    const techs = {
        react: { name: 'React', src: reactImg },
        html: { name: 'HTML', src: htmlImg },
        css: { name: 'CSS', src: cssImg },
        js: { name: 'JavaScript', src: jsImg },
        tailwind: { name: 'Tailwind', src: tailwindImg },
        mui: { name: 'MUI', src: mui },
        redux: { name: 'Redux TK', src: redux },
        nextjs: { name: 'Next.JS', src: nextjs },
        typeScript: { name: 'TypeScript', src: typeScript },
        node: { name: 'Node.JS', src: nodeImg },
        sql: { name: 'SQL', src: sqlImg },
        python: { name: 'Python', src: pythonImg },
        cSharp: { name: 'C#', src: cSharpImg },
        vsCode: { name: 'VS Code', src: vsCodeImg },
        vs: { name: 'VS', src: vsImg },
        ai: { name: 'Illustrator', src: aiImg },
        pr: { name: 'Premiere', src: prImg },
        ps: { name: 'Photoshop', src: psImg },
        git: { name: 'Git/GitHub', src: gitImg },
    };

    return (
        <>
            <section className="mt-40 flex flex-col items-center space-y-12 md:px-24 px-6 lg:relative">
                <Title title="Skills" />
                <ul className="grid grid-cols-2 sm:gap-6 gap-10 md:grid-cols-3 md:gap-12 lg:grid-cols-5 lg:gap-14  place-items-center items-center z-10 mt-10">
                    {Object.keys(techs).map((tech) => (
                        <SkillCard
                            key={tech}
                            techImg={techs[tech].src}
                            name={techs[tech].name}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
}
