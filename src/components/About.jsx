// eslint-disable-next-line no-unused-vars
import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black'>

        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,
             sell products, explain complex ideas, and hire great people. </h1>
    
    <div className="w-full flex gap-5 pt-10 border-t-[1px] border-[#A1B562] mt-20">
        <div className="w-1/2">
        <h1 className="text-[4vw] font-['Neue_Montreal'] ">Our approach: </h1>
        <button className='flex uppercase gap-10 px-7 py-3.5 items-center  bg-zinc-900 mt-3 rounded-full text-white'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'>
            </div>
        </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-xl bg-[#b0c859]">
        <img className="w-full h-full bg-cover" 
        src=' https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg' alt=''></img>
        </div>
       
    </div>

    </div>
   
  )
}

export default About