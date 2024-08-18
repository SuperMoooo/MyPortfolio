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
                    <li>
                        <a
                            href="https://www.linkedin.com/in/andr%C3%A9-montoito-1541ab2b3/"
                            target="_blank"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#FED7AA"
                                className="w-10 h-10 hover:scale-110 transition duration-200"
                            >
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
