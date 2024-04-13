import React, { useState, useRef } from "react";
import HomeBackground from "@/assets/images/home-background.png";
import PlayCircleButton from "@/components/play-circle-button";

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
          marginTop: "-400px",
          backgroundImage: `url(${imageStyles.backgroundImage})`,
          objectFit: "contain",
          backgroundSize: imageStyles.backgroundSize,
          backgroundRepeat: "no-repeat",
        }}
      >
        <PlayCircleButton
          title="Академический Казахский I"
          className="absolute top-[75%] left-[20%] text-white"
          locked={false}
        />
        <PlayCircleButton
          title="Академический Казахский II"
          className="absolute top-[54%] left-[22%] text-white"
        />
        <PlayCircleButton
          title="Академический Казахский III"
          className="absolute top-[25%] left-[20%] text-white"
        />

        <PlayCircleButton
          title="Инженерный Казахский I"
          className="absolute top-[75%] left-[60%] text-white"
        />
        <PlayCircleButton
          title="Инженерный Казахский II"
          className="absolute top-[55%] left-[90%] text-white"
        />
        <PlayCircleButton
          title="Инженерный Казахский III"
          className="absolute top-[25%] left-[70%] text-white"
        />

        <PlayCircleButton
          title="Бизнес Казахский III"
          className="absolute top-[25%] left-[40%] text-white"
        />
        <PlayCircleButton
          title="Бизнес Казахский II"
          className="absolute top-[55%] left-[45%] text-white"
        />
        <PlayCircleButton
          title="Бизнес Казахский I"
          className="absolute top-[75%] left-[35%] text-white"
        />
      </div>
    </div>
  );
}
