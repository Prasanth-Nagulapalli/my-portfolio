import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useScreenSize } from "./index";

const useHoverImage = () => {
  const imageRef = useRef(null);
  const { showCursor, position } = useScreenSize();
  const handleMouseEnterImg = () => {
    if (showCursor) {
      gsap.fromTo(
        imageRef.current,
        {
          filter: "blur(15px) contrast(400%)",
          scaleX: 1.8,
          opacity: 0.5,
        },
        {
          filter: "blur(0) contrast(100%)",
          opacity: 0.8,
          scale: 1,
          duration: 0.2,
        }
      );
    }
  };

  const handleMouseLeaveImg = () => {
    gsap.to(imageRef.current, {
      filter: "blur(5px) contrast(400%)",
      scaleX: 1.8,
      opacity: 0,
    });
  };

  useEffect(() => {
    gsap.set(imageRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(imageRef.current, "x", {
      duration: 0.2,
      ease: "power2",
    });
    const yTo = gsap.quickTo(imageRef.current, "y", {
      duration: 0.2,
      ease: "power2",
    });
    const container = imageRef.current.parentElement;

    // if (getComputedStyle(container).position === "static") {
    //   container.style.position = "relative"
    // }else{
    //     container.style.zIndex = 2;

    // }

    const rect = container.getBoundingClientRect();
    const x = position.x - rect.left;
    const y = position.y - rect.top;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const clampedY = Math.max(0, Math.min(y, rect.height));
    xTo(clampedX);
    yTo(clampedY);
  }, [position.x, position.y, imageRef]);

  return {
    imageRef,
    handleMouseEnterImg,
    handleMouseLeaveImg,
  };
};

export default useHoverImage;
