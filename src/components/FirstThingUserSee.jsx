import cv from '../assets/CV_AndreMontoito.pdf';
import bgAsset1 from '../assets/bg-asset1.png';
export default function FirstThingUserSee() {
    return (
        <>
            <div className="relative flex items-center justify-center w-full mt-60 ">
                <div className="flex items-center justify-center w-full flex-col ">
                    <p className="uppercase text-3xl transition translateTextNoColor">
                        André Montoito
                    </p>
                    <p className="uppercase text-6xl transition translateText">
                        Programmer
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <button className="border-2 uppercase text-[#fed7aa] text-2xl mt-3 w-60 border-[#fed7aa] p-2 rounded-2xl transition btnAnimantion ">
                            <a href={cv} download>
                                Resume
                            </a>
                        </button>
                    </div>
                </div>

                <span className="absolute animate-pulse top-[-210px] left-[-65px] lg:left-[-135px]">
                    {' '}
                    <img
                        className="w-32 h-32 lg:w-64 lg:h-64"
                        src={bgAsset1}
                        alt="assetsBg"
                        rel="preload"
                    />
                </span>

                <span className="absolute animate-pulse top-[280px] right-[-65px] lg:right-[-135px]">
                    {' '}
                    <img
                        className="w-32 h-32 lg:w-64 lg:h-64 "
                        src={bgAsset1}
                        alt="assetsBg"
                        rel="preload"
                    />
                </span>
            </div>
        </>
    );
}
