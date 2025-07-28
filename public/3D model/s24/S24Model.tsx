'use client'

import { useCursor,useGLTF } from "@react-three/drei";
import { useState,useRef,useEffect} from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; 




export default function S24Model() {
    const group = useRef<THREE.Group>(null!)
    const [hovered,setHovered] = useState(false)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    useCursor(hovered)
  
    const { nodes, materials} = useGLTF('/3D model/s24/s24.gltf')
    useGLTF.preload("/3D model/s24/s24.gltf")
    const [rotationProgress, setRotationProgress] = useState(0)
    const [isIntroDone, setIsIntroDone] = useState(false)
    const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null)


      useEffect(() => {
        const createVideoTexture = () => {
            const vid = document.createElement("video")
            vid.src = "/video/screenRecord.webm"
            vid.crossOrigin = "anonymous"
            vid.loop = true
            vid.muted = true
            vid.playsInline = true
            let playAttempted = false

            const handleCanPlay = () => {
                if (!playAttempted) {
                    playAttempted = true
                    vid.play().catch(error => {
                        console.warn("Video play error:", error)
                    })
                }
            }

            vid.addEventListener('canplay', handleCanPlay)
            const texture = new THREE.VideoTexture(vid)
            texture.flipY = false
            videoRef.current = vid
            setVideoTexture(texture)
            return () => {
                vid.removeEventListener('canplay', handleCanPlay)
                vid.pause()
                vid.remove()
            }
        }

        const cleanup = createVideoTexture()

        return cleanup
      }, [])

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
  )
}

useGLTF.preload('/s24.gltf')
