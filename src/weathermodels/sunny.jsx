import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Sunny(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./assets/sunny.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="9896ea5d39d24b17bddeeb2d2b15c82afbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Sphere"
                  position={[-900, 350, 300]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={-299.54}
                >
                  <mesh
                    name="Sphere_sun_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_sun_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group
                  name="Cloud"
                  position={[-124.1, 49.94, 308.52]}
                  rotation={[-Math.PI / 2, 0, 1.34]}
                  scale={100}
                >
                  <mesh
                    name="Cloud__0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cloud__0.geometry}
                    material={materials.Cloud__0}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/sunny.glb");


