import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useScreenSize } from "../../customHooks";
import "./Skills.css";
import SkillCard from "./SkillCard";
import { experience } from "../../data";

const Skills = () => {
  const { screenWidth } = useScreenSize().screenSize;
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const skillRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = containerRef.current;
    const gsapContext = gsap.context(() => {
      // Animate the title
      gsap.fromTo(
        titleRef.current,
        {
          x: -120,
          opacity: 0.6,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 40%",
            scrub: true,
            ease: "linear",
          },
        }
      );

      // Animate each skill card with delay and stagger for larger screens

      // Flip text animation

      // working
      skillRefs.current.forEach((skill) => {
        gsap.fromTo(
          skill,
          {
            rotationY: 180,
            opacity: 0,
          },
          {
            rotationY: 0,
            opacity: 1,
            duration: 1.5,

            scrollTrigger: {
              trigger: skill,
              // start: "top bottom",
              start: screenWidth > 500 ? "top 75%" : "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, el);

    return () => gsapContext.revert();
  }, [screenWidth]);

  return (
    <section ref={containerRef} id="skill">
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 ref={titleRef} className="primary__title">
            My Skills
          </h2>
        </div>
        <div className="skill__container">
          {experience.map((list, index) => (
            <SkillCard
              ref={(el) => (skillRefs.current[index] = el)}
              {...list}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
