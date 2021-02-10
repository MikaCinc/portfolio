import React, {
    useEffect,
    useState,
    useContext
} from 'react';

/* Icons */
import profilePicture from '../pictures/prof.jpg';
import Instagram from '../icons/instagram.png';
import LinkedIn from '../icons/linkedin.png';
import GitHub from '../icons/github.png';
import QuestionMark from '../icons/question-mark.png';
import Mail from '../icons/mail.png';
import Personalization from '../icons/paint3d.png';
import Durango from '../icons/durango.png';
import Folder from '../icons/program-folder.png';
import MindMap from '../icons/mind-map.png';
import HardWorking from '../icons/hard-working.png';
import Skills from '../icons/skills.png';
import Input from '../icons/input.png';
import ByTheNumbers from '../icons/neutral-trading.png';

/* Components */
// import Badge from '../Components/Badge';

/* Animations */
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';

/* Data */
import skills from '../data/skills';
import experiences from '../data/experience';
import byTheNumbers from '../data/byTheNumbers';

/* Context */
import MainContext from '../context/mainContext';

const Home = ({ history }) => {
    const { theme, setTheme, homeBottomAnimation, setHomeBottomAnimation } = useContext(MainContext);
    // const [theme, setTheme] = useState(0);
    const [iconClassName, setIconClassName] = useState('centerIcon');
    const [skill, setSkill] = useState('');
    const [experience, setExperience] = useState('');
    const [byTheNumber, setByTheNumber] = useState('');

    useEffect(() => {
        let interval1, interval2, interval3;
        interval1 = setInterval(() => {
            setSkill(Math.floor(Math.random() * skills.length));
        }, 2000);
        interval2 = setInterval(() => {
            setExperience(Math.floor(Math.random() * experiences.length));
        }, 2500);
        interval3 = setInterval(() => {
            setByTheNumber(Math.floor(Math.random() * byTheNumbers.length));
        }, 3000);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        }
    }, []);

    useEffect(() => {
        let timeout = setTimeout(() => {
            setIconClassName('tileIcon');
        }, 2000);

        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <Zoom
            cascade
            bottom={homeBottomAnimation}
            duration={850}
        >
            <div className="mainContainer">
                <div className={`item-profile-picture tile reveal wide acrylic`}>
                    <img
                        src={profilePicture}
                        className="profilePicture"
                        alt="profilePicture"
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
                <div className="item-instagram tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://www.instagram.com/mikac_inc/', '_blank');
                    }}
                >
                    <img
                        src={Instagram}
                        className="smallIcon"
                        alt="instagram"
                    />
                </div>
                <div className="item-linkedin tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://www.linkedin.com/in/mikacinc/', '_blank');
                    }}
                >
                    <img
                        src={LinkedIn}
                        className="smallIcon"
                        alt="linkedin"
                    />
                </div>
                <div className="item-github tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://github.com/MikaCinc', '_blank');
                    }}
                >
                    <img
                        src={GitHub}
                        className="smallIcon"
                        alt="github"
                    />
                </div>
                <div className="item-durango tile reveal small acrylic"
                    onClick={() => {
                        window.open('https://durango.rs', '_blank');
                    }}
                >
                    <img
                        src={Durango}
                        className="smallIcon"
                        alt="durango"
                    />
                </div>
                <div
                    className="item-biography medium tile reveal acrylic"
                    onClick={() => {
                        history.push('/biography');
                    }}
                >
                    <p className="tileTitle">Biography</p>
                    <img
                        className={'centerIcon'}
                        src={HardWorking}
                        alt="tile icon"
                    />
                </div>
                <div
                    className="item-byTheNumbers tile reveal wide acrylic"
                    onClick={() => {
                        history.push('/bythenumbers');
                    }}
                >
                    <div className="tileContent">
                        <Zoom spy={byTheNumber} cascade>
                            {
                                (byTheNumber || byTheNumber === 0)
                                && <p
                                    className="tileText"
                                >
                                    {
                                        `${byTheNumbers[byTheNumber].number} | ${byTheNumbers[byTheNumber].description}`
                                    }
                                </p>
                            }
                        </Zoom>
                    </div>
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
                <div className="item-contact tile reveal small acrylic"
                    onClick={() => {
                        window.location.href = "mailto:mihajlo.ls00@outlook.com";
                    }}
                >
                    <img
                        src={Mail}
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
                    {/* <Badge label="soon" /> */}
                    <img
                        src={MindMap}
                        className="smallIcon"
                        alt="dark mode"
                    />
                </div>
                <div
                    className="item-skills tile reveal medium acrylic"
                    onClick={() => {
                        history.push('/skills');
                    }}
                >
                    <div className="tileContent">
                        <RubberBand spy={skill}>
                            {(skill || skill === 0) && <p className="tileText">{skills[skill]}</p>}
                        </RubberBand>
                    </div>
                    <p className="tileTitle">Skills</p>
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
                <div
                    className="item-projects tile reveal medium acrylic"
                    onClick={() => {
                        history.push('/projects');
                    }}
                >
                    <p className="tileTitle">Projects</p>
                    <img
                        className={'centerIcon'}
                        src={Folder}
                        alt="tile icon"
                    />
                </div>
                <div
                    className="item-experience tile reveal wide acrylic"
                    onClick={() => {
                        history.push('/experience');
                    }}
                >
                    <div className="tileContent">
                        <Fade spy={experience} cascade bottom>
                            {
                                (experience || experience === 0)
                                && <p
                                    className="tileText"
                                >
                                    {
                                        experiences[experience].title
                                    }
                                </p>
                            }
                        </Fade>
                    </div>
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
                <div className="item-version tile reveal small acrylic">
                    <div className="tileContent">
                        <p className="tileText">V1.5.1</p>
                    </div>
                </div>
                <div
                    className="item-animation tile reveal small acrylic"
                    onClick={() => {
                        setHomeBottomAnimation(!homeBottomAnimation);
                    }}
                >
                    <img
                        src={QuestionMark}
                        className="smallIcon"
                        alt="home animation mode"
                    />
                </div>
            </div>
        </Zoom>
    );
}

export default Home;