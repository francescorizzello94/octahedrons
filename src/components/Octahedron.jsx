import React from "react";
import { useRef, useState } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { useControl, Controls } from "react-three-gui";
extend({useControl})


const Octahedron = (props) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const rotationX = useControl("Rotation X", { type: "number" });
  const rotationY = useControl("Rotation Y", { type: "number" });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
      rotation-x={rotationX}
      rotation-y={rotationY}
    >
      <octahedronBufferGeometry attach="geometry" args={[1, 2, 2]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "silver" : "orange"}
        wireframe
      />
    </mesh>
  );
};

export default function OctahedronApp() {
  return (
    <Controls.Provider>
      <Controls.Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Octahedron position={[-2.2, 0, 0]} />
        <Octahedron position={[2.2, 0, 0]} />
      </Controls.Canvas>
      <Controls />
    </Controls.Provider>
  );
}
