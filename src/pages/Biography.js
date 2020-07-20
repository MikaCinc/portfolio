import React, {
    useEffect,
    Fragment,
    useState,
    useContext
} from 'react';
import Tilt from 'react-parallax-tilt';
import bioPic from '../pictures/bio_pic.jpg';

/* Context */
import MainContext from '../context/mainContext';
import themes from '../themes';

const text = "Mihajlo Marjanović is a student of the Faculty of Electronical engineering @University of Nis. He started doing web development at primary school which he completed as the best student of generation and with diploma of excellence. He participated in numerous competitions organized by the Ministry of Education, where he has more than 40 diplomas. In the 'Svetozar Marković' Gymnasium he organized workshops for programming 'Kodiak' in order to teach elementary students, and was also a member of the 'Nauči me' NGO from Nis, where he worked on similar projects. Since December 2017 he has been a FutureForward scholar where he works as a front - end web developer. Besides programming and studies he likes to do streetworkout and dance salsa."

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
                onClick={() => { history.push('/portfolio') }}
            >
                Back
                    </button>
            <div className="inner-element">
                <img className="bioPic" width="300" height="230" src={bioPic} alt="Terrace"></img>
            </div>
            <p>{text}</p>
        </Tilt>
    )
}

export default Biography;