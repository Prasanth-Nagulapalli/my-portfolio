import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
const AboutMeDetailed = ({ setShowBreif }) => {
  useEffect(() => {
    const primaryTitleAnimation = gsap.fromTo(
      ".about__all__container .primary__title",
      { y: -40 },
      { y: 0, duration: 0.6, ease: "power1" }
    );
    const aboutTitleAnimation = gsap.fromTo(
      ".about__all__container .about__title",
      { x: -40 },
      { x: 0, duration: 0.6, ease: "power1" }
    );
    const aboutDescriptionAnimation = gsap.fromTo(
      ".about__all__container .about_description",
      { y: 26, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: "power1" }
    );

    // Cleanup function
    return () => {
      primaryTitleAnimation.kill();
      aboutTitleAnimation.kill();
      aboutDescriptionAnimation.kill();
    };
  }, []);

  const handleCollapse = () => {
    const primaryTitleAnimation = gsap.to(
      ".about__all__container .primary__title",
      {
        y: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power1",
      }
    );

    const aboutTitleAnimation = gsap.to(
      ".about__all__container .about__title",
      {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power1",
      }
    );

    const aboutDescriptionAnimation = gsap.to(
      ".about__all__container .about_description",
      {
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: "power1",
        onComplete: () => setShowBreif(true),
      }
    );

    return () => {
      primaryTitleAnimation.kill();
      aboutTitleAnimation.kill();
      aboutDescriptionAnimation.kill();
    };
  };

  return (
    <div className="about__all__container section__wrapper">
      <div className="section__header">
        <h4 className="primary__title">About Me</h4>
        <h1 className="title about__title">
          I am <span className="color__primary">N Prasanth Kumar</span>
        </h1>
        <p className="text__muted description about_description">
          I am a self-taught Full-stack developer with a strong passion for
          coding and a dedication to continuous learning. I have gained my
          skills through various online platforms, including
          <span className="about__highlight__text"> freeCodeCamp</span>,
          <span className="about__highlight__text"> Coursera</span>,
          <span className="about__highlight__text"> YouTube</span>, and official
          documentation like{" "}
          <span className="about__highlight__text">MDN Web Docs</span>.
        </p>
        <p className="text__muted description about_description">
          My journey in web development began with building small projects, and
          over time, I have worked on more complex applications. I specialize in
          front-end technologies such as
          <span className="about__highlight__text"> HTML</span>,
          <span className="about__highlight__text"> CSS</span>,
          <span className="about__highlight__text"> JavaScript</span>, and
          <span className="about__highlight__text"> React</span>, and I am
          proficient in back-end technologies like
          <span className="about__highlight__text"> Node.js</span>,
          <span className="about__highlight__text"> Express.js</span>, and
          <span className="about__highlight__text"> MongoDB</span>. I also have
          experience with version control using
          <span className="about__highlight__text"> Git</span> and
          <span className="about__highlight__text"> GitHub</span>, and I am
          familiar with containerization using
          <span className="about__highlight__text"> Docker</span>.
        </p>
        <p className="text__muted description about_description">
          In addition to my technical skills, I have a keen eye for design and
          user experience, often utilizing tools like
          <span className="about__highlight__text"> Figma</span> and
          <span className="about__highlight__text"> Canva</span> to create
          visually appealing and user-friendly interfaces. I am committed to
          staying up-to-date with the latest industry trends and best practices,
          ensuring that my work is both modern and efficient.
        </p>

        <p className="text__muted description about_description">
          Whether it's building
          <span className="about__highlight__text">
            {" "}
            Responsive web applications
          </span>
          , designing
          <span className="about__highlight__text">
            {" "}
            Interactive user interfaces
          </span>
          , or{" "}
          <span className="about__highlight__text">
            {" "}
            Optimizing performance
          </span>
          , I am always eager to take on new challenges and contribute to
          exciting projects. My goal is to continuously improve my skills and
          deliver high-quality solutions that meet the needs of users and
          clients alike.
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
          Show less
        </Link>
      </div>
    </div>
  );
};

export default AboutMeDetailed;
