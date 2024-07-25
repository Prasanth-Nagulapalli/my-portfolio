import React, { useState } from "react";
import { profileHeader } from "../../images";
import Facts from "./Facts";
import "./Header.css";
import { useScreenSize } from "../../customHooks";
import useHeaderAnimation from "./useHeaderAnimation";
const Header = ({ setShowCertificates }) => {
  const { firstTextRef, secondTextRef, metaRef, nameRef, container } =
    useHeaderAnimation();

  const { showCursor, setShowCursor } = useScreenSize();
  const [isOn, setIsOn] = useState(false);

  const handleShowCertificates = () => {
    setShowCertificates(true);
  };

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
    setIsOn(!isOn);
  };

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
                I build intuitive web applications, turning complex
                requirements into seamless user experiences.
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <ButtonsGroup
                handleShowCertificates={handleShowCertificates}
                showCursor={showCursor}
                isOn={isOn}
                handleCursorClick={handleCursorClick}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profileHeader} alt="" className="profile__photo" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

const ButtonsGroup = ({
  handleShowCertificates,
  showCursor,
  isOn,
  handleCursorClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { screenWidth } = useScreenSize().screenSize;
  return (
    <>
      <button className="btn" onClick={handleShowCertificates}>
        CV & Credentials
      </button>
      {screenWidth >= 850 ? (
        <button
          className={showCursor && isOn ? "btn btn__primary" : "btn"}
          onClick={handleCursorClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: showCursor ? "crosshair" : "auto" }}
        >
          Set Cursor
        </button>
      ) : (
        <a
          className="btn2 btn btn__primary"
          href="mailto:prasanth.ragava@gmail.com"
        >
          {" "}
          Email Me
        </a>
      )}
    </>
  );
};
