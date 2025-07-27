'use client'
import React, { Suspense } from 'react'
import LinkButton from './linkButton'
import { Canvas } from '@react-three/fiber'
import PhoneModel from '@/public/3D model/s25/phoneModel'
import S24Model from '@/public/3D model/s24/S24Model'




export default function HeroSection() {
  return (
    <div className="flex items-center w-[90%] lg:w-[80%] relative min-h-screen mt-10 justify-center">

        <div className="flex-1 object-contain flex-col relative flex justify-center items-center ">

          {/* <video muted autoPlay loop src="/video/AppScreen.webm" className='w-64 mt-6 h-auto object-contain'></video> */}
          <p className='font-light text-4xl sm:text-5xl lg:hidden mt-16'>
                LIFT MOBILE
          </p>


          <div className='h-[600px] lg:h-[700px] 2xl:h-[850px]  w-full'>
            <Canvas className='h-full'>
              <ambientLight intensity={2}/>
              <directionalLight intensity={3} position={[5, 5, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}/>
              <spotLight intensity={0.8} position={[2, 5, 5]} angle={0.3} penumbra={1} castShadow/>
              <Suspense fallback={null}>
                  {/* <PhoneModel/> */}
                  <S24Model/>
              </Suspense>
            </Canvas>
          </div>
          
      

          

          <div className='lg:absolute w-full flex justify-center pointer-events-none items-center h-full' >
            
            <div className=' relative h-full lg:w-72 pointer-events-none' >
                
              <p className='font-light hidden lg:block text-5xl absolute 2xl:top-24 2xl:-left-72 top-20 -left-64'>
                Lift mobile
              </p>
              <div className='w-72 sm:w-sm  lg:w-72 lg:absolute 2xl:bottom-56 2xl:-right-[22rem] bottom-52 -right-80 flex flex-col gap-3'>
                <p className='text-sm text-center lg:text-justify'>
                  A user-driven car rental platform that that empowers you to rent out your idle vehicle for extra income or drive your dream car without the commitment. Enjoy a seamless, secure, and user-friendly experience designed for both owners and renters.
                </p>

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
