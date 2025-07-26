import Link from 'next/link'
import React from 'react'

interface propType{
  name:string
  href:string
}

export default function LinkButton(props:propType) {
  const {name,href} = props
  return (
    <Link href={href}>
        <div className='p-3 px-6 bg-primary text-center hover:bg-lime-400'>
          {name}
        </div>
    </Link>

  )
}
