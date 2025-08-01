import React, { Suspense } from 'react'
import Image from 'next/image'

interface propTypes{
    src:string
}

export default function SlidePhone(props:propTypes) {
    const {src} = props
  return (

    <Suspense 
    fallback={
    <div className='h-[600px] w-72 bg-gray-300/10 backdrop-blur-3xl'>

    </div>}>
      <div className='relative w-full h-[600px] mb-0  xs:mb-7 sm:mb-12 mx-auto transition-transform duration-300 ease-in-out'>
        <Image src={src} alt='screen' fill className='object-contain' /> 
      </div>
    </Suspense>

  )
}
