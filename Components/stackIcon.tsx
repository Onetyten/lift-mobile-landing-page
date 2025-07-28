'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

interface propTypes{
    name:string
    src:string
}

export default function StackIcon(props:propTypes){
    const {name,src} = props
  return (
    <motion.div initial={{y:-60,opacity:0}} whileInView={{y:0,opacity:100}} viewport={{once:true}} transition={{duration:1}}  className='flex text-dark justify-center items-center gap-2 hover:scale-150 duration-300'>
        <div className='relative w-7 h-7'>
            <Image src={src} alt={name} unoptimized fill className='object-contain'/>
        </div>
        <p className='text-xs'>
            {name}
        </p>
    </motion.div>
  )
}
