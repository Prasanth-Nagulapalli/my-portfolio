import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    useMemo,
  } from 'react';
  
  const ScreenSizeContext = createContext();
  
  const ScreenSizeProvider = ({ children }) => {
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
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
  
    const contextValue = useMemo(() => ({ screenSize }), [screenSize]);
  
    return (
      <ScreenSizeContext.Provider value={contextValue}>
        {children}
      </ScreenSizeContext.Provider>
    );
  };
  
  export const useScreenSize = () => useContext(ScreenSizeContext);
  
  export default ScreenSizeProvider;
  