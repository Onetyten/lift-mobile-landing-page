import React, { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface propTypes{
    name:string
    src:string
    icon:ReactNode
}

export default function LinkIcon(props:propTypes){
    const {name,src,icon} = props
  return (
    <Link  href={src}  className='flex text-dark justify-center items-center gap-2'>
        <div className='relative'>
            {icon}
        </div>
        <p className='text-xs'>
            {name}
        </p>
    </Link>
  )
}
