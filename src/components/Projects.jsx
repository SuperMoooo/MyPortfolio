import ProjectCard from './ProjectCard';
import planetWebImg from '../assets/projectsImg/planetWebImg.webp';
import blackJackGame from '../assets/projectsImg/blackJackGame.webp';
import kubicDeal from '../assets/projectsImg/kubicDeal.webp';
import slimeGame from '../assets/projectsImg/slimeGame.webp';
import rockPaperScissors from '../assets/projectsImg/rockPaperScissors.webp';
import ticTacToe from '../assets/projectsImg/ticTacToe.webp';
import portfolio from '../assets/projectsImg/portfolio.webp';
import nbaSite from '../assets/projectsImg/nbasite.webp';
export default function Projects() {
    return (
        <>
            <section className="flex items-center justify-center flex-col space-y-12 w-full">
                <div className="flex gap-6 items-center justify-center">
                    <hr className="w-20 h-1 border-white border-1 hrGradient  md:w-48 lg:w-72" />
                    <h1 className="uppercase text-3xl  italic">Projects</h1>
                    <hr className="w-20 h-1 border-white border-1 hrGradient2 md:w-48 lg:w-72" />
                </div>

                <ul className="grid grid-cols-1 gap-14 w-full px-8 md:grid-cols-3 md:gap-5 md:px-10 lg:grid-cols-4 grid-flow-row">
                    <ProjectCard
                        img={portfolio}
                        liveLink="https://supermoooo.github.io/MyPortfolio/"
                        gitHubTrue={true}
                        gitHubLink="https://github.com/SuperMoooo/MyPortfolio"
                        title="My Portfolio"
                        desc="The site you are on right now"
                        techs={['React', 'Tailwind']}
                    />
                    <ProjectCard
                        img={kubicDeal}
                        liveLink="https://kubicdeal.pt/"
                        gitHubTrue={false}
                        gitHubLink=""
                        title="Kubic Deal"
                        desc="A website made for a client for the start of the company"
                        techs={['HTML', 'CSS', 'JavaScript']}
                    />
                    <ProjectCard
                        img={planetWebImg}
                        liveLink="https://supermoooo.github.io/planetsWebSite/index.html"
                        gitHubTrue={true}
                        gitHubLink="https://github.com/SuperMoooo/planetsWebSite"
                        title="Planet Website"
                        desc="A website with some information about the planets of our galaxy"
                        techs={['HTML', 'CSS', 'JavaScript']}
                    />

                    <ProjectCard
                        img={slimeGame}
                        liveLink="https://supermo.itch.io/slime-game"
                        gitHubTrue={false}
                        gitHubLink=""
                        title="Slime Game"
                        desc="A game made for the final project of the course"
                        techs={['GDevelop']}
                    />
                    <ProjectCard
                        img={rockPaperScissors}
                        liveLink="https://supermoooo.github.io/rockPaperScissors/"
                        gitHubTrue={true}
                        gitHubLink="https://github.com/SuperMoooo/rockPaperScissors"
                        title="Rock Paper Scissors"
                        desc="Rock Paper Scissors game vs computer"
                        techs={['HTML', 'CSS', 'JavaScript']}
                    />

                    <ProjectCard
                        img={ticTacToe}
                        liveLink="https://supermoooo.github.io/ticTacToe/"
                        gitHubTrue={true}
                        gitHubLink="https://github.com/SuperMoooo/ticTacToe"
                        title="Tic Tac Toe Game"
                        desc="Tic Tac Toe game vs computer"
                        techs={['HTML', 'CSS', 'JavaScript']}
                    />

                    <ProjectCard
                        img={blackJackGame}
                        liveLink="https://supermoooo.github.io/blackJackGame/"
                        gitHubTrue={true}
                        gitHubLink="https://github.com/SuperMoooo/blackJackGame"
                        title="BlackJack Game"
                        desc="BlackJack game with infinite money and no split cards"
                        techs={['HTML', 'CSS', 'JavaScript']}
                    />
                    <ProjectCard
                        img={nbaSite}
                        liveLink="https://supermoooo.github.io/NBA-SITE/"
                        gitHubTrue={true}
                        gitHubLink="https://github.com/SuperMoooo/NBA-SITE"
                        title="NBA teams Website"
                        desc="A website with some information about the teams of the NBA"
                        techs={['React, Tailwind, API']}
                    />
                </ul>
            </section>
        </>
    );
}
