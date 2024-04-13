// import React, { useState, useRef } from "react";
// import HomeBackground from "@/assets/images/home-background.png";

// interface ImageStyles {
//   backgroundImage: string;
//   backgroundPosition: string;
//   backgroundSize: string;
// }

// const imageStyleInitialValue: ImageStyles = {
//   backgroundImage: HomeBackground,
//   backgroundPosition: "0 0",
//   backgroundSize: "cover",
// };

// export default function Home() {
//   const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
//   const [dragging, setDragging] = useState(false);
//   const [imageStartPos, setImageStartPos] = useState([0, 0]);
//   const [imageStyles, setImageStyles] = useState<ImageStyles>(
//     imageStyleInitialValue
//   );
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleDragImage = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (dragging) {
//       const deltaX = e.clientX - startPoint.x;
//       const deltaY = e.clientY - startPoint.y;

//       const newPosX = imageStartPos[0] + deltaX;
//       const newPosY = imageStartPos[1] + deltaY;

//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const containerHeight = containerRef.current.offsetHeight;

//         const imageWidth = 1000;
//         const imageHeight = 800;

//         // Boundary checks
//         const minX = Math.min(0, containerWidth - imageWidth);
//         const maxX = 0;
//         const minY = Math.min(0, containerHeight - imageHeight);
//         const maxY = 0;

//         // Apply boundaries
//         const boundedX = Math.min(Math.max(minX, newPosX), maxX);
//         const boundedY = Math.min(Math.max(minY, newPosY), maxY);

//         setImageStyles({
//           ...imageStyles,
//           backgroundPosition: `${boundedX}px ${boundedY}px`,
//         });
//       }
//     }
//   };

//   const handleStartDragImage = (e: React.MouseEvent<HTMLDivElement>) => {
//     setDragging(true);
//     const backgroundPosArray = imageStyles.backgroundPosition
//       .split(" ")
//       .map((value) => parseInt(value, 10));
//     setImageStartPos(backgroundPosArray);
//     setStartPoint({ x: e.clientX, y: e.clientY });
//   };

//   const handleEndDragImage = () => {
//     setDragging(false);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleDragImage}
//       onMouseLeave={handleEndDragImage}
//       onMouseUp={handleEndDragImage}
//       onMouseDown={handleStartDragImage}
//       style={{
//         width: "100%",
//         height: "100vh",
//         backgroundImage: `url(${imageStyles.backgroundImage})`,
//         backgroundPosition: imageStyles.backgroundPosition,
//         backgroundSize: imageStyles.backgroundSize,
//         backgroundRepeat: "no-repeat",
//         cursor: dragging ? "grabbing" : "grab",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     ></div>
//   );
// }

// import React, { useState, useRef } from "react";
// import HomeBackground from "@/assets/images/home-background.png";

// interface ImageStyles {
//   transform: string;
//   backgroundImage: string;
//   backgroundSize: string;
//   backgroundPosition?: string;
// }

// const imageStyleInitialValue: ImageStyles = {
//   transform: "translate(0px, 0px)",
//   backgroundImage: HomeBackground,
//   backgroundSize: "cover",
//   backgroundPosition: "0 0",
// };

// export default function Home() {
//   const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
//   const [dragging, setDragging] = useState(false);
//   const [imageStartPos, setImageStartPos] = useState([0, 0]);
//   const [imageStyles, setImageStyles] = useState<ImageStyles>(
//     imageStyleInitialValue
//   );
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleDragImage = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (dragging && containerRef.current) {
//       const deltaX = e.clientX - startPoint.x;
//       const deltaY = e.clientY - startPoint.y;

//       // Calculate new position
//       const newPosX = imageStartPos[0] + deltaX;
//       const newPosY = imageStartPos[1] + deltaY;

//       if (containerRef.current) {
//         const containerWidth = containerRef.current.offsetWidth;
//         const containerHeight = containerRef.current.offsetHeight;

//         const imageWidth = 1000;
//         const imageHeight = 800;

//         // Boundary checks
//         const minX = Math.min(0, containerWidth - imageWidth);
//         const maxX = 0;
//         const minY = Math.min(0, containerHeight - imageHeight);
//         const maxY = 0;

//         // Apply boundaries
//         const boundedX = Math.min(Math.max(minX, newPosX), maxX);
//         const boundedY = Math.min(Math.max(minY, newPosY), maxY);
//         setImageStyles({
//           ...imageStyles,
//           transform: `translate(${newPosX}px, ${newPosY}px)`,
//           backgroundPosition: `${boundedX}px ${boundedY}px`,
//         });
//       }
//     }
//   };

//   const handleStartDragImage = (e: React.MouseEvent<HTMLDivElement>) => {
//     setDragging(true);

//     const transformMatch = imageStyles.transform.match(/-?\d+/g);
//     if (transformMatch) {
//       setImageStartPos([
//         parseInt(transformMatch[0], 10), // Parse current X transform
//         parseInt(transformMatch[1], 10), // Parse current Y transform
//       ]);
//     }
//     // setImageStartPos([
//     //   parseInt(imageStyles.transform.match(/-?\d+/g)[0], 10), // Parse current X transform
//     //   parseInt(imageStyles.transform.match(/-?\d+/g)[1], 10), // Parse current Y transform
//     // ]);
//     setStartPoint({ x: e.clientX, y: e.clientY });
//   };

//   const handleEndDragImage = () => {
//     setDragging(false);
//   };

//   return (
//     <div
//       ref={containerRef}
//       onMouseMove={handleDragImage}
//       onMouseLeave={handleEndDragImage}
//       onMouseUp={handleEndDragImage}
//       onMouseDown={handleStartDragImage}
//       style={{
//         width: "100%",
//         height: "100vh",
//         cursor: dragging ? "grabbing" : "grab",
//         overflow: "hidden",
//         position: "relative",
//         backgroundPosition: imageStyles.backgroundPosition,
//       }}
//     >
//       <div
//         style={{
//           transform: imageStyles.transform,
//           width: "1000px", // Set this to the actual image width
//           height: "800px", // Set this to the actual image height
//           position: "absolute",
//           left: "50%",
//           top: "50%",
//           transformOrigin: "center center",
//           marginLeft: "-500px", // Half of the width
//           marginTop: "-400px", // Half of the height
//           backgroundImage: `url(${imageStyles.backgroundImage})`,
//           objectFit: "cover",
//           backgroundSize: imageStyles.backgroundSize,
//           backgroundRepeat: "no-repeat",
//         }}
//       >
//         <button
//           style={{
//             position: "absolute",
//             top: "20%",
//             left: "20%",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#007bff",
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Button 1
//         </button>
//         <button
//           style={{
//             position: "absolute",
//             top: "40%",
//             left: "40%",
//             padding: "10px",
//             borderRadius: "5px",
//             border: "none",
//             backgroundColor: "#28a745",
//             color: "white",
//             cursor: "pointer",
//           }}
//         >
//           Button 2
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import HomeBackground from "@/assets/images/home-background.png";
import { Button } from "@/components/ui/button";

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
          height: "850px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transformOrigin: "center center",
          marginLeft: "-320px", // Half of the width
          marginTop: "-400px", // Half of the height
          backgroundImage: `url(${imageStyles.backgroundImage})`,
          objectFit: "contain",
          backgroundSize: imageStyles.backgroundSize,
          backgroundRepeat: "no-repeat",
        }}
      >
        <Button className="absolute top-[54%] left-[33%] bg-blue-500 text-white "></Button>
        <button
          style={{
            position: "absolute",
            top: "20%",
            left: "20%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Button 1
        </button>
        <button
          style={{
            position: "absolute",
            top: "40%",
            left: "40%",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            cursor: "pointer",
          }}
        >
          Button 2
        </button>
      </div>
    </div>
  );
}
