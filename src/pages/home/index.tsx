import React, { useState, useRef } from "react";
import HomeBackground from "@/assets/images/home-background.png";
import PlayCircleButton from "@/components/play-circle-button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { AcademicBeginner } from "./drawers/academic-beginner";
import { AcademicMedium } from "./drawers/academic-medium";

interface ImageStyles {
  transform: string;
  backgroundImage: string;
  backgroundSize: string;
}

const imageStyleInitialValue: ImageStyles = {
  transform: "translate(0px, 0px)",
  backgroundImage: HomeBackground,
  backgroundSize: "cover",
};

export default function Home() {
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [imageStartPos, setImageStartPos] = useState([0, 0]);
  const [imageStyles, setImageStyles] = useState<ImageStyles>(
    imageStyleInitialValue
  );
  const containerRef = useRef<HTMLDivElement>(null);

  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  const handleOpenDrawer = (drawerId: string) => {
    setOpenDrawer(drawerId);
  };

  const handleDragImage = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && containerRef.current) {
      const deltaX = e.clientX - startPoint.x;
      const deltaY = e.clientY - startPoint.y;

      // Calculate potential new position
      const newPosX = imageStartPos[0] + deltaX;
      const newPosY = imageStartPos[1] + deltaY;

      // Calculate boundaries
      const maxX = 0;
      const maxY = 0;
      const minX = containerRef.current.clientWidth - 1000; // Assuming image width is 1000px
      const minY = containerRef.current.clientHeight - 800; // Assuming image height is 800px

      // Enforce boundaries
      const boundedX = Math.max(Math.min(newPosX, maxX), minX);
      const boundedY = Math.max(Math.min(newPosY, maxY), minY);

      setImageStyles({
        ...imageStyles,
        transform: `translate(${boundedX}px, ${boundedY}px)`,
      });
    }
  };

  const handleStartDragImage = (e: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    const transformStyles = imageStyles.transform.match(/-?\d+px/g);
    if (transformStyles) {
      const currentTransform = transformStyles.map((value) => parseInt(value));
      setImageStartPos(currentTransform);
    }
    setStartPoint({ x: e.clientX, y: e.clientY });
  };

  const handleEndDragImage = () => {
    setDragging(false);
  };

  return (
    <Drawer>
      <div
        ref={containerRef}
        onMouseMove={handleDragImage}
        onMouseLeave={handleEndDragImage}
        onMouseUp={handleEndDragImage}
        onMouseDown={handleStartDragImage}
        style={{
          width: "100%",
          height: "100vh",
          cursor: dragging ? "grabbing" : "grab",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            transform: imageStyles.transform,
            width: "1000px",
            // height: "800px",
            height: "100vh",
            position: "absolute",
            left: "50%",
            top: "50%",
            transformOrigin: "center center",
            marginLeft: "-320px",
            marginTop: "-470px",
            backgroundImage: `url(${imageStyles.backgroundImage})`,
            objectFit: "contain",
            backgroundSize: imageStyles.backgroundSize,
            backgroundRepeat: "no-repeat",
          }}
        >
          <DrawerTrigger>
            <PlayCircleButton
              title="Академический Казахский I"
              className="absolute top-[75%] left-[20%] text-white"
              locked={false}
              onClick={() => handleOpenDrawer("academic-beginner")}
            />
          </DrawerTrigger>
          <DrawerTrigger>
            <PlayCircleButton
              title="Академический Казахский II"
              className="absolute top-[54%] left-[33%] text-white"
              locked={false}
              onClick={() => handleOpenDrawer("academic-medium")}
            />
          </DrawerTrigger>
          <PlayCircleButton
            title="Академический Казахский III"
            className="absolute top-[25%] left-[20%] text-white"
          />
          <PlayCircleButton
            title="Инженерный Казахский I"
            className="absolute top-[83%] left-[40%] text-white"
          />
          <PlayCircleButton
            title="Инженерный Казахский II"
            className="absolute top-[75%] left-[57%] text-white"
          />

          <PlayCircleButton
            title="Инженерный Казахский III"
            className="absolute top-[54%] left-[70%] text-white"
          />

          <PlayCircleButton
            title="Бизнес Казахский III"
            className="absolute top-[60%] left-[91%] text-white"
          />

          <PlayCircleButton
            title="Бизнес Казахский IV"
            className="absolute top-[28%] left-[78%] text-white"
          />

          <PlayCircleButton
            title="Окылым I"
            className="absolute top-[58%] left-[47%] text-white"
          />
          <PlayCircleButton
            title="Окылым II"
            className="absolute top-[32%] left-[47%] text-white"
          />

          <DrawerContent>
            {openDrawer === "academic-beginner" && <AcademicBeginner />}
            {openDrawer === "academic-medium" && <AcademicMedium />}
          </DrawerContent>
        </div>
      </div>
    </Drawer>
  );
}
