import React, {
    useContext
} from 'react';

import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';

import ByTheNumbersIcon from '../icons/neutral-trading.png';

/* Context */
import MainContext from '../context/mainContext';
import themes from '../themes';
import byTheNumbers from '../data/byTheNumbers';

const ByTheNumbers = ({ history }) => {
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
                <h1>By the numbers</h1>
                <img src={ByTheNumbersIcon} alt="icon" />
            </div>
            <div className="inner-element">
                <Fade cascade bottom>
                    <div className="flex-wrapper flex-wrapper-byTheNumbers">
                        {
                            byTheNumbers.map(({ number, description }, index) => {
                                return (
                                    <div key={index}>
                                        <p className="bythenumber">{number}</p>
                                        <p className="gradientTextLite2">{description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fade>
            </div>
        </Tilt>
    )
}

export default ByTheNumbers;