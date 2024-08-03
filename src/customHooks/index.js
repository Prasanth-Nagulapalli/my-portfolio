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
  const [refreshScroll, setRefreshScroll] = useState(true);

  const [showCursor, setShowCursor] = useState(true);

  const [screenSize, setScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    documentHeight: document.documentElement.scrollHeight,
  });

  const handleResize = useCallback(() => {
    setScreenSize({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight,
    });
  }, []);

  // useEffect(() => {
  //   setRefreshScroll(!refreshScroll);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [screenSize]);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, [handleResize]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    const observer = new MutationObserver(() => {
      handleResize();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
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

  // cursor move positions

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // cursor move positions close

  const contextValue = useMemo(
    () => ({
      screenSize,
      showCursor,
      setShowCursor,
      position,
      setPosition,
      refreshScroll,
      setRefreshScroll,
    }),
    [
      screenSize,
      showCursor,
      setShowCursor,
      position,
      setPosition,
      refreshScroll,
      setRefreshScroll,
    ]
  );

  return (
    <ScreenSizeContext.Provider value={contextValue}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = () => useContext(ScreenSizeContext);

export default ScreenSizeProvider;
