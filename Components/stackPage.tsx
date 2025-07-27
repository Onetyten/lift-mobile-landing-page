import React from 'react'
import StackIcon from './stackIcon'
import LinkIcon from './linkIcon'
import { FaGithub,FaPhone,FaWhatsapp,FaLinkedin,FaXTwitter } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { IoMdPin } from "react-icons/io";
import Image from 'next/image';
import StackCard from './stackCard';

export default function StackPage() {
  return (
    <div className='flex justify-between w-full min-h-screen box-border '>

      <div className='h-screen flex flex-col justify-end items-start p-6 gap-8'>
        <LinkIcon name='Github' icon={<FaGithub size={20} />} src ={'/'}/>
        <LinkIcon name='Email' icon={<GrMail size={20} />} src ={'/'}/>
        <LinkIcon name='Phone' icon={<FaPhone size={20} />} src ={'/'}/>
        <LinkIcon name='Whatsapp' icon={<FaWhatsapp size={20} />} src ={'/'}/>
        <LinkIcon name='Address' icon={<IoMdPin size={20} />} src ={'/'}/>
        <LinkIcon name='Linkedin' icon={<FaLinkedin size={20} />} src ={'/'}/>
        <LinkIcon name='X' icon={<FaXTwitter size={20} />} src ={'/'}/>
      </div>

      <div className='h-screen flex-1 w-full flex justify-center items-center'>


        <div className='w-xl h-[576px] absolute'>
          <Image src={"/logo/logo2.webp"} alt='' objectFit='contain' fill/>
        </div>

        <div className='flex justify-center items-center gap-6 px-36'>
          
          <StackCard/>
          <StackCard/>
          <StackCard/>


        </div>

      </div>





      <div className='h-screen flex flex-col justify-start items-start p-6 pt-20 gap-8'>
        <StackIcon src='/Icons/Expo.webp' name='Expo'/>
        <StackIcon src='/Icons/Express.webp' name='Express'/>
        <StackIcon src='/Icons/ReactNative.webp' name='React Native'/>
        <StackIcon src='/Icons/react.webp' name='React'/>
        <StackIcon src='/Icons/Bcrypt.webp' name='Bcrypt'/>
        <StackIcon src='/Icons/Node.webp' name='Node'/>
        <StackIcon src='/Icons/nativewind.webp' name='Nativewind'/>
        <StackIcon src='/Icons/mongodb.webp' name='MongoDB'/>
        <StackIcon src='/Icons/Git.webp' name='Git'/>

      </div>

    </div>
  )
}
