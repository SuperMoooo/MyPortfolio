export default function Contact() {
    return (
        <section className="mt-20 flex items-center justify-center flex-col">
            <div className="flex gap-6 items-center justify-center mb-10">
                <hr className="w-20 h-1 border-white border-1 hrGradient  md:w-48 lg:w-72" />
                <h1 className="uppercase text-3xl italic">Contact</h1>
                <hr className="w-20 h-1 border-white border-1 hrGradient2 md:w-48 lg:w-72" />
            </div>
            <div className=" border p-4 border-zinc-900 rounded-lg shadow flex items-center justify-center flex-col w-70 md:w-[42rem] lg:w-[56rem] h-36">
                <p className="text-xl  text-center text-[#fed7aa] md:text-2xl lg:text-3xl">
                    andremontoito@gmail.com
                </p>
            </div>
        </section>
    );
}
