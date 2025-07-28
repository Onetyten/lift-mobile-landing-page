import React from 'react'
import Image from "next/image";
import LinkButton from './linkButton';
import HamburgerMenu from './hamburger';
import NavTitle from './navTitle';


export default function Navbar() {
  


  return (
    
    <div className=" w-screen fixed top-0 backdrop-blur-sm shadow-primary flex z-60 justify-between items-center p-3">
        {/* left side  */}
        <div className="flex justify-center items-center gap-3" >
          <div className="relative w-6 h-6 sm:w-8 sm:h-8 xl:w-12 xl:h-12 object-contain">
             <Image src={"/logo/logo.webp"} alt="logo" fill/>
          </div>
          <NavTitle/>
         
        </div>

        {/* right side */}

        <div className='sm:flex hidden gap-6 items-center'>
            <LinkButton name='Explore GitHub' href="https://github.com/Onetyten/Lift-mobile"/>
            <LinkButton name='Email' href="mailto:labaekaabdulrazaq@gmail.com"/>
        </div>
        <HamburgerMenu/>

        
        

    </div>
  )
}
