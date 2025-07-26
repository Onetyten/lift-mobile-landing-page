

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/s25.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="S_Pen_Ball_29" position={[-0.032, 0.025, 0]}>
                <group name="S_Pen_Tip_27" position={[-0.001, -0.102, 0]}>
                  <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.S_Pen_Tip} />
                </group>
                <group name="S_Pen_Tip_2_28" position={[-0.001, -0.102, 0]}>
                  <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.S_Pen_Tip_2} />
                </group>
                <group name="S_Pen_Body_25" position={[-0.001, -0.053, 0]}>
                  <mesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.S_Pen_Body} />
                </group>
                <group name="S_Pen_Button_26" position={[-0.001, -0.053, 0]}>
                  <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials.S_Pen_Body} />
                </group>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.S_Pen_Ball} />
              </group>
              <group name="BackCam_Frame_1_0" position={[0, -0.081, 0.004]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.BackCam_Frame_1} />
              </group>
              <group name="Usb_1_1" position={[0, -0.081, 0.004]}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Usb_1} />
              </group>
              <group name="Usb_2_2" position={[0, -0.081, 0.004]}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.Usb_2} />
              </group>
              <group name="BackCam_Frame_2_3" position={[0, -0.081, 0.004]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.BackCam_Frame_2} />
              </group>
              <group name="Antenna_Plastic_4" position={[0, -0.081, 0.004]}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Antenna_Plastic} />
              </group>
              <group name="Black_Hole_5" position={[0, -0.081, 0.004]}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Black_Hole} />
              </group>
              <group name="Rearcase_6" position={[0, -0.081, 0.004]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Rearcase} />
              </group>
              <group name="Front_Cam_7" position={[0, -0.081, 0.004]}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Front_Cam} />
              </group>
              <group name="Front_Cam_Body_8" position={[0, -0.081, 0.004]}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.Front_Cam_Body} />
              </group>
              <group name="Display_ActiveArea_9" position={[0, -0.081, 0.004]}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.Display_ActiveArea} />
              </group>
              <group name="Camera_Hole_Glass_10" position={[0, -0.081, 0.004]}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials.Camera_Hole_Glass} />
              </group>
              <group name="Bezel_11" position={[0, -0.081, 0.004]}>
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials.Bezel} />
              </group>
              <group name="BackCover_In_12" position={[0, -0.081, 0.004]}>
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.BackCover_In} />
              </group>
              <group name="Flash_13" position={[0, -0.081, 0.004]}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.Flash} />
              </group>
              <group name="SAMSUNG_LOGO_14" position={[0, -0.081, 0.004]}>
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials.SAMSUNG_LOGO} />
              </group>
              <group name="BackCam_15" position={[0, -0.081, 0.004]}>
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.BackCam} />
              </group>
              <group name="BackCam_Body_16" position={[0, -0.081, 0.004]}>
                <mesh name="Object_36" geometry={nodes.Object_36.geometry} material={materials.BackCAM_Body} />
              </group>
              <group name="BackCam_2_17" position={[0, -0.081, 0.004]}>
                <mesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.BackCam_2} />
              </group>
              <group name="BackCover_Glass_18" position={[0, -0.081, 0.004]} scale={0.001}>
                <mesh name="Object_40" geometry={nodes.Object_40.geometry} material={materials.BackCover_Glass} />
              </group>
              <group name="BackCam_Body_2_19" position={[0, -0.081, 0.004]}>
                <mesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.BackCAM_Body_2} />
              </group>
              <group name="BackCam_Mt_20" position={[0, -0.081, 0.004]}>
                <mesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.BackCam_Mt} />
              </group>
              <group name="BackCam_Mt_2_21" position={[0, -0.081, 0.004]}>
                <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.BackCam_Mt_2} />
              </group>
              <group name="BackCam_Glass_22" position={[0, -0.081, 0.004]}>
                <mesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.BackCam_Glass} />
              </group>
              <group name="Flach_Glass_23" position={[0, -0.081, 0.004]} scale={0.001}>
                <mesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.Flash_Glass} />
              </group>
              <group name="BackCover_Glass_2_24" position={[0, -0.081, 0.004]} scale={0.001}>
                <mesh name="Object_52" geometry={nodes.Object_52.geometry} material={materials.BackCover_Glass_2} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/s25.gltf')
