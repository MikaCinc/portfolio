import React, {
    useEffect,
    Fragment,
    useState,
    useContext
} from 'react';

import Tilt from 'react-parallax-tilt';

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
            <div className="pageTitle">
                <p>By the numbers</p>
                <img src={ByTheNumbersIcon} alt="icon" />
            </div>
            <div className="inner-element">
                <div className="flex-wrapper flex-wrapper-byTheNumbers">
                    {
                        byTheNumbers.map(({ number, description }) => {
                            return (
                                <div>
                                    <p className="bythenumber">{number}</p>
                                    <p className="gradientTextLite2">{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Tilt>
    )
}

export default ByTheNumbers;