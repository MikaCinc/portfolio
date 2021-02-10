import React, {
  useEffect,
  // Suspense,
  // lazy
} from 'react';
import './App.css';

/* Router */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";

/* Animations */
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Particles from 'react-particles-js';

/* Pages */
/* const Home = lazy(() => import('./pages/Home'));
const Biography = lazy(() => import('./pages/Biography'));
const ByTheNumbers = lazy(() => import('./pages/ByTheNumbers'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects')); */

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
  { path: '/', name: 'Home', Component: Home },
  { path: '/biography', name: 'Biography', Component: Biography },
  { path: '/bythenumbers', name: 'ByTheNumbers', Component: ByTheNumbers },
  { path: '/skills', name: 'Skills', Component: Skills },
  { path: '/experience', name: 'Experience', Component: Experience },
  { path: '/projects', name: 'Projects', Component: Projects },
];

const AppStack = ({ history }) => {

  useEffect(() => {
    const maskSize = 230;
    const halfMask = maskSize / 2;

    let revealTimeout = setTimeout(() => {
      callback();
    }, 500);

    let callback = () => {
      const elements = Array.from(document.querySelectorAll('.reveal'));
      document.addEventListener('mousemove', (event) => {
        elements.forEach((element) => {
          const { top, left } = element.getBoundingClientRect();
          const x = event.pageX - left - halfMask;
          const y = event.pageY - top - halfMask;

          element.style.webkitMaskPosition = `${x}px ${y}px`;
          element.style.webkitMaskSize = `${maskSize}px ${maskSize}px`;
        });
      });
    }

    return () => {
      clearTimeout(revealTimeout);
    }
  }, [history.location.pathname]);

  return (
    <div className="container">
      <TransitionGroup>
        <CSSTransition
          in={true}
          timeout={250}
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

const App = () => {

  // const { theme } = useContext(MainContext);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <MainProvider>
        <Switch>
          <Route exact path="/:page?" component={AppStack} />
          <Route exact path="/" component={AppStack} />
        </Switch>
        <MainContext.Consumer>
          {
            ({ theme }) => <Particles
              canvasClassName="particles"
              params={{
                "particles": {
                  "number": {
                    "value": 80,
                    "density": {
                      "enable": true,
                      "value_area": 4000,
                    },
                    "opacity": 0.8
                  },
                  "line_linked": {
                    "enable": true,
                    "opacity": 0.1,
                    "color": themes[theme][3],
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
                    "value": themes[theme][3]
                  },
                  "shape": {
                    "type": ["circle"],
                    /* "stroke": {
                      "width": 4,
                      "color": "#fff"
                    }, */
                    /* "polygon": {
                      "nb_sides": 5
                    } */
                  },
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
          }
        </MainContext.Consumer>
      </MainProvider>
      {/* </Suspense> */}
    </Router>
  );
}

export default App;