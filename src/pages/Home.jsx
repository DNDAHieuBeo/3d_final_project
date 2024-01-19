import React from "react";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Island from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const[currentStage,setCurrentStage] = useState(0)
  const [isRotating, setIsRotating] = useState(false);
  const adjustIslandForScreenSize = () => {
    let screenPosition = [0, -6.5, -43];
    let screenScale = null;
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenPosition, screenScale;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const [isLandScale, isLandPosition, isLandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
    <div className="absolute top-28 left-0 right-0 z-10 items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-trasparent $ {isRotating ? 'cursor-grabing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight
            skycolor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Bird />
          <Sky isRotating={isRotating}/>
          <Island
            scale={isLandScale}
            position={isLandPosition}
            rotation={isLandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />

          
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
