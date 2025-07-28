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
    <div  className='flex text-dark justify-center items-center gap-2 hover:scale-150 duration-300'>
        <motion.div initial={{x:15,opacity:0}} whileInView={{x:0,opacity:100}} viewport={{once:true}} transition={{duration:1,delay:1}} className='relative w-[24px] h-[24px]'>
            <Image src={src} alt={name} unoptimized fill className='object-contain'/>
        </motion.div>
        <p className='text-xs'>
            {name}
        </p>
    </div>
  )
}
