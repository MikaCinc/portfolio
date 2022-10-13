import React, { useContext, useState, useMemo } from "react";

/* Icon */
import Input from "../icons/input.png";
import Expand from "../icons/expand-arrow.png";
import Collapse from "../icons/collapse-arrow.png";

import Tilt from "react-parallax-tilt";
import Fade from "react-reveal/Fade";

/* Context */
import MainContext from "../context/mainContext";
import themes from "../themes";
import experience from "../data/experience";

const Experience = ({ history }) => {
  const { theme } = useContext(MainContext);
  const [priority, setPriority] = useState("main");

  const mainExperiences = useMemo(
    () => experience.filter((e) => e.priority === "main"),
    []
  );

  const otherExperiences = useMemo(
    () => experience.filter((e) => e.priority === "other"),
    []
  );

  const getExperiences = () => {
    if (priority === "main") {
      return mainExperiences;
    } else {
      return [...mainExperiences, ...otherExperiences];
    }
  };

  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={10000}
      glareEnable={true}
      scale={1}
      gyroscope={true}
      glarePosition={"all"}
      glareColor={themes[theme][3]}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      glareMaxOpacity={0.3}
    >
      <button
        className="backButton"
        onClick={() => {
          history.push("/");
        }}
      >
        Back
      </button>
      <div className="pageTitle">
        <h1>Experience & Volunteer</h1>
        <img src={Input} alt="icon" />
      </div>
      <div className="inner-element">
        <Fade cascade bottom>
          <div className="flex-wrapper flex-wrapper-experience">
            {getExperiences().map(({ title, date }, index) => (
              <div key={index}>
                <p className="gradientTextLite4">{title}</p>
                <p>{date}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <div
        className="icon-button-wrapper reveal"
        onClick={() => {
          setPriority(priority.includes("other") ? "main" : "main + other");
        }}
      >
        <img src={priority.includes("other") ? Collapse : Expand} alt="icon" />
        <p>{priority.includes("other") ? "Show less" : "Show more"}</p>
      </div>
    </Tilt>
  );
};

export default Experience;
