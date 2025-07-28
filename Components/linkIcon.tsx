'use client'
import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'

interface propTypes{
    name:string
    src:string
    icon:ReactNode
}

export default function LinkIcon(props:propTypes){
    const {name,src,icon} = props
  return (
    <motion.div initial={{y:30,opacity:0}} whileInView={{y:0,opacity:100}} viewport={{once:true}} transition={{duration:1}}>
        <Link  href={src} target='_blank'  className='flex text-dark justify-center items-center gap-2 hover:scale-150 duration-300 '>
            <div className='relative'>
                {icon}
            </div>
            <p className='text-xs'>
                {name}
            </p>
        </Link> 
    </motion.div>

  )
}
