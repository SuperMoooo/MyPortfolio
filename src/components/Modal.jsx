import React from 'react';

export default function Modal({ openModal, handleOpenModal, handleAddToSee }) {
    return (
        <section
            className={`${
                openModal ? 'flex' : 'hidden'
            } fixed left-0 top-0 w-full h-dvh bg-black/90 items-center justify-center z-50`}
        >
            <div className="p-4 bg-zinc-900 rounded-lg grid grid-rows-4 gap-4 *:text-lg w-3/4 sm:w-3/4 lg:w-1/4  md:w-2/4 ">
                <div className="flex justify-between mb-4">
                    <h1 className="text-center text-xl font-bold">Techs:</h1>
                    <button
                        onClick={handleOpenModal}
                        className="uppercase bg-zinc-800 hover:bg-zinc-700 transition-colors duration-300 px-2 rounded-md"
                    >
                        close
                    </button>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                    <h1>React / Next.js</h1>
                    <input
                        type="checkbox"
                        defaultChecked
                        className="checkbox"
                        onClick={(e) =>
                            handleAddToSee(
                                ['react', 'react native', 'next.js'],
                                e.target.checked
                            )
                        }
                    />
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                    <h1>HTML / CSS / JS</h1>
                    <input
                        type="checkbox"
                        className="checkbox"
                        onClick={(e) =>
                            handleAddToSee(['html'], e.target.checked)
                        }
                    />
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-4">
                    <h1>Other</h1>
                    <input
                        type="checkbox"
                        className="checkbox"
                        onClick={(e) =>
                            handleAddToSee(
                                ['gdevelop', 'unreal engine 5'],
                                e.target.checked
                            )
                        }
                    />
                </div>
            </div>
        </section>
    );
}
