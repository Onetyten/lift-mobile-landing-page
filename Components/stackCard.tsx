'use client'
import React from 'react'
import {motion} from 'framer-motion'

interface propType{
  title:string,
  desc:string,
  delay:number
}


export default function StackCard(props:propType) {
  const {title,desc,delay} = props
  return (
    <motion.div initial={{y:200,opacity:0}} whileInView={{y:0,opacity:100}} viewport={{once:true}} transition={{delay:delay,type:'spring',damping:10,stiffness:100}} className='bg-white/40 backdrop-blur-sm p-6 w-72 lg:w-60 xl:w-80 flex flex-col gap-6'>
        <p  className='text-xl sm:text-2xl '>
            {title}
        </p>
        <p className='text-sm sm:text-base'>
            {desc}
        </p>

    </motion.div>
  )
}
