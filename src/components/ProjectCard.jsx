export default function ProjectCard({
    img,
    liveLink,
    gitHubTrue,
    gitHubLink,
    title,
    desc,
    techs,
}) {
    const techsList = techs;
    return (
        <li className="flex flex-col text-left justify-center gap-8 border transition-all  border-zinc-900 rounded-lg shadow hover:bg-zinc-800 bg-zinc-900">
            <img
                className="w-full h-full object-cover object-center rounded-t-lg aspect-video "
                src={img}
                alt={img}
                rel="preload"
                loading="lazy"
            />
            <section className="flex flex-col text-left justify-center gap-6 p-4 pt-0">
                <p className="uppercase italic underline underline-offset-4 text-[#fed7aa] text-xl">
                    {title}
                </p>

                <p className="uppercase">{desc}</p>
                <div className="flex items-end justify-between gap-4 h-full">
                    <div className="flex items-start justify-end flex-col gap-2 ">
                        <a
                            className="hover:underline  font-bold text-white bg-red-700 uppercase border border-red-500 rounded-md p-1 px-2"
                            href={liveLink}
                            target="_blank"
                        >
                            Live
                        </a>
                        <a
                            className={`hover:underline hover:text-white font-bold rounded-md p-1 px-2 border bg-gray-800 border-gray-800 text-white uppercase ${
                                gitHubTrue ? '' : 'hidden'
                            }`}
                            href={gitHubLink}
                            target="_blank"
                        >
                            Github
                        </a>
                    </div>
                    <ul className="flex flex-col text-right items-end gap-2 text-[#fed7aa]">
                        {techsList.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </li>
    );
}
