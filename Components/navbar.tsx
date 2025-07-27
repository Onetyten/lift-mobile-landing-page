import React from 'react'
import Image from "next/image";
import LinkButton from './linkButton';
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

export default function Navbar() {
  return (
    
    <div className=" w-screen fixed top-0 backdrop-blur-sm shadow-primary flex z-60 justify-between items-center p-3">
        {/* left side  */}
        <div className="flex justify-center items-center gap-3" >
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 xl:w-12 xl:h-12 object-contain">
             <Image src={"/logo/logo.webp"} alt="logo" fill/>
          </div>
          <p className="text-md sm:text-xl font-zendots ">
            Lift Mobile
          </p>
         
        </div>

        {/* right side */}

        <div className='sm:flex hidden gap-6 items-center'>
            <LinkButton name='Explore GitHub' href='/'/>
            <LinkButton name='Email' href='/'/>
        </div>

        <div className='flex sm:hidden gap-6 items-center'>
           <RxHamburgerMenu />
        </div>

        <div className=' absolute backdrop-blur-xl bg-primary/30 right-4 top-5 rounded-md'>
              <Link href={"/"}>
                  <div className='p-3 bg-primary/40 text-center hover:bg-lime-300'>
                    Explore Github
                  </div>
              </Link>
              <Link href={"/"}>
                  <div className='p-3 bg-primary/40 text-center hover:bg-lime-300'>
                    Email
                  </div>
              </Link>
        </div>

    </div>
  )
}
