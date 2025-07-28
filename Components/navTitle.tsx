'use client'
import React from 'react'
import {motion} from 'framer-motion'




export default function NavTitle() {
  return (
    <motion.div initial={{y:-60}} animate={{y:0}} transition={{type:'spring',damping:10,stiffness:120}}>
        <p className="text-md sm:text-lg font-zendots ">
            LIFT MOBILE
        </p>
    </motion.div>
  )
}
