import React, {
    useEffect,
    Fragment,
    useState,
    useContext
} from 'react';

import profilePicture from '../pictures/prof.jpg';
import Instagram from '../icons/instagram.png';
import LinkedIn from '../icons/linkedin.png';
import GitHub from '../icons/github.png';
import ChatBubble from '../icons/chat-bubble.png';
import Personalization from '../icons/paint3d.png';
import Durango from '../icons/durango.png';
import Folder from '../icons/program-folder.png';
import MindMap from '../icons/mind-map.png';
import HardWorking from '../icons/hard-working.png';
import SourceCode from '../icons/source-code.png';
import Skills from '../icons/skills.png';
import Input from '../icons/input.png';
import ByTheNumbers from '../icons/neutral-trading.png';

import { FluentRevealEffect } from "fluent-reveal-effect"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
import Tilt from 'react-parallax-tilt';

/* Context */
import MainContext from '../context/mainContext';

const Home = ({ history }) => {
    const { theme, setTheme } = useContext(MainContext);
    // const [theme, setTheme] = useState(0);
    const [iconClassName, setIconClassName] = useState('centerIcon');

    useEffect(() => {
        let timeout = setTimeout(() => {
            setIconClassName('tileIcon');
        }, 2000);

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

        // document.addEventListener('DOMContentLoaded', callback);

        return () => {
            // document.removeEventListener('DOMContentLoaded', callback);
            clearTimeout(timeout);
            clearTimeout(revealTimeout);
        }
    }, [])

    return (
        <Zoom
            cascade
            bottom
            duration={1000}
        >
            <div className="mainContainer">
                <div className={`item-profile-picture tile reveal wide acrylic`}>
                    <img
                        src={profilePicture}
                        className="profilePicture"
                        alt="profile picture"
                    />
                    <div className="profile-info-div">
                        <Zoom cascade delay={800}>
                            <p>Mihajlo</p>
                        </Zoom>
                        <Zoom cascade delay={800}>
                            <p>Marjanović</p>
                        </Zoom>
                    </div>
                </div>
                <div className="item-instagram tile reveal small acrylic">
                    <img
                        src={Instagram}
                        className="smallIcon"
                        alt="instagram"
                    />
                </div>
                <div className="item-linkedin tile reveal small acrylic">
                    <img
                        src={LinkedIn}
                        className="smallIcon"
                        alt="linkedin"
                    />
                </div>
                <div className="item-github tile reveal small acrylic">
                    <img
                        src={GitHub}
                        className="smallIcon"
                        alt="github"
                    />
                </div>
                <div className="item-durango tile reveal small acrylic">
                    <img
                        src={Durango}
                        className="smallIcon"
                        alt="durango"
                    />
                </div>
                <div
                    className="item-biography medium tile reveal acrylic"
                    onClick={() => {
                        history.push('/portfolio/biography');
                    }}
                >
                    <p className="tileTitle">Biography</p>
                    <Slide
                        bottom
                        spy={iconClassName}
                    >
                        <img
                            className={iconClassName}
                            src={HardWorking}
                            alt="tile icon"
                        />
                    </Slide>
                </div>
                <div
                    className="item-byTheNumbers tile reveal wide acrylic"
                    onClick={() => {
                        history.push('/portfolio/bythenumbers');
                    }}
                >
                    <p className="tileTitle">By The Numbers</p>
                    <Slide
                        bottom
                        spy={iconClassName}
                    >
                        <img
                            className={iconClassName}
                            src={ByTheNumbers}
                            alt="tile icon"
                        />
                    </Slide>
                </div>
                <div className="item-contact tile reveal small acrylic">
                    <img
                        src={ChatBubble}
                        className="smallIcon"
                        alt="contact"
                    />
                </div>
                <div className="item-personalization tile reveal small acrylic"
                    onClick={() => {
                        setTheme(theme + 1);
                    }}
                >
                    <img
                        src={Personalization}
                        className="smallIcon"
                        alt="dark mode"
                    />
                </div>
                <div className="item-achievements tile reveal small acrylic"
                    onClick={() => {

                    }}
                >
                    <img
                        src={MindMap}
                        className="smallIcon"
                        alt="dark mode"
                    />
                </div>
                <div
                    className="item-skills tile reveal medium acrylic"
                    onClick={() => {
                        history.push('/portfolio/skills');
                    }}
                >
                    <p className="tileTitle">DevSkills</p>
                    <Slide
                        bottom
                        spy={iconClassName}
                    >
                        <img
                            className={iconClassName}
                            src={Skills}
                            alt="tile icon"
                        />
                    </Slide>
                </div>
                <div className="item-projects tile reveal medium acrylic">
                    <p className="tileTitle">Projects</p>
                    <Slide
                        bottom
                        spy={iconClassName}
                    >
                        <img
                            className={iconClassName}
                            src={Folder}
                            alt="tile icon"
                        />
                    </Slide>
                </div>
                <div
                    className="item-experience tile reveal wide acrylic"
                    onClick={() => {
                        history.push('/portfolio/experience');
                    }}
                >
                    <p className="tileTitle">Experience</p>
                    <Slide
                        bottom
                        spy={iconClassName}
                    >
                        <img
                            className={iconClassName}
                            src={Input}
                            alt="tile icon"
                        />
                    </Slide>
                </div>
            </div>
        </Zoom>
    );
}

export default Home;