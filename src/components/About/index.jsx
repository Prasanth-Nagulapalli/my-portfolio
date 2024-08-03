// import React, { useEffect, useRef } from "react";
// import "./About.css";
// import { profileAbout } from "../../images";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useScreenSize } from "../../customHooks";
// const About = () => {
//   const container = useRef(null);

//   const { screenSize } = useScreenSize();
//   const { screenWidth } = screenSize;

//   //Register plugin
//   gsap.registerPlugin(ScrollTrigger);

//   useEffect(() => {
//     const el = container.current;
//     gsap.fromTo(
//       ".about__container",
//       {
//         scale: 0.5,
//       },
//       {
//         scale: 1,
//         scrollTrigger: {
//           trigger: el,
//           start: "top bottom",
//           end: "top 25%",
//           scrub: true,
//           // markers: false,
//         },
//       }
//     );
//     gsap.fromTo(
//       ".about__container .primary__title",
//       {
//         // y:  -240,
//         y: screenWidth > 850 ? -240 : -200,
//         opacity: 0.6,
//       },

//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         scrollTrigger: {
//           trigger: el,
//           start: "top bottom",
//           end: "top 20%", // End when the top of the about__container hits 50% from the top of the viewport
//           scrub: true,
//         },
//       }
//     );

//     gsap.fromTo(
//       ".about__container .photo__container",
//       {
//         rotate: 40,
//       },

//       {
//         rotate: 0,
//         scrollTrigger: {
//           trigger: el,
//           start: "top bottom",
//           end: "top 10%", // End when the top of the about__container hits 50% from the top of the viewport
//           scrub: true,
//           // markers: true,
//         },
//       }
//     );
//   }, [screenWidth]);

//   return (
//     <section ref={container} id="about">
//       <div className="section__wrapper about__container">
//         <div className="me__container blur-effect">
//           <div className="photo__container">
//             <img src={profileAbout} alt="profileAbout" />
//           </div>
//         </div>
//         <div className="section__header">
//           <h4 className="primary__title">About Me</h4>
//           <h1 className="title about__title">
//             I am <span className="color__primary">N Prasanth Kumar</span>
//           </h1>
//           <p className="text__muted description about_description">
//             I am a self-taught Full-stack developer with a strong passion for
//             coding and a dedication to continuous learning. I have gained my
//             skills through various online platforms, including{" "}
//             <span className="about__highlight__text">freeCodeCamp</span> ,
//             <span className="about__highlight__text">Coursera </span> ,{" "}
//             <span className="about__highlight__text">YouTube </span>, and
//             official documentation like{" "}
//             <span className="about__highlight__text">MDN Web Docs </span> .
//           </p>
//           {/* <button className="btn btn__primary">Read more</button> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// ? About Updated
import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScreenSize } from "../../customHooks";
import AboutMeDetailed from "./AboutMore/AboutDetailed";
import AboutMeBrief from "./AboutMore/AboutBrief";
const About = () => {
  const container = useRef(null);

  const { screenSize, refreshScroll, setRefreshScroll } = useScreenSize();
  const { screenWidth, documentHeight } = screenSize;
  const [showBreif, setShowBreif] = useState(true);
  //Register plugin
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (showBreif) {
      const el = container.current;

      // Create the animations
      const scaleAnimation = gsap.fromTo(
        ".about__container",
        { scale: 0.5 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 25%",
            scrub: true,
          },
        }
      );

      const titleAnimation = gsap.fromTo(
        ".about__container .primary__title",
        { y: screenWidth > 850 ? -240 : -200, opacity: 0.6 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
          },
        }
      );

      const photoAnimation = gsap.fromTo(
        ".about__container .photo__container",
        { rotate: 40 },
        {
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        }
      );

      // Cleanup function
      return () => {
        scaleAnimation.scrollTrigger.kill();
        titleAnimation.scrollTrigger.kill();
        photoAnimation.scrollTrigger.kill();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBreif]);

  useEffect(() => {
    setRefreshScroll(!refreshScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBreif, documentHeight]);

  return (
    <section ref={container} id="about">
      {showBreif ? (
        <AboutMeBrief showBreif={showBreif} setShowBreif={setShowBreif} />
      ) : (
        <AboutMeDetailed setShowBreif={setShowBreif} />
      )}
    </section>
  );
};

export default About;
