import React from "react";
import "./CustomCursor.css";
import { useScreenSize } from "../../customHooks";
const CustomCursor = () => {
  const { position } = useScreenSize();

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setPosition({ x: event.clientX , y: event.clientY });
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);

  //   // Clean up
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div
      className="custom__cursor"
      style={{
        transform: `translateX(${position.x - 50}px) translateY(${
          position.y - 50
        }px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
