import React, { useContext } from 'react';
import './App.css';

/* Router */
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

/* Animations */
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Particles from 'react-particles-js';

/* Pages */
import Home from './pages/Home';
import Biography from './pages/Biography';
import ByTheNumbers from './pages/ByTheNumbers';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';

/* Context */
import { MainProvider } from './context/mainContext';
import themes from './themes';
import MainContext from './context/mainContext';

const routes = [
    { path: '/portfolio', name: 'Home', Component: Home },
    { path: '/portfolio/biography', name: 'Biography', Component: Biography },
    { path: '/portfolio/bythenumbers', name: 'ByTheNumbers', Component: ByTheNumbers },
    { path: '/portfolio/skills', name: 'Skills', Component: Skills },
    { path: '/portfolio/experience', name: 'Experience', Component: Experience },
    { path: '/portfolio/projects', name: 'Projects', Component: Projects },
];

const App = () => {

    const { theme } = useContext(MainContext);

    const AppStack = ({ history }) => {
        return (
            <div className="container">
                <TransitionGroup>
                    <CSSTransition
                        in={true}
                        timeout={300}
                        classNames="page"
                        unmountOnExit
                        key={history.location.key} // Bez ovoga neće!
                    >
                        <Switch location={history.location}>
                            {
                                routes.map(({ path, Component }) => (
                                    <Route
                                        key={path}
                                        exact
                                        path={path}
                                        render={
                                            ({ match }) => (
                                                <div className="page">
                                                    <Component history={history} />
                                                </div>
                                            )
                                        }
                                    />
                                ))
                            }
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }

    return (
        <Router>
            <MainProvider>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/portfolio" />} />
                    <Route path="/portfolio" component={AppStack} />
                    <Route path="/portfolio/:page?" component={AppStack} />
                </Switch>
                <Particles
                    canvasClassName="particles"
                    params={{
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 900,
                                },
                                "opacity": 0.8
                            },
                            "line_linked": {
                                "enable": true,
                                "opacity": 0.1
                            },
                            "move": {
                                "direction": "top",
                                "random": true,
                                "speed": 1,
                                "out_mode": "out"
                            },
                            "size": {
                                "value": 4,
                                "random": true,
                                "anim": {
                                    "speed": 4,
                                    "size_min": 0.3
                                }
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.2
                                }
                            },
                            "color": {
                                "value": "#FFFFFF"
                            }
                        },
                        // "interactivity": {
                        //     "events": {
                        //         "onhover": {
                        //             "enable": true,
                        //             "mode": "bubble"
                        //         },
                        //         "onclick": {
                        //             "enable": true,
                        //             "mode": "repulse"
                        //         }
                        //     },
                        //     "modes": {
                        //         "bubble": {
                        //             "distance": 250,
                        //             "duration": 2,
                        //             "size": 0,
                        //             "opacity": 0
                        //         },
                        //         "repulse": {
                        //             "distance": 400,
                        //             "duration": 4
                        //         }
                        //     }
                        // },
                        "retina_detect": true
                    }}
                />
            </MainProvider>
        </Router>
    );
}

export default App;