// eslint-disable-next-line no-unused-vars
import React from 'react'

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 border-t-[1px] border-zinc-700 flex items-center px-20 gap-5 ">
        <div className='cardcontainer h-[55vh] w-1/2'>

            <div className='card relative rounded-lg w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className="w-32" 
                src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
                alt=""></img>
                <button className='absolute px-3 py-0.5 rounded-full 
                text-[#abc45b] font-semibold border-2 border-[#abc45b] 
                left-8 bottom-8'>&copy; 2023-2024 </button>
            </div>

        </div>
        <div className="cardcontainer w-1/2 h-[55vh] flex gap-5 ">

            <div className='card relative w-1/2 rounded-lg h-full bg-zinc-700 flex items-center justify-center '>
                <img className="w-32" 
                src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" 
                alt=""></img>
                <button className='absolute px-3 py-0.5 rounded-full 
                text-[#abc45b] font-semibold border-2 border-[#abc45b] 
                left-8 bottom-8 uppercase'>RATING 5.0 ON CLUTCH</button>
            </div>

            <div className='card relative w-1/2 rounded-lg h-full bg-zinc-700 flex items-center justify-center'>
                <img className="w-32" 
                src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" 
                alt=""></img>
                <button className='absolute px-2 py-0.5 rounded-full 
                text-[#abc45b] font-semibold border-2 border-[#abc45b] 
                left-4 bottom-8 uppercase'>Business Bootcamp Alumni</button>
            </div>

        </div>
    </div>
  )
}

export default Cards