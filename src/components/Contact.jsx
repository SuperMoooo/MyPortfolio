export default function Contact() {
    return (
        <section className="mt-20 flex items-center justify-center flex-col">
            <div className="flex gap-6 items-center justify-center mb-10">
                <hr className="w-20 h-1 border-white border-1 hrGradient  md:w-48 lg:w-72" />
                <h1 className="uppercase text-4xl italic">About me</h1>
                <hr className="w-20 h-1 border-white border-1 hrGradient2 md:w-48 lg:w-72" />
            </div>
            <div className=" bg-zinc-900 p-4 border  border-zinc-900 rounded-lg shadow space-y-2 flex items-center justify-center flex-col w-80 md:w-[46rem] lg:w-[60rem] h-48">
                <p className="text-xl italic text-center text-[#fed7aa] md:text-2xl lg:text-3xl">
                    If you wanna know more about me, hire me and lets talk ;D
                </p>
            </div>
        </section>
    );
}
