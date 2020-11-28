import React, {
    useEffect,
} from 'react';

import Fade from 'react-reveal/Fade';

import SourceCode from '../icons/source-code.png';
import Durango from '../icons/durango.png';
import PropCentral from '../icons/propcentral.png';
import ServierBar from '../icons/servier-bar.png';
import Supreme from '../icons/supreme.jpg';
import Mastermind from '../icons/brain.png';
import Memory from '../icons/dice.png';
import Party from '../icons/party.png';
import CapitalCities from '../icons/city.png';
import OldPortfolio from '../icons/old-portfolio.png';
import Packages from '../icons/packaging.png';

/* Context */
/* import MainContext from '../context/mainContext';
import themes from '../themes'; */

const Projects = ({ history }) => {
    useEffect(() => {
        let revealTimeout = setTimeout(() => {
            callback();
        }, 1000);

        let callback = () => {
            const maskSize = 300;
            const elements = Array.from(document.querySelectorAll('.reveal'));

            document.addEventListener('mousemove', (event) => {
                elements.forEach((element) => {
                    const { top, left } = element.getBoundingClientRect();
                    const x = event.pageX - left - maskSize / 2;
                    const y = event.pageY - top - maskSize / 2;

                    element.style.webkitMaskPosition = `${x}px ${y}px`;
                    element.style.webkitMaskSize = `${maskSize}px ${maskSize}px`;
                });
            });
        }

        return () => {
            clearTimeout(revealTimeout);
        }
    }, [])

    return (
        <Fade bottom cascade>
            <div
                className="projectsGrid"
            >
                <button
                    className="backButtonProjects"
                    onClick={() => { history.push('/portfolio') }}
                >
                    Back
            </button>
                <div className="pageTitle pageTitleProjects">
                    <p>Projects</p>
                    <img src={SourceCode} alt="icon" />
                </div>
                <div className="projects-mastermind tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/Mastermind/', '_blank');
                    }}
                >
                    <img
                        src={Mastermind}
                        className="smallIcon"
                        alt="mastermind"
                    />
                </div>
                <div className="projects-memory tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/MemoryGame/', '_blank');
                    }}
                >
                    <img
                        src={Memory}
                        className="smallIcon"
                        alt="memory game"
                    />
                </div>
                <div className="projects-capitalcities tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/GlavniGradovi/', '_blank');
                    }}
                >
                    <img
                        src={CapitalCities}
                        className="smallIcon"
                        alt="capital cities"
                    />
                </div>
                <div className="projects-10010 tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/10010/', '_blank');
                    }}
                >
                    <img
                        src={Party}
                        className="smallIcon"
                        alt="party invitation"
                    />
                </div>
                <div className="projects-old-portfolio tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/portfolio-old/', '_blank');
                    }}
                >
                    <img
                        src={OldPortfolio}
                        className="smallIcon"
                        alt="archive old portfolio"
                    />
                </div>
                <div className="projects-package-picker tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/package-picker/', '_blank');
                    }}
                >
                    <img
                        src={Packages}
                        className="smallIcon"
                        alt="package-picker"
                    />
                </div>
                <div className="projects-propcentral tile reveal medium acrylic"
                    onClick={() => {
                        window.open('https://www.prop-central.com/', '_blank');
                    }}
                >
                    <p className="tileTitle">PropCentral</p>
                    <img
                        src={PropCentral}
                        className="centerIcon"
                        alt="propcentral"
                    />
                </div>
                <div className="projects-supreme tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/fitness-supreme/', '_blank');
                    }}
                >
                    <img
                        src={Supreme}
                        className="smallIcon"
                        alt="fitness-supreme"
                    />
                </div>
                <div className="projects-neon tile reveal wide acrylic"
                    onClick={() => {
                        window.open('https://mikacinc.github.io/Neon-React/', '_blank');
                    }}
                >
                    <p className="tileTitle">Project NEON</p>
                    <div className="tileContent">
                        <Fade cascade>
                            <p className="tileText"> {'//NEON/'} </p>
                        </Fade>
                    </div>
                </div>
                <div className="projects-durango tile reveal wide acrylic"
                    onClick={() => {
                        window.open('https://durango.rs', '_blank');
                    }}
                >
                    <p className="tileTitle">Durango</p>
                    <img
                        src={Durango}
                        className="centerIcon"
                        alt="durango"
                    />
                </div>
                <div className="projects-servierbar tile reveal medium acrylic"
                    onClick={() => {
                        window.open('https://servier.bar/', '_blank');
                    }}
                >
                    <p className="tileTitle">Servier Bar</p>
                    <img
                        src={ServierBar}
                        className="centerIcon"
                        alt="servier.bar"
                    />
                </div>
            </div>
        </Fade>
    )
}

export default Projects;