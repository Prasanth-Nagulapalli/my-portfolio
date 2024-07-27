// import React, { useEffect, useRef } from "react";
// import "./CustomCursor.css";
// import { useScreenSize } from "../../customHooks";
// import gsap from "gsap";

// const CustomCursor = () => {
//   const { position, showCursor } = useScreenSize();
//   const cursorEl = useRef(null);

//   useEffect(() => {
//     const el = cursorEl.current;

//     gsap.set(el, { xPercent: -50, yPercent: -50 });

//     if (showCursor) {
//       // Set initial position when becoming visible
//       gsap.set(el, { x: position.x, y: position.y });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [showCursor]);

//   useEffect(() => {
//     if (position) {
//       const el = cursorEl.current;
//       const xTo = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3" });
//       const yTo = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3" });

//       xTo(position.x);
//       yTo(position.y);
//     }
//   }, [position]);

//   if (!showCursor) return null;

//   return <div className="custom__cursor" ref={cursorEl}></div>;
// };

// export default CustomCursor;



import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";
import { useScreenSize } from "../../customHooks";
import gsap from "gsap";

const CustomCursor = () => {
  const { position, showCursor } = useScreenSize();
  const cursorEl = useRef(null);

  useEffect(() => {
    const el = cursorEl.current;

    if (!el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50 });

    if (showCursor && position) {
      // Set initial position when becoming visible
      gsap.set(el, { x: position.x, y: position.y });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCursor]);

  useEffect(() => {
    if (position) {
      const el = cursorEl.current;
      if (!el) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.25, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.25, ease: "power3" });

      xTo(position.x);
      yTo(position.y);
    }
  }, [position]);

  if (!showCursor) return null;

  return <div className="custom__cursor" ref={cursorEl}></div>;
};

export default CustomCursor;
