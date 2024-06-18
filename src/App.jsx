import FirstThingUserSee from './components/FirstThingUserSee';
import NavBar from './components/NavBar';
import ScrollDown from './components/ScrollDown';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';

export default function App() {
    return (
        <>
            <div className="scroll-smooth text-white bg-gradient-to-b from-[#161616] to-[#080808] tracking-widest font-extralight  h-full text-pretty ">
                <section className="overflow-x-hidden">
                    <NavBar />
                    <FirstThingUserSee />
                    <ScrollDown />
                </section>
                <Projects />
                <Skills />
                <WorkExperience />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
