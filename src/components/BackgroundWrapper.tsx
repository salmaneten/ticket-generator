import React, { useEffect, useState } from 'react';
import patternSquigglyLineTop from "../assets/pattern-squiggly-line-top.svg";
import patternSquigglyLineBottomDesktop from "../assets/pattern-squiggly-line-bottom-desktop.svg";
import patternSquigglyLineBottomMobile from "../assets/pattern-squiggly-line-bottom-mobile-tablet.svg";
import patternCircle from "../assets/pattern-circle.svg";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 430);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='min-h-screen w-full bg-[url("./assets/background-desktop.png")] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className='min-h-screen w-full bg-[url("./assets/pattern-lines.svg")] bg-cover bg-center bg-no-repeat relative'>
      <img
        src={patternSquigglyLineTop}
        alt="pattern squiggly line top"
        className="absolute top-[40px] right-0 max-[430px]:w-50 max-[430px]:h-16"
      />
      {!isMobile && (
        <img
          src={patternCircle}
          alt="pattern circle"
          className="absolute top-1/2 right-[26%]"
        />
      )}
        {children}
        
        {isMobile ? (
          <img
            src={patternSquigglyLineBottomMobile}
            alt="pattern squiggly line bottom mobile"
            className="absolute bottom-0 left-0 z-10 pointer-events-none w-[15rem] h-[11rem]"
          />
        ) : (
          <img
            src={patternSquigglyLineBottomDesktop}
            alt="pattern squiggly line bottom"
            className="absolute bottom-10 left-0"
          />
        )}
      </div>
    </div>
  );
};

export default BackgroundWrapper;
