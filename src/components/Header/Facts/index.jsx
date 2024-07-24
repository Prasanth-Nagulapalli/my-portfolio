import React, { useState, useEffect, useRef } from "react";
import Odometer from "react-odometerjs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Facts.css";
import useHoverImage from "../../../customHooks/useHoverImage";
const Facts = () => {
  const [experinece, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const container = useRef();

  const { imageRef, handleMouseEnterImg, handleMouseLeaveImg } =
    useHoverImage();

  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setExperience(calculateExperience("2021-05-08"));
      setProjects(20);
      setClients(5);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".fact__item", {
        delay: 1.5,
        x: -100,
        stagger: 0.5,
        opacity: 0,
      });
    },
    { scope: container }
  );

  return (
    <div
      className="fact__container"
      ref={container}
      // onMouseEnter={handleMouseEnterImg}
      // onMouseLeave={handleMouseLeaveImg}
      // style={{position:"relative"}}
    >
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={experinece} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years Of Experience</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={clients} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Technologies Masterd</p>
      </div>
      <span ref={imageRef} className="hoverImage-image"></span>
    </div>
  );
};

export default Facts;

const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();

  const years = now.getFullYear() - start.getFullYear();

  return years;
};
