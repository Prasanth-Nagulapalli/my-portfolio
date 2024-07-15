import React, { useEffect, useRef } from "react";
import "./About.css";
import { profile2 } from "../../images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const container = useRef(null);
  //Register plugin
  gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   const el = container.current;
  //   gsap.fromTo(
  //     ".about__container",
  //     {
  //       scale: 0.7,
  //     },
  //     {
  //       scale: 1,
  //       scrollTrigger: {
  //         trigger: el,
  //         scrub: true,
  //         markers: false,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section ref={container} id="about">
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h4 className="primary__title">About Me</h4>
          <h1 className="title">
            I am <span className="color__primary">N Prasanth Kumar</span>
          </h1>
          <p className="text__muted description about_description">
            I am a self-taught Full-stack developer with a strong passion for
            coding and a dedication to continuous learning. I have gained my
            skills through various online platforms, including freeCodeCamp,
            Coursera, YouTube, and official documentation like MDN Web Docs.
          </p>
          <button className="btn btn__primary">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default About;
