import React from 'react'
import Image from "next/image";
import LinkButton from './linkButton';

export default function Navbar() {
  return (
    
    <div className=" w-screen relative shadow-primary flex justify-between items-center p-3">
        {/* left side  */}
        <div className="flex justify-center items-center gap-3" >
          <div className="relative w-8 h-8 object-contain">
             <Image src={"/logo/logo.webp"} alt="logo" fill/>
          </div>
          <p className="text-xl font-zendots ">
            Lift Mobile
          </p>
         
        </div>

        {/* right side */}

        <div className='flex gap-6 items-center'>
            
            <LinkButton name='Explore GitHub' href='/'/>
            <LinkButton name='Email' href='/'/>

        </div>

    </div>
  )
}
