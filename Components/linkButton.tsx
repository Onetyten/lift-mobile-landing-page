import Link from 'next/link'
import React from 'react'

interface propType{
  name:string
  href:string
}

export default function LinkButton(props:propType) {
  const {name,href} = props
  return (
    <Link target="_blank" href={href}>
        <div className='p-2 px-4 lg:p-3 lg:px-6 bg-primary text-center hover:bg-lime-300'>
          {name}
        </div>
    </Link>

  )
}
