'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import Link from 'next/link'
import OutsideClickHandler from 'react-outside-click-handler'


export default function HamburgerMenu() {
    const [showMenu,setShowMenu] = useState(false)
  return (
    <div className='flex sm:hidden gap-6 items-center'>
           <RxHamburgerMenu onClick={()=>{setShowMenu(!showMenu)}} />
           <OutsideClickHandler onOutsideClick={()=>{setShowMenu(false)}}>
                {showMenu && (
                    <div className='flex sm:hidden absolute backdrop-blur-xl bg-primary/40 right-4 top-5 rounded-md flex-col gap-2 p-3 '>
                        <Link target="_blank" href={"https://github.com/Onetyten/Lift-mobile"}>
                            <div className='p-1 text-center hover:text-white'>
                            Explore Github
                            </div>
                        </Link>
                        <Link target="_blank" href={"mailto:labaekaabdulrazaq@gmail.com"}>
                            <div className='p-1 text-center hover:text-white'>
                            Email
                            </div>
                        </Link>
                    </div>)}
           </OutsideClickHandler>

        </div>

  )
}
