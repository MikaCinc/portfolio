import React from "react";
import Fade from "react-reveal/Fade";
import SourceCode from "../icons/source-code.png";
import Durango from "../icons/durango.png";
import Testovi from "../icons/testovi-beta-icon_2.png";
import TestoviLite from "../icons/testovi-lite.png";
import PropCentral from "../icons/propcentral.png";
import ServierBar from "../icons/servier-bar.png";
import KFC from "../icons/kfc-logo.png";
import TVP from "../icons/tvp.png";
import Chart from "../icons/chart.png";
import Supreme from "../icons/supreme.jpg";
import Mastermind from "../icons/brain.png";
import Memory from "../icons/dice.png";
import CapitalCities from "../icons/city.png";
import OldPortfolio from "../icons/old-portfolio.png";
import Packages from "../icons/packaging.png";

const Projects = ({ history }) => {
  return (
    <Fade bottom cascade duration={700}>
      <div className="projectsGrid">
        <button
          className="backButtonProjects"
          onClick={() => {
            history.push("/");
          }}
        >
          Back
        </button>
        <div className="pageTitle pageTitleProjects">
          <h1>Projects</h1>
          <img src={SourceCode} alt="icon" />
        </div>
        <div
          className="projects-mastermind tile reveal small acrylic"
          onClick={() => {
            window.open("https://mikacinc.github.io/Mastermind/", "_blank");
          }}
        >
          <img src={Mastermind} className="smallIcon" alt="mastermind" />
        </div>
        <div
          className="projects-memory tile reveal small acrylic"
          onClick={() => {
            window.open("https://mikacinc.github.io/MemoryGame/", "_blank");
          }}
        >
          <img src={Memory} className="smallIcon" alt="memory game" />
        </div>
        <div
          className="projects-capitalcities tile reveal small acrylic"
          onClick={() => {
            window.open("https://mikacinc.github.io/GlavniGradovi/", "_blank");
          }}
        >
          <img src={CapitalCities} className="smallIcon" alt="capital cities" />
        </div>
        <div
          className="projects-testovi-lite tile reveal small acrylic"
          onClick={() => {
            window.open("https://github.com/MikaCinc/testovi-lite", "_blank");
          }}
        >
          <img src={TestoviLite} className="smallIcon" alt="party invitation" />
        </div>
        <div
          className="projects-old-portfolio tile reveal small acrylic"
          onClick={() => {
            window.open("https://mikacinc.github.io/portfolio-old/", "_blank");
          }}
        >
          <img
            src={OldPortfolio}
            className="smallIcon"
            alt="archive old portfolio"
          />
        </div>
        <div
          className="projects-package-picker tile reveal small acrylic"
          onClick={() => {
            window.open("https://mikacinc.github.io/package-picker/", "_blank");
          }}
        >
          <img src={Packages} className="smallIcon" alt="package-picker" />
        </div>
        <div
          className="projects-propcentral tile reveal medium acrylic"
          onClick={() => {
            window.open("https://www.prop-central.com/", "_blank");
          }}
        >
          <p className="tileTitle">PropCentral</p>
          <img src={PropCentral} className="centerIcon" alt="propcentral" />
        </div>
        <div
          className="projects-supreme tile reveal small acrylic"
          onClick={() => {
            window.open(
              "https://mikacinc.github.io/fitness-supreme/",
              "_blank"
            );
          }}
        >
          <img src={Supreme} className="smallIcon" alt="fitness-supreme" />
        </div>
        <div
          className="projects-neon tile reveal medium acrylic"
          onClick={() => {
            window.open("https://mikacinc.github.io/Neon-React/", "_blank");
          }}
        >
          <p className="tileTitle">Project NEON</p>
          <div className="tileContent">
            <Fade cascade>
              <p className="tileText"> {"//NEON/"} </p>
            </Fade>
          </div>
        </div>
        <div
          className="projects-durango tile reveal medium acrylic"
          onClick={() => {
            window.open("https://durango.rs", "_blank");
          }}
        >
          <p className="tileTitle">Durango</p>
          <img src={Durango} className="centerIcon" alt="durango" />
        </div>
        <div
          className="projects-servierbar tile reveal medium acrylic"
          onClick={() => {
            window.open("https://servier.bar/", "_blank");
          }}
        >
          <p className="tileTitle">Servier Bar</p>
          <img src={ServierBar} className="centerIcon" alt="servier.bar" />
        </div>
        <div
          className="projects-kfc tile reveal small acrylic"
          onClick={() =>
            console.log(
              "Working in a team building KIOSK app for KFC in Poland"
            )
          }
        >
          <img src={KFC} className="centerIcon" alt="kfc kiosk app" />
        </div>
        <div
          className="projects-tvp tile reveal small acrylic"
          onClick={() =>
            console.log(
              "Working in a team building Tizen TV app in React.js for TVP Sport in Poland"
            )
          }
        >
          <img src={TVP} className="centerIcon" alt="tvp sport tizen app" />
        </div>
        <div
          className="projects-cryptoSim tile reveal small acrylic"
          onClick={() => {
            console.log("Simple random crypto chart simulator");
            window.open("https://github.com/MikaCinc/rwa-rxjs", "_blank");
          }}
        >
          <img src={Chart} className="centerIcon" alt="crypto simulator" />
        </div>
        <div
          className="projects-testovi tile reveal wide acrylic"
          onClick={() => {
            window.open("https://cortex.inicijativa.software/", "_blank");
          }}
        >
          <p className="tileTitle">Project Cortex</p>
          <img src={Testovi} className="centerIcon" alt="cortex" />
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
