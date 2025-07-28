'use client'
import React from 'react'
import {motion} from 'framer-motion'





export default function HeroTitle() {
  return (
    <div className='hidden lg:flex flex-col items-end  absolute 2xl:top-28 2xl:-left-[21rem] top-20 -left-80'>
                
        <motion.p initial={{opacity:0,y:20}} animate={{opacity:100,y:0}} transition={{delay:1.5,duration:0.6}} className='font-light text-5xl '>
            LIFT MOBILE
        </motion.p>
        <motion.div initial={{width:0}} animate={{width:'100%'}} transition={{delay:1,duration:0.5}} className='w-full h-0.5 mt-3 bg-dark'>

        </motion.div>
    </div>
  )
}
