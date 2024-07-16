import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

const ScreenSizeContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const [showCursor, setShowCursor] = useState(true);

  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);


  useEffect(() => {
    const style = document.createElement("style");
    style.id = "customCursorStyle";
    document.head.appendChild(style);

    if (showCursor) {
      style.innerHTML = `
        html, body, *, *:hover, *:focus {
          cursor: crosshair !important;
        }
      `;
    } else {
      style.innerHTML = "";
    }

    // Cleanup on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, [showCursor]);



  const contextValue = useMemo(
    () => ({ screenSize, showCursor, setShowCursor }),
    [screenSize, showCursor, setShowCursor]
  );

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
