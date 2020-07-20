import React, { useState, useEffect } from 'react';
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

/* Context */
import { MainProvider } from './context/mainContext';

const routes = [
    { path: '/portfolio', name: 'Home', Component: Home },
    { path: '/portfolio/biography', name: 'Biography', Component: Biography },
    { path: '/portfolio/bythenumbers', name: 'ByTheNumbers', Component: ByTheNumbers },
    { path: '/portfolio/skills', name: 'Skills', Component: Skills },
    { path: '/portfolio/experience', name: 'Experience', Component: Experience },
];

const App = () => {

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
                </Switch>
                <Particles
                    canvasClassName="particles"
                    params={{
                        particles: {
                            number: {
                                value: 70,
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                }
                            },
                            /* color: {
                                value: themes[theme][3]
                            }, */
                        },
                        /* interactivity: {
                            events: {
                                onhover: {
                                    enable: true,
                                    mode: "repulse"
                                }
                            }
                        } */
                    }}
                />
            </MainProvider>
        </Router>
    );
}

export default App;