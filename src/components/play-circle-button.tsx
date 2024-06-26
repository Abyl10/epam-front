import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { useDrawer } from "@/context/drawer-context";

interface IPlayCircleButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  className?: string;
  locked?: boolean;
}

const PlayCircleButton: React.FC<IPlayCircleButtonProps> = ({
  title,
  locked = true,
  className,
  ...props
}) => {
  const { openDrawer } = useDrawer();
  return (
    <button
      className={cn(
        "rounded-full w-[71px] h-[71px] bg-[#D9D9D9] relative flex items-center justify-center",
        className
      )}
      onClick={() => !locked && openDrawer()}
      {...props}
    >
      <div
        className={cn(
          "rounded-full w-[62px] h-[62px] flex items-center justify-center",
          !locked ? "bg-[#613BE7]" : "bg-[#969696]"
        )}
      >
        <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center">
          {!locked ? (
            <Icons.play className="pl-1" />
          ) : (
            <Icons.locked className="" />
          )}
        </div>
      </div>
      <div
        className={cn(
          "absolute -bottom-7 py-1 px-3 bg-white rounded-lg text-sm font-semibold text-center leading-4",
          !locked ? "text-[#613BE7]" : "text-[#969696]"
        )}
      >
        {title}
      </div>
    </button>
  );
};

export default PlayCircleButton;
