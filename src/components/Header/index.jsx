// import React, { useRef, useState } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { profileheader } from "../../images";
// import Facts from "./Facts";
// import "./Header.css";
// import { useScreenSize } from "../../customHooks";
// const Header = ({ setShowCertificates }) => {
//   const { showCursor, setShowCursor } = useScreenSize();
//   const [isOn, setIsOn] = useState(false);

//   const hanldeShowCertificates = () => {
//     setShowCertificates(true);
//   };

//   const handleMouseEnter = () => {
//     if (!isOn && !showCursor) {
//       setShowCursor(true);
//     }
//   };
//   const handleMouseLeave = () => {
//     if (!isOn && showCursor) {
//       setShowCursor(false);
//     } else if (isOn && showCursor) {
//       setShowCursor(true);
//     }
//   };

//   const handleCursorClick = () => {
//     // setShowCursor(!showCursor);
//     setIsOn(!isOn);
//   };

//   const container = useRef();
//   gsap.registerPlugin(useGSAP);
//   // const timeline = gsap.timeline();

//   useGSAP(
//     () => {
//       gsap.fromTo(
//         ".profile__photo__container",
//         {
//           scale: 0.5,
//           duration: 1,
//           opacity: 0.5,
//         },
//         {
//           scale: 1,
//           duration: 1,
//           ease: "sine.in",
//           opacity: 1,
//         }
//       );
//       gsap.from(".intro__text", {
//         fontSize: 100,
//         duration: 1,
//         delay: 1,
//         ease: "sine.in",
//       });
//       const timeline = gsap.timeline();
//       timeline
//         .from(".header__info__top", {
//           opacity: 0,
//         })
//         .from(".header__title", {
//           opacity: 0,
//           y: -30,
//         })
//         .from(".header__decription", {
//           opacity: 0,
//         })
//         .from(".btn", {
//           x: -40,
//           opacity: 0,
//           stagger: 0.5,
//         });
//     },
//     { scope: container }
//   );

//   return (
//     <header id="header" className="blur-effect" ref={container}>
//       <div className="stroke__text intro__text">HELLO</div>
//       <div className="section__wrapper header__container">
//         <div className="column intro__container blur-effect">
//           <div className="header__info">
//             <div className="header__info__top">
//               Hello There! I'm{" "}
//               <span className="color__primary">N Prasanth Kumar</span>
//             </div>
//             <div className="header__info__middle">
//               <h1 className="primary__title header__title">
//                 I'M A WEB DEVELOPER
//               </h1>
//               <p className="header__decription text__muted">
//                 "I build intuitive web applications, turning complex
//                 requirements into seamless user experiences."
//               </p>
//             </div>
//             <Facts />
//             <div className="header__info__bottom">
//               <button className="btn" onClick={hanldeShowCertificates}>
//                 Certificates & CV
//               </button>

//               <button
//                 // className="btn"
//                 className={showCursor && isOn ? "btn btn__primary" : "btn"}
//                 onClick={handleCursorClick}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 style={{ cursor: showCursor ? "crosshair" : "auto" }}
//               >
//                 {/* Email Me */}
//                 Set Cursor
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="column profile__wrapper">
//           <div className="profile__photo__container">
//             <img src={profileheader} alt="" className="profile__photo" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ? test for header animations
// ? success

// import React, { useRef, useState, useEffect } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { profileheader } from "../../images";
// import Facts from "./Facts";
// import "./Header.css";
// import { useScreenSize } from "../../customHooks";
// const Header = ({ setShowCertificates }) => {
//   const { showCursor, setShowCursor } = useScreenSize();
//   const [isOn, setIsOn] = useState(false);

//   const hanldeShowCertificates = () => {
//     setShowCertificates(true);
//   };

//   const handleMouseEnter = () => {
//     if (!isOn && !showCursor) {
//       setShowCursor(true);
//     }
//   };
//   const handleMouseLeave = () => {
//     if (!isOn && showCursor) {
//       setShowCursor(false);
//     } else if (isOn && showCursor) {
//       setShowCursor(true);
//     }
//   };

//   const handleCursorClick = () => {
//     // setShowCursor(!showCursor);
//     setIsOn(!isOn);
//   };

//   const container = useRef();
//   gsap.registerPlugin(useGSAP);
//   // const timeline = gsap.timeline();

//   useGSAP(
//     () => {
//       gsap.fromTo(
//         ".profile__photo__container",
//         {
//           scale: 0.5,
//           duration: 1,
//           opacity: 0.5,
//         },
//         {
//           scale: 1,
//           duration: 1,
//           ease: "sine.in",
//           opacity: 1,
//         }
//       );
//       gsap.from(".intro__text", {
//         fontSize: 100,
//         duration: 1,
//         delay: 1,
//         ease: "sine.in",
//       });
//       const timeline = gsap.timeline();
//       timeline
//         .from(".header__info__top", {
//           opacity: 0,
//         })
//         .from(".header__title", {
//           opacity: 0,
//           y: -30,
//         })
//         .from(".header__decription", {
//           opacity: 0,
//         })
//         .from(".btn", {
//           x: -40,
//           opacity: 0,
//           stagger: 0.5,
//         });
//     },
//     { scope: container }
//   );

