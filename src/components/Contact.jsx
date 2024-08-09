import Title from './Title';

export default function Contact() {
    return (
        <section className="mt-40 flex items-center justify-center flex-col space-y-12 md:px-24 px-6 lg:relative">
            <Title title="Contact" />
            <div className="p-4 bg-zinc-900 rounded-lg shadow flex z-10 items-center justify-center flex-col w-70 md:w-[42rem] lg:w-[56rem] h-36">
                <div className="text-xl  text-center text-[#fed7aa] md:text-2xl lg:text-3xl grid grid-rows-2 gap-4 place-items-center flex-col ">
                    <div className="flex items-center justify-center flex-row space-x-3">
                        <picture className="h-full flex items-center justify-center md:mt-[0.3rem] mt-[0.2rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="#fed7aa"
                                viewBox="0 0 24 24"
                                className="sm:w-6 sm:h-6 w-4 h-4"
                            >
                                <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                            </svg>
                        </picture>
                        <p>andremontoito@gmail.com</p>
                    </div>
                    <div className="flex items-center justify-center flex-row space-x-3">
                        <picture className=" flex items-center justify-center w-full h-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="#fed7aa"
                                viewBox="0 0 24 24"
                                className="sm:w-6 sm:h-6 w-4 h-4"
                            >
                                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
                            </svg>
                        </picture>
                        <p>Portugal</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
