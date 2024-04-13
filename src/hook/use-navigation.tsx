import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const useNavigation = () => {
  const pathname = useLocation();
  const [isHomeActive, setIsHomeActive] = useState<boolean>(true);
  const [isProfileActive, setIsProfileActive] = useState<boolean>(false);
  const [isReadingActive, setIsReadingActive] = useState<boolean>(false);
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsReadingActive(false);
    setIsVoiceActive(false);
    setIsProfileActive(false);
    switch (pathname.pathname) {
      case "/":
        setIsHomeActive(true);
        break;
      case "/reading":
        setIsReadingActive(true);
        break;
      case "/voice":
        setIsVoiceActive(true);
        break;
      case "/profile":
        setIsProfileActive(true);
        break;
      default:
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isReadingActive,
    isVoiceActive,
    isProfileActive,
  };
};

export default useNavigation;
