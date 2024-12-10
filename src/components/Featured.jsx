
import { motion } from 'framer-motion'


import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react'

function Featured() {

  const [isHovering , setHovering ] = useState(null);
  const [isHovering2 , setHovering2 ] = useState(null);
  const [isHovering3 , setHovering3] = useState(null);
  const [isHovering4 , setHovering4 ] = useState(null);
  
  return (
    <div className="w-full py-20">
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight ">Featured projects</h1>    
        </div>
        <div className='w-full flex gap-72'>
          <h1 className='px-20 mt-5 uppercase'>Cardboard Spaceship</h1>
          <h1 className='px-16 mt-5 uppercase'>AH2 & Matt Horn</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-6 mt-5">
              
                <div 
                  onMouseEnter={() => setHovering(true)} 
                  onMouseLeave={() => setHovering(false)} 

                  className="cardcontainer relative w-1/2 h-[80vh]">
                  <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-bold
                  text-8xl leading-none tracking-tighter uppercase whitespace-nowrap'>

                    <motion.span 
                    initial={{y: "100%" , opacity: 0 }}
                    animate={isHovering ? ({y: "0%" , opacity: 1 }) : ({y: "100%" , opacity: 0 })}
                    transition={{ease: 'easeInOut'}}
                    className='inline-block'>
                      Cardboard Spaceship
                    </motion.span>

                    </h1>
                  <div className='card w-full h-full bg-green-300 rounded-lg overflow-hidden'>
                    <img className="w-full h-full bg-cover" 
                    src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png' alt=''></img>
                  </div>
                </div>

                <div 
                onMouseEnter={() => setHovering2(true)} 
                onMouseLeave={() => setHovering2(false)} 

                className="cardcontainer relative w-1/2 h-[80vh] ">
                  <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-bold
                  text-8xl leading-none tracking-tighter uppercase whitespace-nowrap'>

                    <motion.span 
                    initial={{y: "100%" , opacity: 0 }}
                    animate={isHovering2 ? ({y: "0%" , opacity: 1 }) : ({y: "100%" , opacity: 0 })}
                    transition={{ease: 'easeInOut'}}
                    className='inline-block'>
                     AH2 & Matt Horn
                    </motion.span>

                  </h1>
                  <div className='card w-full h-full bg-green-300 rounded-lg overflow-hidden'>
                  <img className="w-full h-full bg-cover" 
                  src='https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png' alt=''></img>
                  </div>
                </div>
        
            </div>
        </div>


        <div className='w-full flex gap-96'>
          <h1 className='px-20 mt-10 uppercase'>Trawa</h1>
          <h1 className='px-24 mt-10 uppercase'>Premium Blend</h1>
        </div>
        <div className='px-20'>
            <div className="cards w-full flex gap-6 mt-5">
              
                <div
                onMouseEnter={() => setHovering3(true)} 
                onMouseLeave={() => setHovering3(false)} 
                
                className="cardcontainer relative w-1/2 h-[80vh]">
                  <h1 className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-bold
                  text-8xl leading-none tracking-tighter uppercase whitespace-nowrap'>
                  <motion.span 
                    initial={{y: "100%" , opacity: 0 }}
                    animate={isHovering3 ? ({y: "0%" , opacity: 1 }) : ({y: "100%" , opacity: 0 })}
                    transition={{ease: 'easeInOut'}}
                    className='inline-block'>
                      Trawa
                    </motion.span>
                  </h1>
                  <div className='card w-full h-full bg-green-300 rounded-lg overflow-hidden'>
                    <img className="w-full h-full bg-cover" 
                    src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg' alt=''></img>
                  </div>
                </div>
                <div 
                onMouseEnter={() => setHovering4(true)} 
                onMouseLeave={() => setHovering4(false)} 
                
                className="cardcontainer relative w-1/2 h-[80vh] ">
                  <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-bold
                  text-8xl leading-none tracking-tighter uppercase whitespace-nowrap'>
                  <motion.span 
                    initial={{y: "100%" , opacity: 0 }}
                    animate={isHovering4 ? ({y: "0%" , opacity: 1 }) : ({y: "100%" , opacity: 0 })}
                    transition={{ease: 'easeInOut'}}
                    className='inline-block'>
                      Premium Blend
                    </motion.span>
                  </h1>
                  <div className='card w-full h-full bg-green-300 rounded-lg overflow-hidden'>
                  <img className="w-full h-full bg-cover" 
                  src='https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png' alt=''></img>
                  </div>
                </div>
        
            </div>
        </div>


    </div>
  )
}

export default Featured