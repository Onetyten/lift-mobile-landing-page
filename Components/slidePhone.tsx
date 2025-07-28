import React from 'react'
import Image from 'next/image'

interface propTypes{
    src:string
}

export default function SlidePhone(props:propTypes) {
    const {src} = props
  return (

    <div className='relative w-full h-[600px] mx-auto transition-transform duration-300 ease-in-out'>
        <Image src={src} alt='screen' fill className='object-contain' /> 
    </div>
  )
}
