export default function SkillCard({ techImg, name }) {
    return (
        <li className=" bg-zinc-900  max-w-sm  border border-zinc-900  rounded-lg p-2 shadow space-y-2 flex items-center justify-center flex-col w-40 h-48">
            <img className=" w-24" src={techImg} alt={techImg} rel="preload" />
            <p className=" italic text-2xl text-[#fed7aa] text-center">
                {name}
            </p>
        </li>
    );
}
