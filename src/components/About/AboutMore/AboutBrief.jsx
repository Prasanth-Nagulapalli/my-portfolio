import React, { useEffect } from "react";
import { profileAbout } from "../../../images";
import gsap from "gsap";
import { useScreenSize } from "../../../customHooks";
import { Link } from "react-scroll";
const AboutMeBrief = ({ showBreif, setShowBreif }) => {
  const { screenWidth } = useScreenSize().screenSize;

  useEffect(() => {
    const containerAnimation = gsap.fromTo(
      ".about__container",
      { opacity: 0, paddingBottom: "40vh" },
      {
        paddingBottom: screenWidth > 768 ? "80px" : "50px",
        opacity: 1,
        duration: 0.8,
        ease: "power1",
      }
    );

    const photoAnimation = gsap.fromTo(
      ".about__container .photo__container",
      { x: -150, opacity: 0 },
      { delay: 0.2, x: 0, opacity: 1, duration: 0.6, ease: "power1" }
    );

    const headerAnimation = gsap.fromTo(
      ".about__container .section__header",
      { x: 150, opacity: 0 },
      {
        delay: 0.2,
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power1",
      }
    );
    return () => {
      containerAnimation.kill();
      photoAnimation.kill();
      headerAnimation.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBreif]);

  const handleCollapse = () => {
    const photoAnimation = gsap.to(".about__container .photo__container", {
      x: -150,
      opacity: 0,
      duration: 0.6,
      ease: "power1",
    });

    const headerAnimation = gsap.to(".about__container .section__header", {
      x: 150,
      opacity: 0,
      duration: 0.6,
      ease: "power1",
    });

    const containerAnimation = gsap.to(".about__container", {
      paddingBottom: screenWidth > 850 ? "25%" : "50vh",
      opacity: 0,
      duration: 0.6,
      ease: "power1",
      onComplete: () => setShowBreif(false),
    });

    // Clean up animations if needed
    return () => {
      photoAnimation.kill();
      headerAnimation.kill();
      containerAnimation.kill();
    };
  };

  return (
    <div className="section__wrapper about__container">
      <div className="me__container blur-effect">
        <div className="photo__container">
          <img src={profileAbout} alt="profileAbout" />
        </div>
      </div>
      <div className="section__header">
        <h4 className="primary__title">About Me</h4>
        <h1 className="title about__title">
          I am <span className="color__primary">N Prasanth Kumar</span>
        </h1>
        <p className="text__muted description about_description">
          I am a self-taught Full-stack developer with a strong passion for
          coding and a dedication to continuous learning. I have gained my
          skills through various online platforms, including{" "}
          <span className="about__highlight__text">freeCodeCamp</span>,
          <span className="about__highlight__text"> Coursera</span>,{" "}
          <span className="about__highlight__text">YouTube</span>, and official
          documentation like{" "}
          <span className="about__highlight__text">MDN Web Docs</span>.
        </p>
        <Link
          style={{ fontFamily: "Arial" }}
          offset={-10}
          to={"about"}
          smooth={true}
          duration={900}
          onClick={handleCollapse}
          className="btn btn__primary"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default AboutMeBrief;
