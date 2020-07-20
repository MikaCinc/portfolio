import React, {
    useEffect,
    Fragment,
    useState,
    useContext
} from 'react';

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

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
            glareMaxOpacity={0.45}
            scale={1.05}
            gyroscope={true}
            glarePosition={'all'}
            glareColor={themes[theme][3]}
        >
            <button
                className="backButton"
                onClick={() => { history.push('/portfolio') }}
            >
                Back
                </button>
            <div className="inner-element">
                <Fade cascade bottom>
                    <div className="flex-wrapper">
                        {
                            skills.map(item => {
                                return (
                                    <p className="skillsItem">{item}</p>
                                )
                            })
                        }
                    </div>
                </Fade>
            </div>
        </Tilt>
    )
}

export default Skills;