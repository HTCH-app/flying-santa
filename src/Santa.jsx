import React from "react";
import { useGLTF } from "@react-three/drei";
import santaModel from './santa.glb'
import { forwardRef } from "react";

function Model(props) {
  const { nodes, materials } = useGLTF(santaModel);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes
            .Mesh1_Group7_Group6_Group5_Deer___Sleigh_1_1_Group4_Group3_Group2_Group1_Model
            .geometry
        }
        material={materials.PaletteMaterial001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes
            .Mesh2_Group8_Group6_Group5_Deer___Sleigh_1_1_Group4_Group3_Group2_Group1_Model
            .geometry
        }
        material={materials.Wood_Cherry_Original}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes
            .Mesh160_Group19_Group6_Group5_Deer___Sleigh_1_1_Group4_Group3_Group2_Group1_Model
            .geometry
        }
        material={materials.Wood_OSB}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes
            .Mesh311_Belt_Button_1_1_Harness_Collar_Group32_Gruppe_20_1_Group31_Group30_Group3_Group2_Group1_Model
            .geometry
        }
        material={materials.Cladding_Plaster_Rough}
      />
    </group>
  );
}

useGLTF.preload(santaModel);

export default forwardRef((props, ref) => <Model {...props} ref={ref} />);
