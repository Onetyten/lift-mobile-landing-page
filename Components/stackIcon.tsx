import React from 'react'
import Image from 'next/image'

interface propTypes{
    name:string
    src:string
}

export default function StackIcon(props:propTypes){
    const {name,src} = props
  return (
    <div className='flex text-dark justify-center items-center gap-2'>
        <div className='relative w-7 h-7'>
            <Image src={src} alt={name} unoptimized fill className='object-contain'/>
        </div>
        <p className='text-xs'>
            {name}
        </p>
    </div>
  )
}
