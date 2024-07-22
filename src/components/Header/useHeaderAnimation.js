import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useScreenSize } from "../../customHooks";

const useHeaderAnimation = () => {
//   const { showCursor, setShowCursor } = useScreenSize();
//   const [isOn, setIsOn] = useState(false);

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

  const [showSecondText, setShowSecondText] = useState(false);
  const [show, setShow] = useState(false);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const metaRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const animateText = () => {
      const firstEl = firstTextRef.current;
      const secondEl = secondTextRef.current;
      const metaEl = metaRef.current;
      const nameEl = nameRef.current;

      if (showSecondText) {
        gsap.to(metaEl, {
          delay: 2,
          duration: 1,
          opacity: 0,
          ease: "power4",
          onComplete: () => {
            gsap.set(metaEl, { display: "none" });
            gsap.set(nameEl, {
              display: "block",
              opacity: 0,
            });
            gsap.to(nameEl, {
              duration: 1,
              opacity: 1,
              ease: "power2.out",
            });
          },
        });

        gsap.to(secondEl, {
          duration: 1,
          rotationX: 60,
          scale: 0.8,
          opacity: 0,
          ease: "power2",
          onComplete: () => {
            gsap.set(secondEl, { display: "none" });
            gsap.set(firstEl, {
              display: "block",
              rotationX: 60,
              scale: 1.1,
            });
            gsap.to(firstEl, {
              scale: 1,
              duration: 1,
              rotationX: 0,
              opacity: 1,
              ease: "power1",
            });
          },
        });
      } else {
        gsap.to(nameEl, {
          delay: 1.5,
          duration: 1,
          opacity: 0,
          ease: "power2",
          onComplete: () => {
            gsap.set(nameEl, { display: "none" });
            gsap.set(metaEl, {
              display: "block",
              opacity: 0,
              y: -40,
            });
            gsap.to(metaEl, {
              y: 0,
              duration: 1,
              opacity: 1,
              ease: "bounce",
            });
          },
        });

        gsap.to(firstEl, {
          duration: 1,
          opacity: 0,
          rotationX: 50,
          scale: 0.75,
          ease: "power1",
          onComplete: () => {
            gsap.set(firstEl, { display: "none" });
            gsap.set(secondEl, {
              display: "block",
              rotationX: 60,
              opacity: 0,
              scale: 1.25,
            });
            gsap.to(secondEl, {
              scale: 1,
              duration: 1,
              rotationX: 0,
              opacity: 1,
              ease: "power1",
            });
          },
        });
      }
    };
    if (show) {
      animateText();
    }
  }, [showSecondText, show]);

  useEffect(() => {
    if (show) {
      const intervelId = setInterval(() => {
        setShowSecondText((prev) => !prev);
      }, 10000);
      return () => clearInterval(intervelId);
    }
  }, [show]);

  useEffect(() => {
    const intervelId = setTimeout(() => {
      setShow(true);
    }, 10000);
    return () => clearTimeout(intervelId);
  }, []);
  return {
    firstTextRef,
    secondTextRef,
    metaRef,
    nameRef,
    container,
  };
};

export default useHeaderAnimation;
