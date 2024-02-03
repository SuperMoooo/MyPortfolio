import githubLogo from '../assets/github-icon.svg';
import instagramLogo from '../assets/instagram-icon.svg';
export default function NavBar() {
    return (
        <>
            <div className="flex items-center justify-center w-full p-5 ">
                <ul className="flex items-center justify-center gap-8 flex-1">
                    <li>
                        <a
                            href="https://www.instagram.com/andre_montoito/"
                            target="_blank"
                        >
                            <img
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                                src={instagramLogo}
                                alt="instagram icon"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SuperMoooo" target="_blank">
                            <img
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                                src={githubLogo}
                                alt="github icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
