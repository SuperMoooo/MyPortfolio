import FirstThingUserSee from './components/FirstThingUserSee';
import NavBar from './components/NavBar';
import ScrollDown from './components/ScrollDown';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WorkExperience from './components/WorkExperience';
import { useState } from 'react';
import Modal from './components/Modal';

export default function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [projectsToSee, setProjectsToSee] = useState([
        'react',
        'react native',
        'next.js',
    ]);

    const handleOpenModal = () => {
        setModalIsOpen((prev) => !prev);
    };

    const handleAddToSee = (values, operation) => {
        if (operation === true) {
            setProjectsToSee((prev) => [
                ...prev,
                ...values.filter((value) => !prev.includes(value)),
            ]);
        } else {
            setProjectsToSee((prev) =>
                prev.filter((tech) => !values.includes(tech))
            );
        }
    };
    return (
        <>
            <div className="scroll-smooth bgCool relative text-white bg-gradient-to-b from-[#161616] to-[#080808] tracking-widest font-extralight  h-full text-pretty ">
                <section className="overflow-x-hidden ">
                    <NavBar />
                    <FirstThingUserSee />
                    <ScrollDown />
                </section>
                <main>
                    <Projects
                        openModal={handleOpenModal}
                        projectsToSee={projectsToSee}
                    />
                    <Skills />
                    <WorkExperience />
                    <Contact />
                    <Footer />
                    <Modal
                        openModal={modalIsOpen}
                        handleOpenModal={handleOpenModal}
                        setProjectsToSee={setProjectsToSee}
                        handleAddToSee={handleAddToSee}
                    />
                </main>
            </div>
        </>
    );
}