//   const [showSecondText, setShowSecondText] = useState(false);
//   const [show, setShow] = useState(false);
//   const firstTextRef = useRef(null);
//   const secondTextRef = useRef(null);

//   useEffect(() => {
//     const animateText = () => {
//       const firstEl = firstTextRef.current;
//       const secondEl = secondTextRef.current;

//       if (showSecondText) {
//         gsap.to(secondEl, {
//           duration: 1,
//           rotationX: 50,
//           scale: 0.75,
//           opacity: 0,
//           ease: "power1",
//           onComplete: () => {
//             gsap.set(secondEl, { display: "none" });
//             gsap.set(firstEl, {
//               display: "block",
//               rotationX: -50,
//               scale: 1.2,
//             });
//             gsap.to(firstEl, {
//               scale: 1,
//               duration: 1,
//               rotationX: 0,
//               opacity: 1,
//               ease: "power1",
//             });
//           },
//         });
//       } else {
//         gsap.to(firstEl, {
//           duration: 1,
//           opacity: 0,
//           rotationX: 50,
//           scale: 0.75,
//           ease: "power1",
//           onComplete: () => {
//             gsap.set(firstEl, { display: "none" });
//             gsap.set(secondEl, {
//               display: "block",
//               rotationX: -50,
//               scale: 1.2,
//             });
//             gsap.to(secondEl, {
//               scale: 1,
//               duration: 1,
//               rotationX: 0,
//               opacity: 1,
//               ease: "power1",
//             });
//           },
//         });
//       }
//     };
//     if (show) {
//       animateText();
//     }
//   }, [showSecondText, show]);

//   useEffect(() => {
//     if (show) {
//       const intervelId = setInterval(() => {
//         setShowSecondText((prev) => !prev);
//       }, 10000);
//       return () => clearInterval(intervelId);
//     }
//   }, [show]);

//   useEffect(() => {
//     const intervelId = setTimeout(() => {
//       setShow(true);
//     }, 10000);
//     return () => clearTimeout(intervelId);
//   }, []);

//   return (
//     <header id="header" className="blur-effect" ref={container}>
//       <div className="stroke__text intro__text">HELLO</div>
//       <div className="section__wrapper header__container">
//         <div className="column intro__container blur-effect">
//           <div className="header__info">
//             <div className="header__info__top">
//               Hello There! I'm{" "}
//               <span className="color__primary">N Prasanth Kumar</span>
//             </div>
//             <div className="header__info__middle">
//               <h1 className="primary__title header__title">
//                 <span className="primary__title__span" ref={firstTextRef} >
//                   I'M A WEB
//                 </span>
//                 <span
//                   className="primary__title__span hidden"
//                   ref={secondTextRef}
//                 >
//                   FRONT-END
//                 </span>

//                 DEVELOPER

//               </h1>
//               <p className="header__decription text__muted">
//                 "I build intuitive web applications, turning complex
//                 requirements into seamless user experiences."
//               </p>
//             </div>
//             <Facts />
//             <div className="header__info__bottom">
//               <button className="btn" onClick={hanldeShowCertificates}>
//                 Certificates & CV
//               </button>

//               <button
//                 // className="btn"
//                 className={showCursor && isOn ? "btn btn__primary" : "btn"}
//                 onClick={handleCursorClick}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 style={{ cursor: showCursor ? "crosshair" : "auto" }}
//               >
//                 {/* Email Me */}
//                 Set Cursor
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="column profile__wrapper">
//           <div className="profile__photo__container">
//             <img src={profileheader} alt="" className="profile__photo" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ? test 2 for meta certification
// ? working
import React, {  useState, } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import { profileheader } from "../../images";
import Facts from "./Facts";
import "./Header.css";
import { useScreenSize } from "../../customHooks";
import useHeaderAnimation from "./useHeaderAnimation";

