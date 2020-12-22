import React, {
    useContext
} from 'react';

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

import skillsIcon from '../icons/skills.png';

/* Context */
import MainContext from '../context/mainContext';
import themes from '../themes';
import skills from '../data/skills';

const Skills = ({ history }) => {
    const { theme } = useContext(MainContext);

    return (
        <Tilt
            className="parallax-effect-glare-scale"
            perspective={5000}
            glareEnable={true}
            scale={1.05}
            gyroscope={true}
            glarePosition={'all'}
            glareColor={themes[theme][3]}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareMaxOpacity={0.3}
        >
            <button
                className="backButton"
                onClick={() => { history.push('/') }}
            >
                Back
            </button>
            <div className="pageTitle">
                <p>Skills & Interests</p>
                <img src={skillsIcon} alt="icon" />
            </div>
            <div className="inner-element">
                <Fade cascade bottom>
                    <div className="flex-wrapper flex-wrapper-skills">
                        <div className="even-skill-group">
                            <p>
                                {
                                    skills.map(item => {
                                        return (
                                            <span key={item} className="skillsItem">{item}</span>
                                        )
                                    })
                                }
                            </p>
                            <p>Languages & Dev tools</p>
                        </div>
                        <div>
                            <p>Interests & Other</p>
                            <p>
                                <span>English level B2 / Certified 2018 @ KapitalIn</span>
                                <span>Drivers Licence / category B</span>
                                <span>StreetWorkout</span>
                                <span>Salsa</span>
                                <span>Microsoft & Windows - Watcher</span>
                                <span>Chess</span>
                            </p>
                        </div>
                        <div className="even-skill-group">
                            <p>
                                <span>Student of the year 2015.</span>
                                <span>A Certificate of Excellence 'Vuk Karadžić'</span>
                                <span>(both primary and high school)</span>
                            </p>
                            <p>Awards of note</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </Tilt>
    )
}

export default Skills;