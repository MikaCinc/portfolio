import React, {
    useContext
} from 'react';

import Tilt from 'react-parallax-tilt';

import bioPic from '../pictures/bio_pic.jpg';
import HardWorking from '../icons/hard-working.png';
import bio from '../data/bio.js';

/* Context */
import MainContext from '../context/mainContext';
import themes from '../themes';

const Biography = ({ history }) => {
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
                <p>Short biography</p>
                <img src={HardWorking} alt="icon" />
            </div>
            <div className="inner-element">
                <div className="flex-wrapper">
                    <img className="bioPic" width="300" height="230" src={bioPic} alt="Terrace"></img>
                    <p>{bio}</p>
                </div>
            </div>
        </Tilt>
    )
}

export default Biography;