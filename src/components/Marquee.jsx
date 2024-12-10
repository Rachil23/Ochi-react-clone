// eslint-disable-next-line no-unused-vars
import React from 'react';
import {motion} from "framer-motion";

function Marquee() {
  return (
    <div className='w-full py-20 rounded-t-3xl bg-[#004D43] '>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap '>
      <motion.h1 
      initial={{x:0}} 
      animate={{x:"-100%"}} 
      transition={{ease: "linear" , repeat: Infinity, duration: 12}} 
      className='uppercase text-[20vw] leading-none font-["Neue Montreal"] tracking-tighter pb-[3vw] font-bold pr-20 '>
        We are Ochi</motion.h1>
      <motion.h1 
      initial={{x:0}} 
      animate={{x:"-100%"}} 
      transition={{ease: "linear" , repeat: Infinity, duration: 12}} 
      className='uppercase text-[20vw] leading-none font-["Neue Montreal"] tracking-tighter pb-[3vw] font-bold pr-20 '>
        We are Ochi</motion.h1>
      <motion.h1 
      initial={{x:0}} 
      animate={{x:"-100%"}} 
      transition={{ease: "linear" , repeat: Infinity, duration: 12}} 
      className='uppercase text-[20vw] leading-none font-["Neue Montreal"] tracking-tighter pb-[3vw] font-bold pr-20'>
        We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee