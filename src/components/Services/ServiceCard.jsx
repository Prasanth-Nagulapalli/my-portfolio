import React, { forwardRef, useEffect, useState } from "react";
import gsap from "gsap";
import { IoIosClose } from "react-icons/io";
import { useScreenSize } from "../../customHooks";
const ServiceCard = ({
  props,
  index,
  serviceRefs,
  visible,
  setVisible,
  viewPort,
  showMoreIndex,
  handleShowMore,
}) => {
  const { refreshScroll, setRefreshScroll } = useScreenSize();
  const [expanded, setExpanded] = useState(false);
  const { screenWidth } = useScreenSize().screenSize;

  useEffect(() => {
    setExpanded(false);
    setVisible(true);
    setRefreshScroll(!refreshScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewPort]);

  return (
    <>
      <CompactCard
        props={props}
        expanded={expanded}
        visible={visible}
        viewPort={viewPort}
        showMoreIndex={showMoreIndex}
        handleShowMore={handleShowMore}
        setExpanded={() => {
          setExpanded(true);
          setVisible(false);
          setRefreshScroll(!refreshScroll);
        }}
        ref={(el) => (serviceRefs.current[index] = el)}
      />

      {expanded && screenWidth > 1000 && (
        <ExpandedCard
          props={props}
          setExpanded={() => {
            setExpanded(false);
            setVisible(true);
            setRefreshScroll(!refreshScroll);
          }}
        />
      )}
    </>
  );
};

export default ServiceCard;

const CompactCard = forwardRef(
  ({ props, visible, setExpanded, showMoreIndex, handleShowMore }, ref) => {
    const { screenWidth } = useScreenSize().screenSize;

    return (
      <article
        className={`service CompactCard ${
          !visible ? "hide__service__card" : ""
        }`}
        ref={ref}
        style={{
          ...props.style,
        }}
      >
        <div className="service__top">
          {!showMoreIndex && (
            <div className="icon__container">{props.icon}</div>
          )}
          <h3 className="title">{props.title}</h3>
        </div>
        <div className="service__middle">
          <p
            className={`text__muted description ${
              showMoreIndex ? "remove__line__clamp" : ""
            }`}
          >
            {props.desc}
          </p>
        </div>
        <div className="service__bottom">
          <button
            className="btn btn__primary"
            onClick={screenWidth > 1000 ? setExpanded : handleShowMore}
          >
            {showMoreIndex ? "Show less" : "Read more"}
          </button>
        </div>
      </article>
    );
  }
);

const ExpandedCard = ({ props, setExpanded }) => {
  useEffect(() => {
    gsap.fromTo(
      ".ExpandedCard",
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.4, ease: "power1" }
    );
  }, []);

  const handleCollapse = () => {
    gsap.to(".ExpandedCard", {
      height: 0,
      opacity: 0, // Set opacity to 0 to hide the element completely
      duration: 0.4,
      ease: "power1",
      onComplete: setExpanded, // Call setExpanded after animation completes
    });
  };

  return (
    <div
      className="service expand__service ExpandedCard"
      style={props.style && props.style}
    >
      <div className="service__top">
        <div className="icon__container">{props.icon}</div>
        <h3 className="title">{props.title}</h3>
      </div>
      <div className="service__middle">
        <p className="text__muted description">{props.desc}</p>
      </div>
      <div className="expand__service__card__close">
        <IoIosClose onClick={handleCollapse} />
      </div>
    </div>
  );
};
