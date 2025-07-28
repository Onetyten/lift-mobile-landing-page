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
    <div>
        <Link  href={src} target='_blank'  className='flex text-dark justify-end items-center gap-2 hover:scale-150 duration-300 '>
            <p  className='text-xs text-right'>
                {name}
            </p>
            <motion.div initial={{x:-15,opacity:0}} whileInView={{x:0,opacity:100}} viewport={{once:true}} transition={{duration:1,delay:1}} className='relative'>
                {icon}
            </motion.div>
        </Link> 
    </div>

  )
}
