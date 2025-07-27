'use client'

import { useAnimations,useCursor,useGLTF } from "@react-three/drei";
import { useState,useRef,useEffect,useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; 




export default function S24Model() {
    const group = useRef<THREE.Group>(null!)
    const [hovered,setHovered] = useState(false)
    useCursor(hovered)
  
    const { nodes, materials, animations } = useGLTF('/3D model/s24/s24.gltf')
    useGLTF.preload("/3D model/s24/s24.gltf")
    const { actions } = useAnimations(animations, group)
  
    const [rotationProgress, setRotationProgress] = useState(0)
    const [isIntroDone, setIsIntroDone] = useState(false)

      const video = useMemo(()=>{
        const vid = document.createElement("video")
        vid.src = "/video/screenRecord.webm"
        vid.crossOrigin = "anonymous";
        vid.loop = true;
        vid.muted = true;
        // vid.playsInline = true;
        vid.autoplay = true;
        return vid;
    
      },[])
    
      const videoTexture = useMemo(()=>{
        const texture = new THREE.VideoTexture(video) as THREE.VideoTexture
        texture.flipY = false
        return texture
      },[video])
    
      useEffect(() => {
          const start = performance.now()
          const animate = (now: number) => {
          const elapsed = now - start
          const duration = 3000 // 2 seconds
          const t = Math.min(elapsed / duration, 1)
          setRotationProgress(t)
    
          if (t < 1) {
            requestAnimationFrame(animate)
          } else {
            setIsIntroDone(true)
          }
        }
    
        requestAnimationFrame(animate)
      }, [])
    
      useFrame((state) => {
        if (!group.current) return
    
        if (!isIntroDone) {
          // Animate initial rotation
          const eased = Math.sin((rotationProgress * Math.PI) / 2)
          group.current.rotation.y = eased * Math.PI * 2 
          group.current.rotation.x = 0
        } else {
    
          const { x } = state.pointer 
          group.current.rotation.y = x * 0.3
  
        }
      })
    
 
 
 
 
  return (

    <group ref={group} dispose={null} position={[0, 0,1.05]} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <group position={[0.292, 0.467, -0.09]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.114]}>
        <mesh geometry={(nodes.Object_0 as THREE.Mesh).geometry} material={materials['Material.001']} />
        <mesh geometry={(nodes.Object_0_1 as THREE.Mesh).geometry} material={materials.Silver} />
        <mesh geometry={(nodes.Object_0_2 as THREE.Mesh).geometry} material={materials['Material.004']} />
        <mesh geometry={(nodes.Object_0_3 as THREE.Mesh).geometry} material={materials.Flash} />
        <mesh geometry={(nodes.Object_0_4 as THREE.Mesh).geometry} material={materials.Lens} />
        <mesh geometry={(nodes.Object_0_5 as THREE.Mesh).geometry} material={materials.Screen} />
      </group>
      <mesh geometry={(nodes.screen as THREE.Mesh).geometry} material={materials.Screen} position={[0.292, 0.467, -0.09]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.114]} >
        <meshStandardMaterial map={videoTexture} toneMapped={false} />
      </mesh>
    </group>
    

    // <group {...props} dispose={null}>
    //   <group position={[0.292, 0.467, -0.09]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.114]}>
    //     <mesh geometry={nodes.Object_0.geometry} material={materials['Material.001']} />
    //     <mesh geometry={nodes.Object_0_1.geometry} material={materials.Silver} />
    //     <mesh geometry={nodes.Object_0_2.geometry} material={materials['Material.004']} />
    //     <mesh geometry={nodes.Object_0_3.geometry} material={materials.Flash} />
    //     <mesh geometry={nodes.Object_0_4.geometry} material={materials.Lens} />
    //     <mesh geometry={nodes.Object_0_5.geometry} material={materials.Screen} />
    //   </group>
    //   <mesh geometry={nodes.screen.geometry} material={materials.Screen} position={[0.292, 0.467, -0.09]} rotation={[-Math.PI, 0, -Math.PI]} scale={[1, 1, 0.114]} />
    // </group>
  )
}

useGLTF.preload('/s24.gltf')
