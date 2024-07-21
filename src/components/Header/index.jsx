import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { profileheader } from "../../images";
import Facts from "./Facts";
import "./Header.css";
import { useScreenSize } from "../../customHooks";
const Header = ({setShowCertificates}) => {
  const { showCursor, setShowCursor } = useScreenSize();
  const [isOn, setIsOn] = useState(false);
  

  const hanldeShowCertificates = () => {
    setShowCertificates(true)
  }


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

  const container = useRef();
  gsap.registerPlugin(useGSAP);
  // const timeline = gsap.timeline();

  useGSAP(
    () => {
      gsap.fromTo(
        ".profile__photo__container",
        {
          scale: 0.5,
          duration: 1,
          opacity: 0.5,
        },
        {
          scale: 1,
          duration: 1,
          ease: "sine.in",
          opacity: 1,
        }
      );
      gsap.from(".intro__text", {
        fontSize: 100,
        duration: 1,
        delay: 1,
        ease: "sine.in",
      });
      const timeline = gsap.timeline();
      timeline
        .from(".header__info__top", {
          opacity: 0,
        })
        .from(".header__title", {
          opacity: 0,
          y: -30,
        })
        .from(".header__decription", {
          opacity: 0,
        })
        .from(".btn", {
          x: -40,
          opacity: 0,
          stagger: 0.5,
        });
    },
    { scope: container }
  );

  return (
    <header id="header" className="blur-effect" ref={container}>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm{" "}
              <span className="color__primary">N Prasanth Kumar</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                I'M A WEB DEVELOPER
              </h1>
              <p className="header__decription text__muted">
                "I build intuitive web applications, turning complex
                requirements into seamless user experiences."
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <button

                className="btn"
                onClick={hanldeShowCertificates}
              >
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
