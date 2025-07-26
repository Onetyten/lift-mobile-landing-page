import React from 'react'
import LinkButton from './linkButton'

export default function HeroSection() {
  return (
    <div className="flex items-center w-[80%] relative h-[80vh] justify-center">
        {/* <div className=" flex flex-col">
          <div className='w-sm flex flex-col gap-3'>
              <p className='font-light text-5xl'>
                Lift mobile
              </p>
              <p className='text-sm'>
                A user-driven car rental platform that allows individuals to rent out their cars when not in use. Built with Express.js and MongoDB, it has a smooth authentication and profile creation system and provides a seamless and secure experience for both car owners and renters
              </p>
              <div className='w-44'>
                <LinkButton name='Explore GitHub' href='/'/>
              </div>
          </div>
           

        </div> */}





        <div className="flex-1 object-contain flex-col relative flex justify-center gap-10 items-center ">




          
          <video muted autoPlay loop src="/video/AppScreen.webm" className='w-64 mt-6 h-auto object-contain'></video>


          <div className='w-44'>
            <LinkButton name='Explore GitHub' href='/'/>
          </div>

          <div className='absolute w-full flex justify-center pointer-events-none items-center h-full' >
            
            <div className=' relative h-full w-72 pointer-events-none' >
                
              <p className='font-light text-5xl absolute top-0 -left-64'>
                Lift mobile
              </p>
              <div className='w-72 absolute bottom-24 -right-80 flex flex-col gap-3'>
                <p className='text-sm text-justify'>
                  A user-driven car rental platform that allows individuals to rent out their cars when not in use. Built with Express.js and MongoDB, it has a smooth authentication and profile creation system and provides a seamless and secure experience for both car owners and renters
                </p>

              </div>
            </div>




          </div>





        </div>
    </div>
  )
}
