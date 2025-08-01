import React from 'react'
import StackIcon from './stackIcon'
import LinkIcon from './linkIcon'
import { FaGithub,FaPhone,FaWhatsapp,FaLinkedin,FaXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { IoMdPin } from "react-icons/io";
import Image from 'next/image';
import StackCard from './stackCard';

export default function StackPage() {
  const stackIconLIst = [
    {name:'Expo',src:'/Icons/Expo.webp'},
    {name:'Express',src:'/Icons/Express.webp'},
    {name:'React native',src:'/Icons/ReactNative.webp'},
    {name:'React',src:'/Icons/react.webp'},
    {name:'Node',src:'/Icons/Node.webp'},
    {name:'MongoDB',src:'/Icons/mongodb.webp'},
    {name:'Git',src:'/Icons/Git.webp'},
  ]
  
  const cardDetails=[
    {title:'Unlock Idle Assets', desc:'The average car is idle 95% of the time, sitting in parking lots or driveways, Lift mobile is significant opportunity for owners to monetize their vehicles and rent out their idle cars, turning a depreciating asset into a source of income.'},
    {title:'Drive Your Dream Car', desc:'Rent your dream car without the commitment of ownership, enjoying flexibility and freedom on your terms'},
    {title:'Seamless Experience', desc:'Seamlessly rent or share your car with a user-friendly platform, offering secure bookings, real-time availability, and hassle-free access to a wide range of vehicles tailored to your needs.'},
  ]



  return (
    <div className='flex flex-row flex-wrap justify-center w-full min-h-screen mb-10 sm:mb-0 '>

      {/* contact section */}
      {/* <div className='sm:min-h-screen sm:order-1 order-2 w-36 flex flex-col pl-2 justify-center items-end p-2 sm:p-6 gap-8'>
        <LinkIcon name='Github' icon={<FaGithub size={24} />} src ={"https://github.com/Onetyten/Lift-mobile"}/>
        <LinkIcon name='Email' icon={<GrMail size={24} />} src ={"mailto:labaekaabdulrazaq@gmail.com"}/>
        <LinkIcon name='Phone' icon={<FaPhone size={24} />} src ={"tel:+2349155073769"}/>
        <LinkIcon name='Whatsapp' icon={<FaWhatsapp size={24} />} src ={"https://wa.me/+2347089126752"}/>
        <LinkIcon name='Address' icon={<IoMdPin size={24} />} src ={"https://maps.app.goo.gl/BtMczikoAdhF55o27"}/>
        <LinkIcon name='Linkedin' icon={<FaLinkedin size={24} />} src ={"https://www.linkedin.com/in/lab-adetayo"}/>
        <LinkIcon name='X' icon={<FaXTwitter size={24} />} src ={"https://x.com/Onetyten_exe"}/>
      </div> */}



      {/* card section */}
      <div className='min-h-screen flex w-screen sm:w-auto  justify-center items-center'>


        <div className='w-xl h-[576px] -z-10 absolute'>
          <Image src={"/logo/logo2.webp"} alt='' objectFit='contain' fill/>
        </div>

        <div className='flex justify-center flex-col my-10 lg:flex-row sm:items-stretch gap-6'>
          {cardDetails.map((item,index:number)=>{
            return(
              <StackCard key={index} title={item.title} desc={item.desc} delay={index*0.3}/>
            )
          })}
          


        </div>

      </div>

      {/* icon section */}
       {/* <div className='sm:min-h-screen sm:order-3 order-3 w-36 flex flex-col pr-2 justify-center items-start p-2 sm:p-6 gap-8'>
          {stackIconLIst.map((item,index)=>{
            return(
              <StackIcon key={index} src={item.src} name={item.name}/>
            )
          })}
       </div> */}


    </div>
  )
}
