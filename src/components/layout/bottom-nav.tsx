"use client";
import { Link } from "react-router-dom";
import useNavigation from "@/hook/use-navigation";
import { Icons } from "../icons";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const { isHomeActive, isReadingActive, isVoiceActive, isProfileActive } =
    useNavigation();
  return (
    <div className="fixed bottom-0 w-full py-4 border-t mx-auto bg-white max-w-screen-sm shadow-lg">
      <div className="flex flex-row justify-around bg-white w-full items-center">
        <Link to="/" className="relative items-center flex flex-col">
          {isHomeActive ? (
            <Icons.homeActive className="w-6 h-6" />
          ) : (
            <Icons.home className="w-6 h-6" />
          )}
          <div
            className={cn(
              "text-xs mt-1",
              isHomeActive && "bg-[#3A94E7] w-1.5 h-1.5 rounded-full"
            )}
          ></div>
        </Link>
        <Link to="/reading" className="relative items-center flex flex-col">
          {isReadingActive ? (
            <Icons.readingActive className="w-6 h-6" />
          ) : (
            <Icons.reading className="w-6 h-6" />
          )}
          <div
            className={cn(
              "text-xs mt-1",
              isReadingActive && "bg-[#3A94E7] w-1.5 h-1.5 rounded-full"
            )}
          ></div>
        </Link>
        <Link to="/voice" className="relative items-center flex flex-col">
          {isVoiceActive ? (
            <Icons.voiceActive className="w-6 h-6" />
          ) : (
            <Icons.voice className="w-6 h-6" />
          )}
          <div
            className={cn(
              "text-xs mt-1",
              isVoiceActive && "bg-[#3A94E7] w-1.5 h-1.5 rounded-full"
            )}
          ></div>
        </Link>
        <Link to="/profile" className="relative items-center flex flex-col">
          {isProfileActive ? (
            <Icons.profileActive className="w-6 h-6" />
          ) : (
            <Icons.profile className="w-6 h-6" />
          )}
          <div
            className={cn(
              "text-xs mt-1",
              isProfileActive && "bg-[#3A94E7] w-1.5 h-1.5 rounded-full"
            )}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
