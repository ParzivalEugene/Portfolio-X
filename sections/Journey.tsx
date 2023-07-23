"use client";

import Noodles from "@/components/Noodles";
import { Text } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Depth, LayerMaterial, Noise } from "lamina";
import * as THREE from "three";

const Journey = () => {
  return (
    <section className="">
      <div className="absolute left-0 h-screen w-screen">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
          <Bg />
          <Noodles />
          <Caption>{`Get ready\nfor\nthe journey`}</Caption>
          <Rig />
        </Canvas>
      </div>
    </section>
  );
};

function Caption({ children }) {
  const { width } = useThree((state) => state.viewport);
  return (
    <Text
      position={[0, 0, -5]}
      lineHeight={0.8}
      font="SpaceGrotesk-Bold.ttf"
      fontSize={width / 8}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
    >
      {children}
    </Text>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}

function Bg() {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="red"
          colorA="skyblue"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
        <Noise
          mapping="local"
          type="white"
          scale={1000}
          colorA="white"
          colorB="black"
          mode="subtract"
          alpha={0.2}
          attachArray={undefined}
          attachObject={undefined}
          attachFns={undefined}
        />
      </LayerMaterial>
    </mesh>
  );
}

export default Journey;
