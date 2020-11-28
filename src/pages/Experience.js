import React, {
    useContext
} from 'react';

/* Icon */
import Input from '../icons/input.png';

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

/* Context */
import MainContext from '../context/mainContext';
import themes from '../themes';
import experience from '../data/experience';

const Experience = ({ history }) => {
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
                onClick={() => { history.push('/') }}
            >
                Back
            </button>
            <div className="pageTitle">
                <p>Experience & Volunteer</p>
                <img src={Input} alt="icon" />
            </div>
            <div className="inner-element">
                <Fade cascade bottom>
                    <div className="flex-wrapper flex-wrapper-experience">
                        {
                            experience.map(({ title, date }, index) => {
                                if (index < 20) return (
                                    <div key={index}>
                                        <p className="gradientTextLite4">{title}</p>
                                        <p>{date}</p>
                                    </div>
                                )

                                return null;
                            })
                        }
                    </div>
                </Fade>
            </div>
        </Tilt>
    )
}

export default Experience;