const Header = ({ setShowCertificates }) => {
  const hanldeShowCertificates = () => {
    setShowCertificates(true);
  };
  const { firstTextRef, secondTextRef, metaRef, nameRef, container } =
    useHeaderAnimation();

  const { showCursor, setShowCursor } = useScreenSize();
  const [isOn, setIsOn] = useState(false);

  const handleMouseEnter = () => {
    if (!isOn && !showCursor) {
      setShowCursor(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isOn && showCursor) {
      setShowCursor(false);
    } else if (isOn && showCursor) {
      setShowCursor(true);
    }
  };

  const handleCursorClick = () => {
    // setShowCursor(!showCursor);
    setIsOn(!isOn);
  };

  // const container = useRef();
  // gsap.registerPlugin(useGSAP);
  // // const timeline = gsap.timeline();

  // useGSAP(
  //   () => {
  //     gsap.fromTo(
  //       ".profile__photo__container",
  //       {
  //         scale: 0.5,
  //         duration: 1,
  //         opacity: 0.5,
  //       },
  //       {
  //         scale: 1,
  //         duration: 1,
  //         ease: "sine.in",
  //         opacity: 1,
  //       }
  //     );
  //     gsap.from(".intro__text", {
  //       fontSize: 100,
  //       duration: 1,
  //       delay: 1,
  //       ease: "sine.in",
  //     });
  //     const timeline = gsap.timeline();
  //     timeline
  //       .from(".header__info__top", {
  //         opacity: 0,
  //       })
  //       .from(".header__title", {
  //         opacity: 0,
  //         y: -30,
  //       })
  //       .from(".header__decription", {
  //         opacity: 0,
  //       })
  //       .from(".btn", {
  //         x: -40,
  //         opacity: 0,
  //         stagger: 0.5,
  //       });
  //   },
  //   { scope: container }
  // );

  // const [showSecondText, setShowSecondText] = useState(false);
  // const [show, setShow] = useState(false);
  // const firstTextRef = useRef(null);
  // const secondTextRef = useRef(null);
  // const metaRef = useRef(null);
  // const nameRef = useRef(null);

  // useEffect(() => {
  //   const animateText = () => {
  //     const firstEl = firstTextRef.current;
  //     const secondEl = secondTextRef.current;
  //     const metaEl = metaRef.current;
  //     const nameEl = nameRef.current;

  //     if (showSecondText) {
  //       gsap.to(metaEl, {
  //         delay: 2,
  //         duration: 1,
  //         opacity: 0,
  //         ease: "power4",
  //         onComplete: () => {
  //           gsap.set(metaEl, { display: "none" });
  //           gsap.set(nameEl, {
  //             display: "block",
  //             opacity: 0,
  //           });
  //           gsap.to(nameEl, {
  //             duration: 1,
  //             opacity: 1,
  //             ease: "power2.out",
  //           });
  //         },
  //       });

  //       gsap.to(secondEl, {
  //         duration: 1,
  //         rotationX: 60,
  //         scale: 0.8,
  //         opacity: 0,
  //         ease: "power2",
  //         onComplete: () => {
  //           gsap.set(secondEl, { display: "none" });
  //           gsap.set(firstEl, {
  //             display: "block",
  //             rotationX: 60,
  //             scale: 1.1,
  //           });
  //           gsap.to(firstEl, {
  //             scale: 1,
  //             duration: 1,
  //             rotationX: 0,
  //             opacity: 1,
  //             ease: "power1",
  //           });
  //         },
  //       });
  //     } else {
  //       gsap.to(nameEl, {
  //         delay: 1.5,
  //         duration: 1,
  //         opacity: 0,
  //         ease: "power2",
  //         onComplete: () => {
  //           gsap.set(nameEl, { display: "none" });
  //           gsap.set(metaEl, {
  //             display: "block",
  //             opacity: 0,
  //             y: -40,
  //           });
  //           gsap.to(metaEl, {
  //             y: 0,
  //             duration: 1,
  //             opacity: 1,
  //             ease: "bounce",
  //           });
  //         },
  //       });

  //       gsap.to(firstEl, {
  //         duration: 1,
  //         opacity: 0,
  //         rotationX: 50,
  //         scale: 0.75,
  //         ease: "power1",
  //         onComplete: () => {
  //           gsap.set(firstEl, { display: "none" });
  //           gsap.set(secondEl, {
  //             display: "block",
  //             rotationX: 60,
  //             opacity: 0,
  //             scale: 1.25,
  //           });
  //           gsap.to(secondEl, {
  //             scale: 1,
  //             duration: 1,
  //             rotationX: 0,
  //             opacity: 1,
  //             ease: "power1",
  //           });
  //         },
  //       });
  //     }
  //   };
  //   if (show) {
  //     animateText();
  //   }
  // }, [showSecondText, show]);

  // useEffect(() => {
  //   if (show) {
  //     const intervelId = setInterval(() => {
  //       setShowSecondText((prev) => !prev);
  //     }, 10000);
  //     return () => clearInterval(intervelId);
  //   }
  // }, [show]);

  // useEffect(() => {
  //   const intervelId = setTimeout(() => {
  //     setShow(true);
  //   }, 10000);
  //   return () => clearTimeout(intervelId);
  // }, []);

  return (
    <header id="header" className="blur-effect" ref={container}>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top hidden" ref={metaRef}>
              I'M A<span className="color__primary"> META </span>
              CERTIFIED
            </div>
            <div className="header__info__top " ref={nameRef}>
              Hello There! I'm{" "}
              <span className="color__primary">N Prasanth Kumar</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                <span className="primary__title__span" ref={firstTextRef}>
                  I'M A WEB
                </span>
                <span
                  className="primary__title__span hidden"
                  ref={secondTextRef}
                >
                  FRONT-END
                </span>
                DEVELOPER
              </h1>
              <p className="header__decription text__muted">
                "I build intuitive web applications, turning complex
                requirements into seamless user experiences."
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <button className="btn" onClick={hanldeShowCertificates}>
                Certificates & CV
              </button>

              <button
                // className="btn"
                className={showCursor && isOn ? "btn btn__primary" : "btn"}
                onClick={handleCursorClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ cursor: showCursor ? "crosshair" : "auto" }}
              >
                {/* Email Me */}
                Set Cursor
              </button>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profileheader} alt="" className="profile__photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
