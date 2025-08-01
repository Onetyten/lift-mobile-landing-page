'use client'
import React, { Suspense } from 'react'
import LinkButton from './linkButton'
import { Canvas } from '@react-three/fiber'
import {motion} from 'framer-motion' 
import HeroTitle from './HeroTitle'
import PhoneModel from '@/public/3D model/s25/phoneModel'
import {Spinner} from "react-activity"
import "react-activity/dist/library.css";




export default function HeroSection() {
  return (
    <div className="flex items-center w-[90%] lg:w-[80%] relative min-h-screen mt-10 justify-center">

        <div className="flex-1 object-contain flex-col relative flex justify-center items-center ">

          {/* <video muted autoPlay loop src="/video/AppScreen.webm" className='w-64 mt-6 h-auto object-contain'></video> */}
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:100,y:0}} transition={{delay:0,duration:0.8}}  className='font-light text-4xl sm:text-5xl lg:hidden mt-16'>
                LIFT MOBILE
          </motion.p>


          <div className='h-[600px] lg:h-[700px] 2xl:h-[850px]  w-full'>
            <Suspense 
              fallback={
              <div className=' w-full flex justify-center items-center h-full'>
                <div className='bg-gray-300/10 backdrop-blur-3xl  h-[80%] w-60 sm:w-68 2xl:w-96 flex flex-col gap-4 justify-center items-center'>
                  <p className='text-sm'>Loading 3d model</p>
                  <Spinner size={20}/>
                </div>
              </div>}>
              <Canvas className='h-full'>
                <ambientLight intensity={2}/>
                <directionalLight intensity={3} position={[5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}/>
                <spotLight intensity={0.8} position={[2, 5, 5]} angle={0.3} penumbra={1} castShadow/>
                <PhoneModel/>         
              </Canvas>
            </Suspense>

          </div>
          
      

          

          <div className='lg:absolute w-full flex justify-center pointer-events-none items-center h-full' >
            
            <div className=' relative h-full lg:w-72 pointer-events-none' >
                
              <HeroTitle/>


              <div className='w-72 sm:w-sm  lg:w-72 lg:absolute 2xl:bottom-56 2xl:-right-[22rem] bottom-52 -right-80 flex flex-col gap-3'>
                <motion.div initial={{width:0}} animate={{width:'100%'}} transition={{delay:1,duration:0.5}} className='w-full h-0.5 mt-3 bg-dark hidden lg:block'>
        
                </motion.div>
                <motion.p initial={{opacity:0,y:-20}} animate={{opacity:100,y:0}} transition={{delay:1.5,duration:0.6}} className='text-sm text-center lg:text-justify'>
                  A user-driven car rental platform that that empowers you to rent out your idle vehicle for extra income or drive your dream car without the commitment. Enjoy a seamless, secure, and user-friendly experience designed for both owners and renters.
                </motion.p>
                

              </div>
            </div>




          </div>

          <div className='w-44 my-16  lg:mt-0'>
            <LinkButton name='Explore GitHub' href='/'/>
          </div>





        </div>
    </div>
  )
}
