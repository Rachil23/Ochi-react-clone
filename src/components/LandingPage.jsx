
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>

        <div className='textstructure mt-40 px-20'>
            {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
                return (
                // eslint-disable-next-line react/jsx-key
                <div className='masker '>
                    <div className='w-fit flex items-end overflow-hidden'>
                        {index === 1 && (
                            <motion.div initial={{width: 0}} 
                            animate={{width: "9vw"}} 
                            transition={{ease : [0.76 , 0 , 0.24 , 1] , duration: 2}}
                            className='w-[9vw] h-[5.1vw] relative -top-[0.2vw] rounded-sm bg-red-500'>

                                
                            </motion.div>
                        )}
                        <h1 className="uppercase text-[7.8vw] leading-[6.5vw] tracking-tighter  font-medium">{item}</h1>
                    </div>   
                </div>
                )})}   
        </div>

        <div className='border-t-[1px] border-zinc-700 mt-24 flex justify-between items-center py-5 px-20'>
            {[
                "For public and private companies", 
                "From the first pitch to IPO",
            // eslint-disable-next-line no-unused-vars    
            ].map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <p className='text-md tracking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-5'>
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>
                    Start the project</div>
                <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full'>
                    <span className=' rotate-[45deg]'> 
                        <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage